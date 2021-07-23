<template>
  <div>
    <van-swipe @change="handleChange" ref="swipeRef">
      <van-swipe-item v-for="(item, index) in data" :key="index">
        <introduction-item
          :title="item.title"
          :content="item.content"
          :bg="item.bg"
        />
      </van-swipe-item>
      <template #indicator>
        <indicator :len="data.length" :current="current" @next="handleNext" />
      </template>
    </van-swipe>
  </div>
</template>
<script>
import { data } from "./assets/index";
import IntroductionItem from "./components/IntroductionItem";
import Indicator from "./components/Indicator";
export default {
  name: "Introduction",
  components: { Indicator, IntroductionItem },
  mixins: [data],
  setup(props, { attrs, emit, slots }) {
    console.log(props, attrs, emit, slots);
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    handleChange(index) {
      this.current = index;
    },
    handleNext() {
      this.$refs["swipeRef"].next();
    },
  },
};
</script>
<style lang="less" scoped></style>
