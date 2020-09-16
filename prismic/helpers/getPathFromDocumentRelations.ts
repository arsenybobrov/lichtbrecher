import find from 'lodash/find';

const findDocumentRelations = (uid: string, documentRelations: any) => (
  find(documentRelations, (item) => uid === item.uid)
);

let pathString: string;

const getPath = (tree: any, index: number): string | false => {
  if (!tree) return false;
  let localIndex = 1;
  if (index) {
    localIndex += index;
  }
  if (localIndex <= 1) {
    pathString = tree.uid;
  } else {
    pathString = `${tree.uid}/${pathString}`;
  }
  getPath(tree.parent[0], localIndex);
  return pathString; // eslint-disable-line consistent-return
};

const getPathFromDocumentRelations = (
  uid: string | null | undefined,
  documentRelations: any
): string | false => {
  if (uid) return getPath(findDocumentRelations(uid, documentRelations), 0);
  return false;
};

export default getPathFromDocumentRelations;
