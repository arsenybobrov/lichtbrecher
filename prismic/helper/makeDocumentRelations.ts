import map from 'lodash/map';
import forEach from 'lodash/forEach';

const mapDocuments = (documents: Array<Object>) => {
  const documentMap: any = {};

  map(documents, (document: any) => {
    documentMap[document.uid] = {
      id: document.id,
      uid: document.uid,
      type: document.type,
      category: document.data.category || {},
      displayName: document.data.display_name,
    };
    documentMap[document.uid].parent = [];
  });
  return documentMap;
};

const documentRelations = (documentMap: any) => {
  let document;
  const tree: any = [];
  forEach(documentMap, (item: any) => {
    document = documentMap[item.uid];
    if (
      document.category &&
      document.category.uid &&
      document.category.uid !== document.uid &&
      documentMap[document.category.uid]
    ) {
      documentMap[document.uid].parent.push({
        id: documentMap[document.category.uid].id,
        uid: documentMap[document.category.uid].uid,
        type: documentMap[document.category.uid].type,
        displayName: documentMap[document.category.uid].displayName,
        parent: documentMap[document.category.uid].parent,
      });
      tree.push(document);
    } else {
      tree.push(document);
    }
  });
  return tree;
};

export const makeDocumentRelations = (documents: Array<Object>) => {
  const documentMap = mapDocuments(documents);
  return documentRelations(documentMap);
};

export default makeDocumentRelations;
