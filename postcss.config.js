const pxtorem = require("postcss-pxtorem");
const autoprefixer = require("autoprefixer");
module.exports = {
  plugins: [
    autoprefixer(),
    pxtorem({
      rootValue: 41.4,
      propList: ["*"],
    }),
  ],
};
