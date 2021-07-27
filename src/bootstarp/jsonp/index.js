window.__webpack_get_script_src__ = function (chunkId, publicPath, src) {
  let path = {
    "air-fly": "air-fly",
    "bank-me": "bank-me",
    coffee: "coffee",
    index: "index",
    "odd-spread": "odd-spread",
    school: "school",
  }[chunkId];
  return `${path}/${path}${src}`;
};
