const rule = require("../../../lib/rules/functions");
const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    "sourceType": "module",
    ecmaFeatures: {
      jsx: true,
    },
  }
});

const ERROR_MSG_NOT_STYLED = 'deprecated functions should not be used';

const ruleTester = new RuleTester();

ruleTester.run("functions", rule, {
    valid: [
      {
          code: 'var x = noDeprecate()',
          options: ['warn', {
            functions: [{
              name: 'deprecated',
              use: 'notDeprecated'
            }]
          }]
      }
    ],
    invalid: [
        {
            code: 'var x = deprecated()',
            errors: [{
                message: 'deprecated function - deprecated should not be used, use notDeprecated instead'
            }],
            options: ['warn', {
              functions: [{
                name: 'deprecated',
                use: 'notDeprecated'
              }]
            }]
        }
    ]
});

ruleTester.run("functions", rule, {
  valid: [
    {
      code: 'var x = noDeprecate(a, b, c)',
      options: ['warn', {
        functions: [{
          name: 'deprecated',
          use: 'notDeprecated'
        }]
      }]
    }
  ],
  invalid: [
    {
      code: 'var x = deprecated(a , v, c)',
      errors: [{
        message: 'deprecated function - deprecated should not be used, use notDeprecated instead'
      }],
      options: ['warn', {
        functions: [{
          name: 'deprecated',
          use: 'notDeprecated'
        }]
      }]
    }
  ]
});


