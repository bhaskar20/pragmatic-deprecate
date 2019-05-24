# eslint-plugin-pragmatic-deprecate

let&#39;s you decprecate and refactor code step by step: 1. deprecate functions, constants, class etc 2. disable the use for these deprecated functions in future 3. refactor sensibly

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-pragmatic-deprecate`:

```
$ npm install eslint-plugin-pragmatic-deprecate --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-pragmatic-deprecate` globally.

## Usage

Add `pragmatic-deprecate` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "pragmatic-deprecate"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "pragmatic-deprecate/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





