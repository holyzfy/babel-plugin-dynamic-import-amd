define([], function () {
  'use strict';

  new Promise(resolve => require(['test-module'], resolve)).then(() => new Promise(resolve => require(['test-module-2'], resolve)));

  Promise.all([new Promise(resolve => require(['test-1'], resolve)), new Promise(resolve => require(['test-2'], resolve)), new Promise(resolve => require(['test-3'], resolve))]).then(() => {});
});
