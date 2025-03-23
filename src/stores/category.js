import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getCategoryAPI ,getBannerAPI ,getHotAPI, getNewAPI } from "@/apis/layoutApi"

export const useCategoryStore = defineStore('category', () => {
  const categoryList=ref([])
  const getCategoryList=async()=>{
    const res=await getCategoryAPI()
    categoryList.value=res.data.result
  }

  const bannerList=ref([])
  const getBannerList=async()=>{
    const res=await getBannerAPI()
    console.log(res)
    bannerList.value=res.data.result
  }

  const hotList=ref([])
  const getHotList=async()=>{
    const res=await getHotAPI()
    console.log(res)
    hotList.value=res.data.result
  }

  const newList=ref([])
  const getNewList=async()=>{
    const res=await getNewAPI()
    console.log(res)
    newList.value=res.data.result
  }

  return{
    categoryList,
    getCategoryList,
    bannerList,
    getBannerList,
    hotList,
    getHotList,
    newList,
    getNewList
  }
})
