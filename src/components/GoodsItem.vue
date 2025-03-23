<template>
  <RouterLink :to="`/detail/${good.id}`" class="goods-item">
    <img :src="good.picture" alt="" />
    <p class="name ellipsis">{{ good.name }}</p>
    <p class="desc ellipsis">{{ good.desc }}</p>
    <p class="price">&yen;{{ good.price }}</p>
  </RouterLink>
</template>

<script setup>
defineProps({
  good: {
    type: Object,
    default: () => {},
  },
});
// console.log(good)
</script>

<style lang="scss" scoped>
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  transition: all 0.5s;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }

  img {
    width: 130px;
    height: 130px;
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
</style>