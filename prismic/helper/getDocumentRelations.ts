import makeDocumentRelations from './makeDocumentRelations';
import isClient from '../../src/helpers/isClient';
import { fetchDocuments } from './fetchContent';

let documents: any;

export const getPrismicDocuments = async (): Promise<boolean> => {
  documents = await fetchDocuments();
  return !documents.message;
};

export const hydrate = (documentTree: Array<Object>) => JSON.stringify(documentTree);

export const getClientDocumentRelations = () => (
  // @ts-ignore
  window && window.DOCUMENT_RELATIONS
    ?
    // @ts-ignore
    window.DOCUMENT_RELATIONS
    : null
);

export const getServerDocumentRelations = () => (
  documents !== undefined ? makeDocumentRelations(documents) : null
);

export const setDocumentRelations = async (): Promise<() => any> => {
  const hasDocuments = await getPrismicDocuments();
  function getDocs(): Array<Object> | false {
    if (hasDocuments) {
      if (!isClient()) {
        return makeDocumentRelations(documents);
      }
      return getClientDocumentRelations();
    }
    return false;
  }

  return getDocs;
};

export default setDocumentRelations;
