<template>
  <div class="Register">
    <div class="header">
      <a href="/">
        <img src="../../../../assets/images/banke-me/cancel.svg" alt="" />
      </a>
    </div>
    <div class="main">
      <div class="title">
        <h2>Create Account</h2>
        <p>Open a BankMe account with a few details.</p>
      </div>
      <div class="form">
        <form>
          <div class="full-name form-item">
            <label htmlFor="full-name">Full name</label>
            <div>
              <input type="text" id="full-name" />
            </div>
          </div>
          <div class="phone-number form-item">
            <label htmlFor="phone-number">Phone number</label>
            <div>
              <input type="text" id="phone-number" />
            </div>
          </div>
          <div class="password form-item">
            <label htmlFor="password">Password</label>
            <div>
              <input type="password" id="password" />
            </div>
          </div>
          <div class="password-repeat form-item">
            <label htmlFor="repeat-password">Repeat Password</label>
            <div>
              <input type="password" id="repeat-password" />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="footer">
      <van-button class="submit" color="#0066f6"
        >CREATE YOUR ACCOUNT</van-button
      >
      <p>
        Do you not have a BankMe account?<a
          ><router-link to="/bank-me/login">Sign in here</router-link></a
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.Register {
  padding: 30px 16px;

  .header {
    img {
      width: 24px;
      height: 24px;
    }
  }

  .main {
    margin-top: 70px;

    .title {
      h2 {
        color: #0066f6;
        font: 600 35px/1.25 "Karia", "微软雅黑";
      }

      p {
        color: #001533;
        margin-top: 7px;
        font: 400 15px/1.5 "Karia", "微软雅黑";
      }
    }

    .form {
      padding: 5px 0 0;
      margin-top: 40px;

      .form-item {
        margin-bottom: 16px;

        label {
          color: #001533;
          margin-bottom: 10px;
          font: 400 15px/20px "Karia", "微软雅黑";
        }

        div {
          height: 50px;
          padding: 16px;
          border-radius: 5px;
          font: 400 13px/18px "Karia", "微软雅黑";
          background-color: #99999905;
          border: 1px solid #e4e4e460;

          input {
            height: 100%;
            width: 100%;
            border: none;
            padding: 0;
            background-color: transparent;
          }
        }
      }

      .notice {
        p {
          color: #001533;
          font: 400 15px/1.5 "Karia", "微软雅黑";
        }

        p:last-child {
          color: #0066f6;
        }
      }
    }
  }

  .footer {
    margin-top: 94px;

    .submit {
      height: 50px;
      width: 100%;
    }

    p {
      margin-top: 18px;
      font: 400 15px/1.5 "Karia", "微软雅黑";

      a {
        color: #0066f6;
      }
    }
  }
}
</style>
