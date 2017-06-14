define([], function () {
  'use strict';

  const testModule = new Promise(resolve => require(['test-module'], resolve));
});
