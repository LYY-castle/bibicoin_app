<template>
  <div class="main">
    <el-row>
      <el-carousel arrow="never">
        <el-carousel-item v-for="(item,index) in banner" :key="index">
          <img :src="item.url" alt style="diaplay:block;width:100%;height:80%;">
        </el-carousel-item>
      </el-carousel>
      <div class="quick">
        <div v-for="(item,index) in quick" :key="index">
          <img :src="item.url" alt="index">
          <div style="text-align:center;">{{item.text}}</div>
        </div>
      </div>
      <!-- 产品 -->
      <div class="products">
        <div class="total">
          <img
            src="../../assets/img/investment.png"
            alt
            style="height:14px;width:auto;margin-right:6px;"
          >
          <span>总投资量（ETH）</span>
          <span style="color:#1866F4;font-size:22px;display:inline-block;">745428423</span>
        </div>
        <div class="content">
          <div class="title">精选产品推荐</div>
          <div class="product_end">
            <div class="name">BTC | 罗斯一号</div>
            <div class="introduce">
              <div class="rate">
                <div>
                  3.00
                  <span style="font-size:18px;">%</span>
                </div>
                <div class="year">年化收益率</div>
              </div>
              <div class="line"></div>
              <div class="day">
                <div style="font-weight:800;">产品期限 30 天</div>
                <div class="addPurchase">0.01BTC起购</div>
              </div>
              <div class="purchase_end">已售罄</div>
            </div>
          </div>
        </div>
      </div>
      <div class="more" @click="more()">更多产品 >></div>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      banner: [
        {
          url: require("../../assets/img/banner1.png")
        },
        {
          url: require("../../assets/img/banner1.png")
        },
        {
          url: require("../../assets/img/banner1.png")
        },
        {
          url: require("../../assets/img/banner1.png")
        }
      ],
      quick: [
        {
          text: "账户",
          url: require("../../assets/img/zh.png")
        },
        {
          text: "提币",
          url: require("../../assets/img/tb.png")
        },
        {
          text: "充币",
          url: require("../../assets/img/cb.png")
        }
      ]
    };
  },
  methods: {
    // 获取banner图
    getBanner: function() {
      var that = this;
      axios
        .post(
          "http://112.74.165.232:8380/deltagoServiceWeb/app/banner/indexBanner"
        )
        .then(function(response) {
          console.log(response);
        });
    },
    // 跳转到量化
    more() {
      this.$router.replace("/Quantification");
    }
  },
  components: {
  },
  created: function() {
    this.getBanner();
  }
};
</script>
<style scoped>
.el-row {
  position: relative;
}
.el-carousel {
  height: 225px;
  background: rgb(44, 138, 201);
}
.el-carousel-item {
  height: 100%;
}
.el-carousel__indicator {
  padding: 0 0;
}
.el-carousel-item .el-carousel__button {
  width: 10px;
  height: 10px;
  border-radius: 5px;
}
.el-carousel__indicators {
  display: none;
  height: 0;
}
.quick {
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  width: 90%;
  position: absolute;
  left: 5%;
  top: 190px;
  font-size: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 0 1px 2px #eee;
  z-index: 999;
}

img {
  display: block;
  width: 40px;
  height: 40px;
}
.products {
  padding-top: 50px;
  height: auto;
  background: #f5f5f9;
}

.total {
  width: 100%;
  background: #fff;
  text-align: center;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.content {
  background: #fff;
  padding: 15px;
}

.title {
  text-indent: 15px;
  position: relative;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  font-weight: 900;
}

.title::before {
  content: "";
  display: inline-block;
  position: absolute;
  left: 0px;
  top: 2px;
  background: url("../../assets/img/left.png") no-repeat;
  width: 3px;
  height: 50%;
}
.more {
  text-align: center;
  color: rgba(152, 155, 174, 1);
  background: #fff;
  margin-bottom: 15px;
}
</style>

