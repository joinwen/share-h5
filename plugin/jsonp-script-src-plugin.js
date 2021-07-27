const assert = require("assert");
const pluginName = "JsonpScriptSrcPlugin";
class JsonpScriptSrcPlugin {
  constructor() {}

  _applyMainTemplate(mainTemplate) {
    // tapable/lib/Hook.js
    // use stage 1 to ensure this executes after webpack/lib/web/JsonpMainTemplatePlugin.js
    mainTemplate.hooks.localVars.tap(
      { name: pluginName, stage: 1 },
      (source) => {
        assert(
          source.includes("function jsonpScriptSrc"),
          "JsonpScriptSrcPlugin: main template bootstrap source doesn't have function jsonpScriptSrc"
        );

        const modSource = source.replace(
          "function jsonpScriptSrc",
          "function webpackJsonpScriptSrc"
        );
        return `${modSource}
          var userGetScriptSrc = window.__webpack_get_script_src__;
          function jsonpScriptSrc(chunkId) {
          var src = webpackJsonpScriptSrc(chunkId);
          return (userGetScriptSrc && userGetScriptSrc(chunkId, ${mainTemplate.requireFn}.p, src)) || src;
        }`;
      }
    );
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
      this._applyMainTemplate(compilation.mainTemplate);
    });
  }
}

module.exports = JsonpScriptSrcPlugin;
