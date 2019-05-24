"use strict";

module.exports = {
  meta: {
    docs: {
        description: "enforce deprecated functions",
        category: "Best Practices",
        recommended: false
    },
    schema: [{
        "enum": ["warn", "error"]
    },
    {
      type: "object",
      properties: {
          functions: {
              type: "array",
              "items": {
                "type": "object",
                properties: {
                  name: {
                    type: "string"
                  },
                  use: {
                    type: "string"
                  }
                }
              }
          }
      },
      additionalProperties: false
    }]
  },
  create(context) {
    const config = context.options || {};
    const functionconfig = context.options[1].functions
    const names = functionconfig.map(el => el.name);
    const useNames = functionconfig.map(el => el.use);
    return {
      CallExpression(node) {
        const isDepIndex = names.indexOf(node.callee.name);
        const isIdentifier = node.callee.type === 'Identifier';
        if (isDepIndex > -1 && isIdentifier) {
          context.report({
            node,
            message: `deprecated function - ${names[isDepIndex]} should not be used, use ${useNames[isDepIndex]} instead`
          });
        }
      }
    };
  }
}
