/**
 * @fileoverview prime eslint
 * @author eslint-plugin-prime
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const rules = requireIndex(__dirname + "/rules");

// rules['lodash-introduce-on-demand'] = require('./rules/lodash-introduce-on-demand')

// import all rules in lib/rules
module.exports = {
    rules,
    configs: {
        // extends: ['plugin:prime/recommended']
        recommended: {
            plugins: ['prime'],
            rules: {
                'prime/lodash-introduce-on-demand': 2,
            }
        }
    }
}



