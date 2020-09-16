import documentsMock, { documentTree } from './makeDocumentRelations.mock';
import makeDocumentRelations from '../makeDocumentRelations';

describe('makeDocumentRelations', () => {
  it('gets documentTree', () => {
    expect.hasAssertions();
    expect(makeDocumentRelations(documentsMock)).toStrictEqual(documentTree);
  });
});
