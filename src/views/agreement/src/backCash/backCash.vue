<template>
  <div class="backCash-views">
    <div class="backCash-header"></div>

    <div class="backCash-main">
      <div class="backCash-content">
        <div class="title"></div>

        <div class="content">
          <div class="row">
            <div class="col">
              <div class="paragraph">
                1、任务列表里带有独家补贴标签的为本次活动的任务；
              </div>
            </div>

            <div class="col">
              <div class="paragraph">
                2、活动期间用户下单购买任务，客服会在事后发起一定金额的返现；
              </div>
            </div>

            <div class="col">
              <div class="paragraph">
                3、邀请好友或向好友分享链接，新客购买，分享者获得10%的返佣；
              </div>
            </div>

            <div class="col">
              <div class="paragraph">
                4、团长邀请或分享好友圈，同样可获得10%的返佣；
              </div>
            </div>

            <div class="col">
              <div class="paragraph">
                5、同一个手机号只能购买一次，如需重复购买，请用新的手机号下单享受返现优惠；
              </div>
            </div>

            <div class="col">
              <div class="paragraph">
                6、禁止作弊违规手段参与活动，一经发现封号永久！严重者将进行追究责任，收回活动奖励；
              </div>
            </div>
          </div>
        </div>

        <div class="copyright">最终解释权归百陌所有</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "backCash",
};
</script>

<style scoped lang="less">
.backCash-views {
  height: 100vh;
  background-color: #59a6ff;

  .backCash-header {
    height: 3.84rem;
    background-size: cover;
    background-image: url("https://image.baimofriend.com/src/backCash-header-v2.png");
  }

  .backCash-main {
    position: relative;
    padding: 0 0.3rem;

    .backCash-content {
      position: relative;
      top: -0.1rem;
      background-color: white;
      border-radius: 0.1rem;

      .title {
        z-index: 9;
        position: absolute;
        left: 0;
        top: 0.45rem;
        width: 1.88rem;
        height: 0.7rem;
        background-image: url("https://image.baimofriend.com/src/backCash-header-title.png");
        background-size: cover;
      }

      .content {
        padding: 1.5rem 0.4rem 1.5rem 0.4rem;
        font-size: 0.26rem;
        color: #999;
        .row .col {
          padding-bottom: 0.2rem;
        }
      }

      .copyright {
        color: #c2c2c2;
        text-align: center;
        font-size: 0.22rem;
        padding-bottom: 0.4rem;
      }
    }
  }
}
</style>
