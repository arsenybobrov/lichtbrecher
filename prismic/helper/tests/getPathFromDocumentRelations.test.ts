import getPathFromDocumentRelations from '../getPathFromDocumentRelations';
import { documentTree } from './makeDocumentRelations.mock';

describe('getPathFromDocumenTree', () => {
  it('should get path from level 3 uid', () => {
    expect.hasAssertions();
    expect(getPathFromDocumentRelations('level3', documentTree)).toStrictEqual(
      'level1/level2/level3'
    );
  });
  it('should get path from level 2 uid', () => {
    expect.hasAssertions();
    expect(getPathFromDocumentRelations('level2', documentTree)).toStrictEqual('level1/level2');
  });
  it('should get path from level 1 uid', () => {
    expect.hasAssertions();
    expect(getPathFromDocumentRelations('level1', documentTree)).toStrictEqual('level1');
  });
});
