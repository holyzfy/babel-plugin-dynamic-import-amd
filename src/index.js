"use strict";

let template = require('babel-template');
let syntax  = require('babel-plugin-syntax-dynamic-import');

const TYPE_IMPORT = 'Import';

const buildImport = template(`
  (new Promise(resolve => require([SOURCE], resolve)))
`);

module.exports = {
  inherits: syntax,

  visitor: {
    CallExpression(path) {
      if (path.node.callee.type === TYPE_IMPORT) {
        const newImport = buildImport({
          SOURCE: path.node.arguments,
        });
        path.replaceWith(newImport);
      }
    },
  },
};
