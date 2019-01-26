<template>
  <div class="main">
    <div class="profile">
      <div class="top" style="display:none;">
        <div class="left">
          <div class="person">
            <img src alt>
          </div>
          <div class="name">13262092391</div>
        </div>
        <div class="right">消息</div>
      </div>
      <div class="fl_top">
        <div class="logo">
          <img src="../../assets/img/my_logo.png" alt>
        </div>
        <div class="text">一个更安全的钱包专家</div>
        <div class="btn">登录/注册</div>
      </div>
      <div class="center">
        <div class="left">
          <div>
            <img src="../../assets/img/invest.png" alt>
          </div>
          <div>我的投资</div>
        </div>
        <div class="right">
          <div>
            <img src="../../assets/img/profile.png" alt>
          </div>
          <div>我的收益</div>
        </div>
      </div>
      <div class style="height:30px;"></div>
    </div>
    <div class="tools">
      <div class="tool">
        <div class="left">
          <div>
            <img src="../../assets/img/wallet_tool.png" alt>
          </div>
          <div class="text">钱包工具</div>
        </div>
        <div class="right">
          <img src="../../assets/img/right.png" alt>
        </div>
      </div>
    </div>
    <div class="tools">
      <div class="tool">
        <div class="left">
          <div>
            <img src="../../assets/img/wallet_tool.png" alt>
          </div>
          <div class="text">钱包工具</div>
        </div>
        <div class="right">
          <img src="../../assets/img/right.png" alt>
        </div>
      </div>
    </div>
    <div class="tools">
      <div class="tool">
        <div class="left">
          <div>
            <img src="../../assets/img/wallet_tool.png" alt>
          </div>
          <div class="text">钱包工具</div>
        </div>
        <div class="right">
          <img src="../../assets/img/right.png" alt>
        </div>
      </div>
    </div>
    <div class="tools">
      <div class="tool">
        <div class="left">
          <div>
            <img src="../../assets/img/wallet_tool.png" alt>
          </div>
          <div class="text">钱包工具</div>
        </div>
        <div class="right">
          <img src="../../assets/img/right.png" alt>
        </div>
      </div>
    </div>
    <div class="tools">
      <div class="tool">
        <div class="left">
          <div>
            <img src="../../assets/img/wallet_tool.png" alt>
          </div>
          <div class="text">钱包工具</div>
        </div>
        <div class="right">
          <img src="../../assets/img/right.png" alt>
        </div>
      </div>
    </div>
    <div class="tools">
      <div class="tool">
        <div class="left">
          <div>
            <img src="../../assets/img/wallet_tool.png" alt>
          </div>
          <div class="text">钱包工具</div>
        </div>
        <div class="right">
          <img src="../../assets/img/right.png" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.profile {
  padding: 60px 15px 0 15px;
  background: linear-gradient(to bottom, rgba(35, 126, 250, 1), rgba(7, 73, 234, 1));
  color: #fff;

  .fl_top {
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo img {
      width: 100px;
    }

    .text {
      margin: 20px 0;
      color: rgba(167, 188, 249, 1);
      position: relative;
      letter-spacing 3px;
    }

    .text::before {
      display: block;
      content: '';
      position: absolute;
      left: -8px;
      top: -8px;
      background: url('../../assets/img/top_left.png') no-repeat;
      background-size: 100% 100%;
      width: 8px;
      height: 8px;
    }

    .text::after {
      display: block;
      content: '';
      position: absolute;
      right: -8px;
      bottom: -8px;
      background: url('../../assets/img/bottom_right.png') no-repeat;
      background-size: 100% 100%;
      width: 8px;
      height: 8px;
    }

    .btn {
      width: 200px;
      text-align: center;
      padding: 10px 0;
      background: url('../../assets/img/btn3.png') no-repeat;
      background-size: 100% 100%;
    }
  }

  .top {
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
    }
  }

  .center {
    display: flex;
    justify-content: space-around;
    margin: 30px 0 45px 0;
  }
}

.tools {
  box-sizing: border-box;
  padding: 0 15px;
  overflow: auto;

  .top {
    display: flex;
    border-bottom: 1px solid rgba(234, 234, 234, 1);
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }

  .tool {
    display: flex;
    border-bottom: 1px solid rgba(234, 234, 234, 1);
    justify-content: space-between;
    align-items: center;
    height: 80px;

    .left {
      display: flex;
      align-items: center;
    }
  }
}
</style>
