/**
 * @fileoverview 限制lodash按需引入
 * @author lodash
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/lodash-introduce-on-demand"),
    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
    },
});
ruleTester.run("eslint-lodash-introduce-on-demand", rule, {
    valid: [
        // give me some code that won't trigger a warning
        'import omit from "lodash/omit";',
        'import { omit } from "lodash-es";',
    ],

    invalid: [
        {
            code: 'import {} from "lodash";',
            errors: [{ message: "importedList is empty array." }],
            output: null,
        },
        {
            code: 'import {} from "lodash-es";',
            errors: [{ message: "importedList is empty array." }],
            output: null,
        },
        {
            code: 'import { omit } from "lodash";',
            errors: [{ message: "Unexpected lodash import." }],
            output: 'import omit from "lodash/omit";',
        },
        {
            code: 'import { omit as _omit } from "lodash";',
            errors: [{ message: "Unexpected lodash import." }],
            output: 'import omit from "lodash/omit";',
        },
        {
            code: 'import { omit, debounce } from "lodash";',
            errors: [{ message: "Unexpected lodash import." }],
            output: 'import omit from "lodash/omit"; \n import debounce from "lodash/debounce";',
        },
    ],
});
