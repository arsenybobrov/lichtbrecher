import React from 'react';
import renderer from 'react-test-renderer';
import ComponentsRenderer from '../ComponentsRenderer';

const DataUnknownSlicesMock = {
  slices: [
    {
      slice_type: 'slice_name',
    },
    {
      slice_type: 'slice_another_name',
    },
  ],
};

describe('componentRenderer snapshot', () => {
  it.each`
    name                                                                                          | mock
    ${'renders 2 dummy components, because slice_name & slice_another_name is not inside map.js'} | ${DataUnknownSlicesMock}
  `('$name', ({ mock }) => {
    const tree = renderer.create(<ComponentsRenderer {...mock} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      Array [
        <div>
          <div
            className="DummySlice__Wrapper-sc-1d2g0lh-0 HPnPI"
          >
            the slice 
            slice_name
             does not exist yet...
          </div>
        </div>,
        <div>
          <div
            className="DummySlice__Wrapper-sc-1d2g0lh-0 HPnPI"
          >
            the slice 
            slice_another_name
             does not exist yet...
          </div>
        </div>,
      ]
    `);
  });
});
