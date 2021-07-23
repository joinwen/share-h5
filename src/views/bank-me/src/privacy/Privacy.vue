<template>
  <div class="Privacy">
    <div class="header">
      <img
        src="../../../../assets/images/banke-me/back.svg"
        alt=""
        @click="handleBack"
      />
      <h2>{{ title }}</h2>
    </div>
    <div class="main">
      <div class="title">
        <h2>{{ title }}</h2>
      </div>
      <div class="content">
        <div class="section" v-for="(item, index) in content" :key="index">
          <p>{{ item }}</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <van-button class="agree" color="#0066f6">I AGREE</van-button>
      <van-button class="disagree">I DISAGREE</van-button>
    </div>
  </div>
</template>
<script>
import { data } from "./assets/index";
export default {
  name: "Privacy",
  mixins: [data],
  data() {
    return {};
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
.Privacy {
  padding: 30px 16px;
  .header {
    display: inline-flex;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
      margin-right: 24px;
    }
    h2 {
      color: #001533;
      font: 600 22px/1 "Karia", "微软雅黑";
    }
  }
  .main {
    margin-top: 50px;

    .title {
      margin-bottom: 17px;
      h2 {
        color: #0066f6;
        font: 400 17px/22px "Karia", "微软雅黑";
      }
    }
    .content {
      margin-bottom: 27px;
      p {
        color: #999999;
        margin-bottom: 22px;
        font: 400 15px/22px "Karia", "微软雅黑";
      }
    }
  }
  .footer {
    display: flex;
    flex-wrap: wrap;
    .agree {
      flex: 1 1 100%;
      margin-bottom: 20px;
    }
    .disagree {
      flex: 1 1 100%;
    }
  }
}
</style>
