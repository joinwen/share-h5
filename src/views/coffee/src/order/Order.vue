<template>
  <div class="Coffee-Order">
    <div class="info">
      <h2>My Orders</h2>
      <div class="info-picture">
        <p class="title">Minimalist Lamp</p>
        <p class="name">Rose Dust</p>
        <P class="price">$ 150</P>
      </div>
    </div>
    <div class="suggestions">
      <h2>Suggestions</h2>
      <div class="suggestions-list">
        <div class="suggestion-item">
          <div class="img">
            <div>
              <img src="../../../../assets/images/coffee/ball.svg" alt="" />
            </div>
          </div>
          <p class="description">
            <span>Balls of Yarn</span>
            <span>Multiple Colors</span>
          </p>
          <p class="price">
            <span>$ 50</span>
          </p>
        </div>
        <div class="suggestion-item">
          <div class="img">
            <div>
              <img src="../../../../assets/images/coffee/clock.svg" alt="" />
            </div>
          </div>
          <p class="description">
            <span>Clock</span>
            <span>Multiple Colors</span>
          </p>
          <p class="price">
            <span>$ 700</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Order",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.Coffee-Order {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .info {
    padding: 70px 60px 0px;

    h2 {
      color: #ae6173;
      margin-bottom: 17px;
      font: 500 30px/37px "Averia Sans Libre";
    }
    .info-picture {
      height: 300px;
      background: url("../../../../assets/images/coffee/order.svg") top 26px
          center/70px 144px no-repeat,
        url("../../../../assets/images/coffee/order-bg.svg") center/100%
          no-repeat;
      text-align: center;

      .title {
        color: #ae6173;
        padding-top: 197px;
        font: 500 18px/27px "Poppins", "微软雅黑";
      }
      .name {
        color: #000000;
        font: 400 15px/23px "Poppins", "微软雅黑";
      }
      .price {
        color: #000;
        font: 500 20px/30px "Poppins", "微软雅黑";
      }
    }
  }
  .suggestions {
    flex: 1 1 auto;
    padding: 33px 30px 56px;

    h2 {
      color: #ae6173;
      margin-bottom: 7px;
      font: 500 18px/27px "Poppins", "微软雅黑";
    }

    .suggestions-list {
      display: flex;
      justify-content: space-between;

      .suggestion-item {
        width: 140px;
        height: 220px;
        border-radius: 20px;
        box-shadow: 0 10px 0 20px #5c636905;
        text-align: center;

        .img {
          display: inline-block;
          margin-top: 15px;
          width: 111px;
          height: 111px;
          background-color: #fdebe6;
          border-radius: 15px;

          div {
            height: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
        }
        .description {
          span {
            display: block;
          }
          span:first-child {
            margin-top: 9px;
            color: #000;
            font: 500 13px/20px "Poppins", "微软雅黑";
          }
          span:last-child {
            font: 400 12px/18px "Poppins", "微软雅黑";
          }
        }
        .price {
          margin-top: 12px;
          font: 400 18px/27px "Poppins", "微软雅黑";
        }
      }
    }
  }
}
</style>
