<script setup>
import {useCategoryStore} from "@/stores/category"
import { onMounted } from "vue"

const categoryStore=useCategoryStore()
onMounted(()=>{
  categoryStore.getBannerList()
})
</script>


<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in categoryStore.bannerList" :key="item.id">
        <img :src=item.imgUrl alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 100%;
  height: 500px;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
