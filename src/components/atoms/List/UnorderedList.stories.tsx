import React from 'react';
import { ListItem, OrderedList } from './List';
import { listMock, listSimpleMock } from './ListMocks.mocks';

export default {
  title: 'Atoms/Lists/Ordered',
  component: OrderedList,
  subcomponents: { ListItem },
  parameters: {
    docs: {
      description: {
        component:
          'The List components use em for sizes and margins, so you can increase the font-size for the context and the list will adapt.',
      },
    },
  },
};

const OrderedListTemplate = ({
  data,
}: {
  data: Array<{ text: string; list: [{ text: string }] }>;
}) => (
  <OrderedList>
    {data?.map((listItem) => (
      <ListItem key={`list-${Math.random()}`}>
        {listItem.text}
        {listItem.list?.length > 0 && (
          <OrderedList>
            {listItem.list.map((subListItem) => (
              <ListItem key={`sublist-${Math.random()}`}>{subListItem.text}</ListItem>
            ))}
          </OrderedList>
        )}
      </ListItem>
    ))}
  </OrderedList>
);

export const Simple = OrderedListTemplate.bind({});
// @ts-ignore
Simple.args = {
  data: listSimpleMock,
};

export const TwoLevels = OrderedListTemplate.bind({});
// @ts-ignore
TwoLevels.args = {
  data: listMock,
};

export const IncreasedFontSize = OrderedListTemplate.bind({});
// @ts-ignore
IncreasedFontSize.decorators = [
  (Story: any) => (
    <div style={{ fontSize: '20px' }}>
      <Story />
    </div>
  ),
];

// @ts-ignore
IncreasedFontSize.args = {
  data: listMock,
};

// @ts-ignore
IncreasedFontSize.storyName = 'Fontsize 20px';
