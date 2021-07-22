<template>
  <div>Introduction</div>
</template>
<script>
export default {
  name: "Introduction",
  setup(props, { attrs, emit, slots }) {
    console.log(props, attrs, emit, slots);
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped></style>
