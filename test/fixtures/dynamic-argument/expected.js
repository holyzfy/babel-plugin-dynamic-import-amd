define([], function () {
  'use strict';

  const MODULE = 'test-module';

  new Promise(resolve => require([MODULE], resolve));
  new Promise(resolve => require([`test-${MODULE}`], resolve));
});
