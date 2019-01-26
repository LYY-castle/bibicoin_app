<template>
  <div id="app">
    <div class="bottom">
      <div class="home" @click="goto('/Home')">
        <div>
          <img alt :src="img01">
        </div>
        <div>首页</div>
      </div>
      <div class="up_money" @click="goto('/Quantification')">
        <div>
          <img alt :src="img02">
        </div>
        <div>量化</div>
      </div>
      <div class="wallet" @click="goto('/Wallet')">
        <div>
          <img alt :src="img03">
        </div>
        <div>钱包</div>
      </div>
      <div class="more" @click="goto('/Application')">
        <div>
          <img alt :src="img04">
        </div>
        <div>应用</div>
      </div>
      <div class="mine" @click="goto('/Mine')">
        <div>
          <img alt :src="img05">
        </div>
        <div>我的</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "BottomBar",
  data() {
    return {
      img01: require('../assets/img/bottom/home01.png'),
      img02: require('../assets/img/bottom/addMoney02.png'),
      img03: require('../assets/img/bottom/wallet.png'),
      img04: require('../assets/img/bottom/application02.png'),
      img05: require('../assets/img/bottom/mine02.png'),
    };
  },
  methods:{
    goto(path){
      if(path === '/Home'){
        this.img01 = require('../assets/img/bottom/home01.png');
      }else{
        this.img01 = require('../assets/img/bottom/home02.png');
      }
      if(path === '/Quantification'){
        this.img02 = require('../assets/img/bottom/addMoney01.png');
      }else{
        this.img02 = require('../assets/img/bottom/addMoney02.png');
      }
      if(path === '/Application'){
        this.img04 = require('../assets/img/bottom/application01.png');
      }else{
        this.img04 = require('../assets/img/bottom/application02.png');
      }
      if(path === '/Mine'){
        this.img05 = require('../assets/img/bottom/Mine01.png');
      }else{
        this.img05 = require('../assets/img/bottom/Mine02.png');
      }
      return this.$router.replace(path);
    },
  },
};
</script>

<style>
.bottom {
  border-top: 1px solid #eee;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  z-index: 999;
  background: #fff;
}
.bottom > div > div {
  text-align: center;
  font-size: 12px;
}
.bottom > div > div:last-child {
  margin-top: 5px;
}
.bottom > div > div:first-child {
  height: 22px;
}
.bottom > div > div:first-child img {
  height: 100%;
}
.bottom > .wallet {
  position: relative;
}
.bottom > .wallet > div:first-child img {
  height: 40px;
  position: absolute;
  top: -18px;
  left: -6px;
}
</style>