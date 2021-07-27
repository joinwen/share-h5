// const { RawSource } = require("webpack-sources");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const patchFileListToChunkGroups = (chunkGroups, assets) => {
  chunkGroups.forEach((chunkGroup) => {
    const chunks = chunkGroup.chunks,
      groupName = chunkGroup.options.name || chunkGroup.groupDebugId;
    getFileListFromChunks(chunks, groupName, assets);
  });
};
const getFileListFromChunks = (chunks, groupName, assets) => {
  chunks.forEach((chunk) => {
    let chunkName = chunk.name || chunk.id;
    chunk.files = chunk.files.map((file) => {
      if (assets[file]) {
        const source = assets[file];
        delete assets[file];
        file = `${groupName}/${chunkName}/${file}`;
        assets[file] = source;
      }
      return file;
    });
  });
};
class ConvergeWebpackPlugin {
  apply(compiler) {
    compiler.hooks.shouldEmit.tap("ConvergeWebpackPlugin", (compilation) => {
      patchFileListToChunkGroups(compilation.chunkGroups, compilation.assets);
      // compilation.hooks.assetPath.tap("ConvergeWebpackPlugin", (module) => {
      //   console.log(module,compilation);
      // })
      return true;
    });
    // compiler.hooks.compilation.tap("ConvergeWebpackPlugin", (compilation) => {
    //   compilation.hooks.beforeChunkAssets.tap("ConvergeWebpackPlugin",() => {
    //     console.log(compilation);
    //   })
    //   compilation.hooks.afterOptimizeAssets.tap("ConvergeWebpackPlugin", (assets) => {
    //     console.log(assets);
    //   })
    // })
  }
}
module.exports = ConvergeWebpackPlugin;
