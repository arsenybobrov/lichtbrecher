/* eslint-disable import/no-extraneous-dependencies */
const registerRequireContextHook = require('babel-plugin-require-context-hook/register');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

registerRequireContextHook();
Enzyme.configure({ adapter: new Adapter() });
