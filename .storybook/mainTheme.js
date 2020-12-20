import { create } from '@storybook/theming/create';
import Settings from '../next.config';

// See https://storybook.js.org/docs/react/configure/theming#create-a-theme-quickstart for more options

export default create({
  base: 'light',
  brandTitle: Settings.env.repoName,
});
