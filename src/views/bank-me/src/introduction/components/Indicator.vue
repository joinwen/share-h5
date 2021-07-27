<template>
  <div class="Indicator">
    <div class="indicator-wrapper">
      <div class="item-wrapper">
        <div
          :class="['item', item === current && 'active']"
          v-for="(item, index) in data"
          :key="index"
        ></div>
      </div>
      <van-button color="#0066f6" @click="handleChange">NEXT</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Indicator",
  props: {
    current: {
      type: Number,
      default: 0,
    },
    len: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    data() {
      let arr = [];
      for (let i = 0; i < this.len; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  data() {
    return {};
  },
  methods: {
    handleChange() {
      this.$emit("next");
    },
  },
};
</script>
<style lang="less" scoped>
.Indicator {
  position: absolute;
  width: 100%;
  bottom: 30px;
  .indicator-wrapper {
    display: flex;
    padding: 0 18px 0;
    align-items: center;
    justify-content: space-between;
    .item-wrapper {
      display: inline-flex;
    }
    .item {
      width: 12px;
      height: 12px;
      margin: 0 5px;
      border-radius: 50%;
      background-color: #c4c4c4;
    }
    .active {
      width: 34px;
      border-radius: 32px;
      background-color: #0066f6;
    }
  }
}
</style>
