<script setup>
import { useRoute } from "vue-router";
import { getCategoryFilterAPI, getSubCategoryAPI } from "@/apis/layoutApi";
import { onMounted, ref } from "vue";
import GoodsItem from "@/components/GoodsItem.vue"
const route = useRoute();
const categroyFilter = ref({});
// console.log(route.params.id)
const getCategoryFilter = async () => {
  const res = await getCategoryFilterAPI(route.params.id);
  console.log(res);
  categroyFilter.value = res.data.result;
};
onMounted(() => {
  getCategoryFilter();
});

const activeName = ref("publishTime");
const subCategortList=ref([])

const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: activeName,
});

const getSubCategory=async()=>{
  const res=await getSubCategoryAPI(reqData.value)
  console.log(res)
  subCategortList.value=res.data.result.items
  console.log(subCategortList.value)
}

const handleClick = () => {
  reqData.value.page=1
  getSubCategory()
};

onMounted(()=>{
  getSubCategory()
})

const disabled=ref(false)

//无限加载
const load = async() => {
  reqData.value.page++
  const res=await getSubCategoryAPI(reqData.value)
  subCategortList.value=[...subCategortList.value,...res.data.result.items]
    // 加载完毕 停止监听
  if (res.data.result.items.length === 0) {
    disabled.value = true
  }
}

</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          :to="{ path: `/category/${categroyFilter.parentId}` }"
          >{{ categroyFilter.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categroyFilter.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <GoodsItem v-for="good in subCategortList" :key="good.id" :good="good"></GoodsItem>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>