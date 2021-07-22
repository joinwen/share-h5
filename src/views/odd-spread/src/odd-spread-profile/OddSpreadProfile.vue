<template>
  <div class="Odd-Spread-Profile">
    <div class="bg"></div>
    <div class="content">
      <h2 class="content-title">我们是一个什么样的平台？</h2>
      <div class="content-article">
        <p>
          XXXX是一个集<span class="red-font">教育课程、医疗美容、金融服务</span
          >等多品类的平台，所有合作的产品均为各行业内部数一数二的
          <span class="red-font">龙头企业，任务齐全！官方认证！资质齐全！</span>
          <span class="red-font-lg">
            总能在平台中找到你想要的的那一款产品！
          </span>
        </p>
        <div>
          <p>教育课程合作包含：</p>
          <div class="img-list edu-img">
            <img
              :src="require('@/assets/images/odd-spread/brand-1.png')"
              alt=""
            />
            <img
              :src="require('@/assets/images/odd-spread/brand-2.png')"
              alt=""
            />
          </div>
        </div>
        <div>
          <p>医疗美容合作包含：</p>
          <div class="img-list medical-img">
            <img
              :src="require('@/assets/images/odd-spread/brand-3.png')"
              alt=""
            />
            <img
              :src="require('@/assets/images/odd-spread/brand-4.png')"
              alt=""
            />
          </div>
        </div>
        <div>
          <p>金融服务合作包含：</p>
          <div class="img-list financial-img">
            <img
              :src="require('@/assets/images/odd-spread/brand-5.png')"
              alt=""
            />
            <img
              :src="require('@/assets/images/odd-spread/brand-6.png')"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OddSpreadProfile",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
h2 {
  margin: 0;
}
.red-font {
  font-size: 0.24rem;
  color: #ff414c;
  font-weight: 800;
}
.red-font-lg {
  font-size: 0.26rem;
  color: #ff414c;
  font-weight: 800;
}
.img-list {
  display: flex;
  justify-content: space-around;

  img {
    height: 0.66rem;
  }
  & img:first-child {
    margin-right: 0.24rem;
  }
  & img:last-child {
    margin-left: 0.24rem;
  }
}
.Odd-Spread-Profile {
  font-size: 0.24rem;
  line-height: 0.4rem;

  .bg {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background: url("../../../../assets/images/odd-spread/profile-bg.png")
      no-repeat;
    background-size: 100% 4.17rem;
    background-color: #3b45dd;
  }
  .content {
    position: relative;
    z-index: 2;
    margin: 2.52rem 0.32rem 0.5rem;

    .content-title {
      height: 1.15rem;
      line-height: 1.15rem;
      border-top-left-radius: 0.16rem;
      border-top-right-radius: 0.16rem;
      background-color: #4a61e9;
      text-align: center;
      font-size: 0.44rem;
      color: #fff;
    }
    .content-article {
      background-color: #fff;
      color: #636363;
      padding: 0.5rem 0.62rem;
      border-bottom-left-radius: 0.16rem;
      border-bottom-right-radius: 0.16rem;
    }
  }
}
</style>
