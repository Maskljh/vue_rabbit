<script setup>
import homePanel from "@/components/HomePanel.vue";
import { useCategoryStore } from "@/stores/category";
import { onMounted } from "vue";
const categoryStore = useCategoryStore();
onMounted(() => {
  categoryStore.getHotList();
  console.log(categoryStore.hotList);
});
</script>

<template>
  <homePanel title="人气推荐" subTitle="人气爆款 不容错过">
    <ul class="goods-list">
      <li v-for="item in categoryStore.hotList" :key="item.id">
        <img v-img-lazy="item.picture" alt="" />
        <p class="name">{{ item.title }}</p>
        <p class="desc">{{ item.alt }}</p>
      </li>
    </ul>
  </homePanel>
</template>

<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  list-style-type: none;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
