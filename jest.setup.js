/* eslint-disable import/no-extraneous-dependencies */
const registerRequireContextHook = require('babel-plugin-require-context-hook/register');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

registerRequireContextHook();
Enzyme.configure({ adapter: new Adapter() });

process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['images.prismic.io'],
    path: '/',
    loader: 'default',
  },
};
