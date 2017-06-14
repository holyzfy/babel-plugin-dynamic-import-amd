define([], function () {
  'use strict';

  function getModule(path) {
    return new Promise(resolve => require(['test-module'], resolve));
  }

  getModule().then(() => {});
});
