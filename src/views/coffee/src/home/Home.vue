<template>
  <div class="CoffeeHome">
    <div class="picture"></div>
    <div class="content">
      <div class="title">
        <h2>Furniture of</h2>
        <h2>Your Dreams</h2>
      </div>
      <div class="description">
        <p>Mind blasting furnitures only one click away from you!</p>
      </div>
    </div>
    <div class="footer">
      <h2>Get Started</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "CoffeeHome",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.CoffeeHome {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .picture {
    height: 456px;
    background: url("../../../../assets/images/coffee/home.svg") center
        no-repeat,
      url("../../../../assets/images/coffee/home-bg.svg") center/ 100% 100%
        no-repeat;
  }
  .content {
    flex: 1 1 auto;
    padding: 30px 32px 51px;
    .title {
      h2 {
        font: 600 30px/37px "Averia Sans Libre";
      }
      h2:first-child {
        color: #ae6173;
      }
      h2:last-child {
        margin-top: 5px;
        color: #000000;
      }
    }
    .description {
      margin-top: 10px;
      color: #939393;
      font: 400 15px/23px "微软雅黑";
    }
  }
  .footer {
    text-align: center;
    margin-bottom: 47px;
    h2 {
      padding: 9px 14px;
      display: inline-block;
      font: 400 20px/30px "微软雅黑";
      background: url("../../../../assets/images/coffee/ellipse.svg") 0 center /
        50px 48px no-repeat;
    }
  }
}
</style>
