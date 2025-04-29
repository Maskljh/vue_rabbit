<script setup>
import HomeCategory from '@/components/HomeCategory.vue'
import HomeBanner from '@/components/HomeBanner.vue'
import HomeNew from '@/components/HomeNew.vue'
import HomeHot from '@/components/HomeHot.vue'
import homeProduct from '@/components/HomeProduct.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
</template>

<style scoped lang="scss">
.container{
  width: 100%;
  display: flex;
}
.home-category{
  flex: 1;
}
.home-banner{
  flex: 5;
}
</style>

