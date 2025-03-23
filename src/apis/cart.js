import httpInstance from "@/utils/http";

export function addToCartApi ({skuId,count}) {
  return httpInstance({
    url: 'member/cart',
    method:"POST",
    data:{
      skuId,
      count
    }
  })
}

export function getCartListApi(){
  return httpInstance({
    url: 'member/cart'
  })
}

export function deleteCartListApi(ids){
  return httpInstance({
    url:"/member/cart",
    method:"DELETE",
    data:{
      ids
    }
  })
}

export function mergeCartListApi(data){
  return httpInstance({
    url:"/member/cart/merge",
    method:"POST",
    data
  })
}
