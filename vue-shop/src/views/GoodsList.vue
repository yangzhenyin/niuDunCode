<template>
  <div>
    <nav-header></nav-header>
    <nav-bread></nav-bread>
    <div class="accessory-result-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">排序:</span>
          <a href="javascript:void(0)" class="default cur">默认</a>
          <a href="javascript:void(0)" class="price">价格
            <svg class="icon icon-arrow-short">
              <use xlink:href="#icon-arrow-short"></use>
            </svg>
          </a>
          <a href="javascript:void(0)" class="filterby">筛选</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter" id="filter">
            <dl class="filter-price">
              <dt>价格区间:</dt>
              <dd><a href="javascript:void(0)">选择价格</a></dd>
              <dd>
                <a href="javascript:void(0)">￥ 0 - 100 元</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="item in goodsList">
                  <div class="pic">
                    <a href="#"><img v-bind:src="`/static/${item.productImage}`" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}}</div>
                    <div class="price">¥ {{item.salePrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>

  // 引入样式
  import './../assets/css/base.css';
  import './../assets/css/goods-list.css';
  import './../assets/css/login.css';
  import './../assets/css/nav-bread.css';
  import './../assets/css/nav-footer.css';
  import './../assets/css/nav-header.css';

  // 引入公共组件
  import NavHeader from "../components/NavHeader.vue";
  import NavBread from "../components/NavBread.vue";
  import NavFooter from "../components/NavFooter.vue";
  // 引入请求方法
  import axios from 'axios';

  export default {
    name: "GoodsList",
    data () {
      return {
        goodsList: [],        // 初始化数据
      }
    },
    // 组件加载完成生命周期
    mounted () {
      this.getGoodsList();
    },
    components: {
      NavHeader,
      NavBread,
      NavFooter,
    },
    methods: {
      getGoodsList () {
        axios.get('http://localhost:3000/goods').then((result)=> {
          console.log(result);
          let res = result.data.result;
          this.goodsList = res;
        })
      },
    }
  }
</script>

<style scoped>

</style>