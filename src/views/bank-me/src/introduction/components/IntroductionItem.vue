<template>
  <div class="Introduction-Item vh-full">
    <div class="picture" :style="{ background: generateBg() }"></div>
    <div class="main">
      <div class="title">
        <h2>{{ title }}</h2>
      </div>
      <div class="content">
        <p>
          {{ content }}
        </p>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
export default {
  name: "IntroductionItem",
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    bg: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    generateBg() {
      let src = require(`@/assets/images/banke-me/${this.bg}.svg`);
      return `url(${src}) center/100% no-repeat`;
    },
  },
};
</script>
<style lang="less" scoped>
.Introduction-Item {
  display: flex;
  padding: 0 16px 0;
  flex-direction: column;

  .picture {
    height: 381px;
    margin-top: 124px;
  }
  .main {
    flex: 1 1 auto;
    color: #001533;
    .title {
      h2 {
        font: 600 30px/1.4 "Karia", "微软雅黑";
      }
    }
    .content {
      margin-top: 12px;
      p {
        font: 300 17px/1.5 "Karia", "微软雅黑";
      }
    }
  }
}
</style>
