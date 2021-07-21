<template>
  <div class="Odd-Spread-Index">
    <div class="header-bg"></div>
    <div class="offset">
      <div class="content-wrapper">
        <div class="content">
          <h2 class="content-title">如何简简单单赚大钱？</h2>
          <div class="content-article">
            <p>
              平台模式是以<span class="red-font">优质产品项目</span
              >为主，让您清楚知道每
            </p>
            <p style="text-align: center">
              个想要了解的产品细节,简单赚钱仅需两步！
            </p>
            <div class="step">
              <span class="step-number">1</span>
              <div class="step-content">
                <span>STEP1：获取资格</span>
                <span
                  >分享赚钱前需先<span class="red-font"
                    >购买平台内的优质产品1次</span
                  ></span
                >
                <span>下单后即可分享产品 </span>
                <span
                  >分享产品被购买成功后，<span class="red-font"
                    >您的首单金额会全额退还给您！免费体验优质项目！</span
                  >
                </span>
                <span
                  >完成第一步，<span class="red-font"
                    >恭喜您！您已经获取赚钱资格！</span
                  >
                </span>
                <span class="example">示例：</span>
                <span
                  >香港雪纤瘦-皇牌美容纤体套餐
                  <span class="red-font">产品售价68元，</span></span
                >
                <div>
                  <img
                    class="content-img-1"
                    :src="
                      require('@/assets/images/odd-spread/content-profile-1.png')
                    "
                    alt=""
                  />
                </div>
                <span>
                  将此产品分享给您的朋友A，A购买成功后，首单金额<span
                    class="red-font"
                    >68元</span
                  >将 <span class="red-font">自动退还到您的原支付方式中，</span>
                  并正常享受产品权益。
                </span>
              </div>
            </div>
            <div class="step">
              <span class="step-number">2</span>
              <div class="step-content">
                <span> STEP2：简单分享赚大钱 </span>
                <span>
                  获取资格后，您可以挑选平台中任意产品直接分享，不同的产品，佣金不同，可以根据您自己的需求分享。
                </span>
                <span class="example"> 示例： </span>
                <span>
                  名医看牙-口腔会员卡
                  <span class="red-font">产品售价29.9元，分享佣金15元。</span>
                </span>
                <div>
                  <img
                    class="content-img-2"
                    :src="
                      require('@/assets/images/odd-spread/content-profile-2.png')
                    "
                    alt=""
                  />
                </div>
                <span>
                  您分享给朋友B，B购买成功后，您的
                  <span class="red-font">佣金15元即时到账，</span
                  >可提现至您的个人银行账户中。
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-wrapper">
        <div class="footer">
          <p class="fixed-notice">如何让我无忧无虑的赚钱呢？</p>
          <div class="footer-question">
            <p class="footer-question-trunk">
              <span class="icon">问</span>
              <span>如果我下的第一单没有分享成功，怎么办？</span>
            </p>
            <p class="footer-question-answer">
              <span class="icon">答</span>
              <span>
                <span class="red-font">
                  如果您下的第一单后，在7天之内没有分享产品成功, </span
                >那么我们将为您进行<span class="red-font"
                  >全额订单退款解除您的后顾之忧！</span
                >
              </span>
            </p>
          </div>
          <div class="footer-assurance">
            <p class="footer-assurance-text">
              风险百陌承担！您放心赚钱！ 除了百陌，还有谁！！<br />
              想赚钱？找百陌就对了！！
            </p>
            <div>
              <img
                :src="require('@/assets/images/odd-spread/footer-danger.png')"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OddSpreadIndex",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
p {
  margin: 0px;
  padding: 0px;
}
.red-font {
  color: #ff2b2b;
  font-size: 0.26rem;
  font-weight: 900;
}
.content-img-1 {
  margin-top: 0.16rem;
  width: 5.28rem;
  height: 2.04rem;
}

.content-img-2 {
  margin-top: 0.16rem;
  width: 5.25rem;
  height: 3.12rem;
}
.step-number {
  margin-right: 0.09rem;
  flex: 0 0 auto;
  text-align: center;
  background-color: #ff5059;
  color: #fff;
  border-radius: 50%;
  width: 0.27rem;
  height: 0.28rem;
  line-height: 0.28rem;
}
.offset {
  margin-top: -4.97rem;
}
.Odd-Spread-Index {
  font-size: 0.24rem;
  line-height: 0.4rem;
  color: #222;

  .header-bg {
    height: 9.64rem;
    background: url("../../../../assets/images/odd-spread/bg.png") no-repeat;
    background-size: 100%;
  }
  .content-wrapper {
    padding: 0 0.32rem;
    background: linear-gradient(90deg, #f47322 0%, #fe9d4d 100%);

    .content-title {
      font-size: 0.39rem;
      color: #fff;
      text-align: center;
      padding: 0.39rem 0;
      background-color: #fc9748;
      border-radius: 0.08rem;
    }
    .content-article {
      border-bottom-right-radius: 0.08rem;
      border-bottom-left-radius: 0.08rem;
      background-color: #fff;
      padding: 0.37rem 0.62rem 0.53rem;

      .step {
        margin-top: 0.3rem;
        display: flex;
        align-items: baseline;

        .step-content {
          .example {
            margin-top: 0.16rem;
          }
          & > div {
            text-align: center;
          }
          & > span {
            display: block;
          }
        }
      }
    }
  }

  .footer-wrapper {
    background: linear-gradient(90deg, #f47322 0%, #fe9d4d 100%);
    padding: 0.37rem 0.32rem 0.53rem;

    .footer {
      border-radius: 0.08rem;
      background-color: #fff;
      position: relative;
      padding: 1.14rem 0.3rem 0.44rem;

      .fixed-notice {
        position: absolute;
        left: 0;
        top: 0.26rem;
        background-color: #ff8d00;
        color: #fff;
        font-size: 0.22rem;
        line-height: 0.51rem;
      }
      .footer-question {
        .icon {
          width: 0.41rem;
          height: 0.41rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          text-align: center;
          color: #fff;
          border-radius: 0.08rem;
          margin-right: 0.15rem;
        }
        .footer-question-trunk {
          display: flex;
          align-items: baseline;

          .icon {
            background-color: #ff3e4a;
          }
        }
        .footer-question-answer {
          margin-top: 0.28rem;
          display: flex;
          align-items: baseline;

          .icon {
            background-color: #ffda00;
          }
        }
      }
      .footer-assurance {
        margin-top: 0.5rem;
        display: flex;
        .footer-assurance-text {
          font-size: 0.3rem;
          color: #ff2b2b;
          font-weight: 800;
        }
        & > div {
          flex: 0 0 auto;
          width: 2.33rem;
          height: 1.8rem;
          img {
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
