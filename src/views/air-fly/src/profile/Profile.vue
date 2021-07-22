<template>
  <div class="Profile">
    <van-swipe indicator-color="white" :loop="false" @change="handleChange">
      <van-swipe-item v-for="(item, index) in data" :key="index">
        <introduction
          :title="item.title"
          :content="item.content"
          :bg="item.bg"
        />
      </van-swipe-item>
      <template #indicator>
        <indicator :current="current" :len="data.length" />
      </template>
    </van-swipe>
  </div>
</template>
<script>
import Introduction from "./components/Introduction";
import Indicator from "./components/Indicator";
import { data } from "./assets/index";
export default {
  name: "Profile",
  components: { Indicator, Introduction },
  mixins: [data],
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    handleChange(index) {
      this.current = index;
    },
  },
};
</script>
<style lang="less" scoped></style>
