<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
import {useCategoryStore} from "@/stores/category"
import { onMounted } from "vue";

const categoryStore=useCategoryStore()

onMounted(()=>{
  categoryStore.getCategoryList()
})
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <div class="main-container">
    <LayoutHeader />
    <RouterView />
  </div>
  <LayoutFooter />
</template>

<style scoped lang='scss'>
.main-container{
  margin-left: 10%;
  margin-right: 10%;
}
</style>
