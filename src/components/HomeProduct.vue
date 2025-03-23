<script setup>
import HomePanel from "./HomePanel.vue";
import { getGoodsAPI } from "@/apis/layoutApi";
import { onMounted, ref } from "vue";
import GoodsItem from "./GoodsItem.vue"

const goodsList = ref([]);
const getGoodsList = async () => {
  const res = await getGoodsAPI();
  goodsList.value = res.data.result;
  console.log(goodsList.value);
};

onMounted(() => {
  getGoodsList();
});
</script>

<template>
  <div class="home-product">
    <HomePanel :title="cate.name" v-for="cate in goodsList" :key="cate.id">
      <div class="box">
        <RouterLink class="cover" :to="`/category/${cate.id}`">
          <img :src="cate.picture" alt="category cover" />
          <strong class="label">
            <span>{{ cate.name }}馆</span>
            <span>{{ cate.saleInfo }}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="good in cate.goods" :key="good.id">
            <!-- <RouterLink to="/" class="goods-item">
              <img :src="good.picture" alt="" />
              <p class="name ellipsis">{{ good.name }}</p>
              <p class="desc ellipsis">{{ good.desc }}</p>
              <p class="price">&yen;{{ good.price }}</p>
            </RouterLink> -->
            <GoodsItem :good=good></GoodsItem>
          </li>
        </ul> 
      </div>
    </HomePanel>
  </div>
</template>

<style scoped lang='scss'>
.home-product {
  background: #fff;
  margin-top: 20px;
  min-width: 1240px; /* 添加最小宽度，防止内容挤压 */

  .box {
    display: flex;
    min-width: 1240px; /* 确保box不会太窄 */

    .cover {
      width: 30%;
      height: 610px;
      margin-right: 10px;
      position: relative;
      min-width: 240px; /* 添加最小宽度，防止过度缩小 */

      img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* 确保图片不会变形 */
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }

    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      min-width: 990px; /* 防止商品列表区域缩小 */

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;
        min-width: 240px; /* 防止商品项缩小 */
        flex-shrink: 0; /* 阻止项目在空间不足时收缩 */

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }

    .goods-item {
      display: block;
      width: 220px;
      padding: 20px 30px;
      text-align: center;
      transition: all 0.5s;
      min-width: 220px; /* 确保不会缩小 */

      &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
      }

      img {
        width: 130px;
        height: 130px;
        min-width: 130px; /* 确保图片不会缩小 */
        min-height: 130px; /* 确保图片不会缩小 */
        object-fit: cover; /* 保持图片比例 */
      }

      p {
        padding-top: 10px;
      }

      .name {
        font-size: 16px;
        white-space: nowrap; /* 防止换行 */
        overflow: hidden; /* 隐藏超出部分 */
        text-overflow: ellipsis; /* 超出部分用省略号显示 */
      }

      .desc {
        color: #999;
        height: 29px;
        white-space: nowrap; /* 防止换行 */
        overflow: hidden; /* 隐藏超出部分 */
        text-overflow: ellipsis; /* 超出部分用省略号显示 */
      }

      .price {
        color: $priceColor;
        font-size: 20px;
      }
    }
  }
}
</style>
