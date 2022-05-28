require('raf/polyfill');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { window } = new JSDOM('');

global.document = window.document;
global.window = window;

const EXCLUDED_PROPS = ['localStorage', 'sessionStorage'];

Object.keys(window).forEach((property) => {
  if (typeof global[property] === 'undefined' && !EXCLUDED_PROPS.includes(property)) {
    global[property] = window[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};
