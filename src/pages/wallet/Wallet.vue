<template>
  <div style="padding-top:80px;">
    <TopBar></TopBar>
    <div class="text">
      通证宝的私钥全部保存在手机本地，不会以任何形上传到网络中，用户
      真实掌握自己的数字资产，安全性极高
    </div>
    <div class="icon">
      <img src="../../assets/img/wallet_icon.png" alt>
    </div>
    <div style="text-align:center;margin-bottom:25px;">您还没有钱包，请先创建或导入钱包，
      <br>并进行钱包充币购买理财产品
    </div>
    <div class="inport">创建钱包</div>
    <div class="create">导入钱包</div>
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
.text {
  background: rgba(255, 240, 205, 0.5);
  padding: 15px;
  font-size: 12px;
  color: rgba(139, 105, 40, 1);
}

.icon {
  text-align: center;
  margin-top: 27px;
  margin-bottom: 23px;

  img {
    width: 100px;
  }
}

.inport {
  margin: 0 auto;
  width: 300px;
  line-height: 58px;
  background: url('../../assets/img/btn2.png') no-repeat;
  background-size: 100% 100%;
  text-align: center;
  margin-bottom: 10px;
  color: #fff;
}

.create {
  margin: 0 auto;
  width: 300px;
  line-height: 50px;
  background: url('../../assets/img/btn1.png') no-repeat;
  background-size: 100% 100%;
  text-align: center;
  color: rgba(21, 99, 242, 1);
}
</style>
