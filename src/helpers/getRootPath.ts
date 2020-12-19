const env = process && process.env && process.env.STORYBOOK_ROOT;

const root = env ? '' : '/';

export default root;
