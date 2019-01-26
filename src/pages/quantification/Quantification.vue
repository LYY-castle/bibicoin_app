<template>
  <div class="top_main">
    <TopBar></TopBar>
    <div class="sort">
      <div v-for="(item,k) in sorts" :key="k" :status="item.status">{{item.title}}</div>
    </div>
    <div class="products">
      <div class="product">
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
                <div class="time">产品期限 30 天</div>
                <div class="addPurchase">0.01BTC起购</div>
              </div>
              <div class="purchase">立即购买</div>
            </div>
          </div>
    </div>
    <div class="down">以下为近期已满额项目</div>
    <div class="products">
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
            <div class="time">产品期限 30 天</div>
            <div class="addPurchase">0.01BTC起购</div>
          </div>
          <div class="purchase_end">已售罄</div>
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
    return {
      sorts: [
        {
          title: "默认",
          status: true
        },
        {
          title: "预期增值",
          status: false
        },
        {
          title: "期限",
          status: false
        }
      ],
      active: "color:rgba(7, 73, 234, 1)"
    };
  },
  components: {
    TopBar
  }
};
</script>

<style scoped lang="stylus">
.sort {
  display: flex;
  justify-content: space-around;
  line-height: 40px;
}

.products {
}

.down {
  line-height: 50px;
  text-align: center;
}
</style>