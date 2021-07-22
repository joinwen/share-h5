<template>
  <div class="p-10 sub-bg">
    <div v-for="(item, index) in constantRoutes" :key="index">
      <h2 class="title sub-color main-fs weight-400 p-10" v-if="item.children">
        {{ item.title }}
      </h2>
      <van-grid square>
        <van-grid-item
          :to="item2.path"
          v-for="(item2, index) in item.children"
          :key="index"
          :text="item2.meta.title"
        />
      </van-grid>
    </div>
  </div>
</template>
<script>
import { constantRoutes } from "../../config/router-config";

export default {
  name: "Test",
  data() {
    return {
      constantRoutes,
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.title {
  background-color: #f7f8fa;
}
</style>
