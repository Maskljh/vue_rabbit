import httpInstance from "@/utils/http";

export function getCategoryAPI () {
  return httpInstance({
    url: 'home/category/head'
  })
}

export function getBannerAPI (params={}) {
  const {distributionSite='1'}=params
  return httpInstance({
    url: '/home/banner',
    params:{
      distributionSite
    }
  })
}

export function getHotAPI () {
  return httpInstance({
    url: '/home/hot'
  })
}

export function getNewAPI () {
  return httpInstance({
    url: '/home/new'
  })
}

export function getGoodsAPI () {
  return httpInstance({
    url: '/home/goods'
  })
}

export function getCategoryListAPI (id) {
  return httpInstance({
    url: '/category',
    params:{
      id
    }
  })
}

export const getCategoryFilterAPI = (id) => {
  return httpInstance({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return httpInstance({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}