import wx from "weixin-js-sdk";
import { axios } from "../../http";
const onGetWxConfig = function () {
  let context = this;

  return Promise.all([
    axios("/common/getSign?url=" + window.location.origin),
  ]).then((result) => {
    const { nonceStr, signature, timestamp } = result[0].content;
    wx.config({
      debug: false,
      appId: process.env["VUE_APP_APP_ID"],
      nonceStr,
      signature,
      timestamp,
      jsApiList: ["scanQRCode"],
    });

    wx.ready(() => {
      context.wx = wx;
    });
    return wx;
  });
};

export default onGetWxConfig();
