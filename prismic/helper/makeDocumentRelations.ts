import map from 'lodash/map';
import forEach from 'lodash/forEach';
import { PRISMIC_API_IDS } from '../config';

const mapDocuments = (documents: Array<Object>) => {
  const documentMap: any = {};

  map(documents, (document: any) => {
    documentMap[document.uid] = {
      id: document.id,
      uid: document.uid,
      type: document.type,
      category: document.data[PRISMIC_API_IDS.category] || {},
      displayName: document.data[PRISMIC_API_IDS.displayName],
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
      document[PRISMIC_API_IDS.category] &&
      document[PRISMIC_API_IDS.category].uid &&
      document[PRISMIC_API_IDS.category].uid !== document.uid &&
      documentMap[document[PRISMIC_API_IDS.category].uid]
    ) {
      documentMap[document.uid].parent.push({
        id: documentMap[document[PRISMIC_API_IDS.category].uid].id,
        uid: documentMap[document[PRISMIC_API_IDS.category].uid].uid,
        type: documentMap[document[PRISMIC_API_IDS.category].uid].type,
        displayName: documentMap[document[PRISMIC_API_IDS.category].uid].displayName,
        parent: documentMap[document[PRISMIC_API_IDS.category].uid].parent,
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
