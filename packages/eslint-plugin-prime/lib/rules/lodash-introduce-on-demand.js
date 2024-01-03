/**
 * @fileoverview 限制lodash按需引入
 * @author lodash
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */

const SOURCE_lIST = ["lodash", "lodash-es"];


module.exports = {
    meta: {
        type: 'suggestion', // `problem`, `suggestion`, or `layout`
        docs: {
            description: "限制lodash按需引入",
            recommended: false,
            url: null, // URL to the documentation page for this rule
        },
        fixable: 'code', // Or `code` or `whitespace`
        schema: [], // Add a schema if the rule has options
        messages: {
            unexpected: 'Unexpected lodash import.',
            invalid: 'importedList is empty array.',
        }
    },

    create(context) {
        // variables should be defined here
        // 获取lodash中导入的函数名称，并返回
        function getImportSpecifierArray(specifiers) {
          const includeType = ["ImportSpecifier", "ImportDefaultSpecifier"];
          return specifiers
              .filter((item) => includeType.includes(item.type))
              .map((item) => {
                  return item.imported ? item.imported.name : item.local.name;
              });
        }
        // 生成修复文本
        function generateFixedImportText(importedList, dependencyName) {
          let fixedText = '';
          importedList.forEach((importName, index) => {
              fixedText += `import ${importName} from "${dependencyName}/${importName}";`;
              if (index != importedList.length - 1) fixedText += ' \n ';
          });
          return fixedText;
        }
        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            // visitor functions for different types of nodes
            ImportDeclaration(node){
                const { source, specifiers = [] } = node;
                const { value: dependencyName } = source;
                if (SOURCE_lIST.includes(dependencyName)) {
                  const importedList = getImportSpecifierArray(specifiers);
                  if (importedList.length === 0) {
                    return context.report({
                      node,
                      messageId: 'invalid',
                    });
                  }
                  if (dependencyName === 'lodash') {
                    return context.report({
                        node,
                        messageId: 'unexpected',
                        fix: function(fixer) {
                            return fixer.replaceText(node, generateFixedImportText(importedList, dependencyName));
                        }
                    });
                  }
                }
                
            }
        };
    },
};
