<template>
  <div class="Indicator">
    <div
      :class="['item', item === current && 'active']"
      v-for="item in data"
      :key="item"
    ></div>
  </div>
</template>
<script>
export default {
  name: "Indicator",
  props: {
    len: {
      type: Number,
      default: 0,
    },
    current: {
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
};
</script>
<style lang="less" scoped>
.Indicator {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .item {
    display: inline-flex;
    margin: 0 5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 0.84px solid #ba0000;
  }
  .active {
    width: 13.3px;
    height: 13.3px;
    box-shadow: none;
    background-color: #ba0000;
  }
}
</style>
