<template>
  <div class="top_main">
    <TopBar></TopBar>
    <div class="app">
      <div class="title">推荐</div>
      <div class="apps">
        <div class="left">
          <img src="../../assets/img/logo.png" alt class="logo">
        </div>
        <div class="right">
          <div class="big_title">应用名称</div>
          <div class="text">
            投资交易就像生活娱乐一样轻松投资交易就像生活
            娱乐一样轻松
          </div>
        </div>
      </div>
      <div class="apps">
        <div class="left">
          <img src="../../assets/img/logo.png" alt class="logo">
        </div>
        <div class="right">
          <div class="big_title">应用名称</div>
          <div class="text">
            投资交易就像生活娱乐一样轻松投资交易就像生活
            娱乐一样轻松
          </div>
        </div>
      </div>
      <div class="apps">
        <div class="left">
          <img src="../../assets/img/logo.png" alt class="logo">
        </div>
        <div class="right">
          <div class="big_title">应用名称</div>
          <div class="text">
            投资交易就像生活娱乐一样轻松投资交易就像生活
            娱乐一样轻松
          </div>
        </div>
      </div>
      <div class="title">最新</div>
      <div class="apps">
        <div class="left">
          <img src="../../assets/img/logo.png" alt class="logo">
        </div>
        <div class="right">
          <div class="big_title">应用名称</div>
          <div class="text">
            投资交易就像生活娱乐一样轻松投资交易就像生活
            娱乐一样轻松
          </div>
        </div>
      </div>
      <div class="apps">
        <div class="left">
          <img src="../../assets/img/logo.png" alt class="logo">
        </div>
        <div class="right">
          <div class="big_title">应用名称</div>
          <div class="text">
            投资交易就像生活娱乐一样轻松投资交易就像生活
            娱乐一样轻松
          </div>
        </div>
      </div>
      <div class="apps">
        <div class="left">
          <img src="../../assets/img/logo.png" alt class="logo">
        </div>
        <div class="right">
          <div class="big_title">应用名称</div>
          <div class="text">
            投资交易就像生活娱乐一样轻松投资交易就像生活
            娱乐一样轻松
          </div>
        </div>
      </div>
      <div class="apps">
        <div class="left">
          <img src="../../assets/img/logo.png" alt class="logo">
        </div>
        <div class="right">
          <div class="big_title">应用名称</div>
          <div class="text">
            投资交易就像生活娱乐一样轻松投资交易就像生活
            娱乐一样轻松
          </div>
        </div>
      </div>
      <div class="apps">
        <div class="left">
          <img src="../../assets/img/logo.png" alt class="logo">
        </div>
        <div class="right">
          <div class="big_title">应用名称</div>
          <div class="text">
            投资交易就像生活娱乐一样轻松投资交易就像生活
            娱乐一样轻松
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import TopBar from "@/components/TopBar.vue";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    TopBar
  }
};
</script>

<style scoped lang="stylus">
.app {
  overflow: auto;
  box-sizing: border-box;
  padding: 20px 0;
}

.title {
  text-indent: 15px;
  position: relative;
  font-weight: 900;
  box-sizing: border-box;
}

.title::before {
  content: '';
  display: inline-block;
  position: absolute;
  left: 0px;
  top: 2px;
  background: url('../../assets/img/left.png') no-repeat;
  width: 3px;
  height: 80%;
}

.apps {
  display: flex;
  align-items: center;
  margin: 40px 0;
}

.big_title {
  font-weight: 800;
  color: rgba(16, 32, 60, 1);
  font-size: 14px;
}

.text {
  color: rgba(159, 161, 176, 1);
  font-size: 12px;
}

.logo {
  width: 50px;
  margin-right: 15px;
  border-radius: 7px;
}
</style>
