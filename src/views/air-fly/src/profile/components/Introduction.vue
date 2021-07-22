<template>
  <div class="Introduction">
    <div class="description">
      <h2 class="text-center">
        {{ title }}
      </h2>
      <p class="text-center m-x-auto">
        {{ content }}
      </p>
    </div>
    <div class="figure" :style="{ background: generateBg() }"></div>
  </div>
</template>
<script>
export default {
  name: "Introduction",
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
      let src = require(`@/assets/images/air-fly/${this.bg}.svg`);
      return `url(${src}) center/100% no-repeat`;
    },
  },
};
</script>
<style lang="less" scoped>
.Introduction {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .description {
    padding-top: 164px;

    h2 {
      color: #6d6d6d;
      font: 500 20px/24px "微软雅黑";
    }
    p {
      width: 230px;
      color: #bbbbbb;
      margin-top: 34px;
      font: 400 18px/22px "微软雅黑";
    }
  }
  .figure {
    margin-top: 163px;
    flex: 1 1 auto;
    bottom: 0;
    height: 338px;
    left: 15px;
    right: 15px;
  }
}
</style>
