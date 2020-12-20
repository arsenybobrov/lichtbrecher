import React from 'react';
import { UnorderedList, ListItem } from './List';
import { listMock, listSimpleMock } from './ListMocks.mocks';

export default {
  title: 'Atoms/Lists/Unordered',
  component: UnorderedList,
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

const UnorderedListTemplate = ({
  data,
}: {
  data: Array<{ text: string; list: [{ text: string }] }>;
}) => (
  <UnorderedList>
    {data?.map((listItem) => (
      <ListItem key={`list-${Math.random()}`}>
        {listItem.text}
        {listItem.list?.length > 0 && (
          <UnorderedList>
            {listItem.list.map((subListItem) => (
              <ListItem key={`sublist-${Math.random()}`}>{subListItem.text}</ListItem>
            ))}
          </UnorderedList>
        )}
      </ListItem>
    ))}
  </UnorderedList>
);

export const Simple = UnorderedListTemplate.bind({});
// @ts-ignore
Simple.args = {
  data: listSimpleMock,
};

export const TwoLevels = UnorderedListTemplate.bind({});
// @ts-ignore
TwoLevels.args = {
  data: listMock,
};

export const IncreasedFontSize = UnorderedListTemplate.bind({});
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
