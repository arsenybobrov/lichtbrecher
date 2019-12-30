import dummy from '../dummy';

describe('dummy fnc', () => {
  it('3 + 20 should return 23', () => {
    expect(dummy(20)).toEqual(23);
  });

  it('3 + 1 should return 4', () => {
    expect(dummy(1)).toEqual(4);
  });
});
