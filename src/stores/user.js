import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LoginAPI } from "@/apis/login";
import {mergeCartListApi} from "@/apis/cart";
import { useCartStore } from '@/stores/cart';
export const useUserStore = defineStore('user', () => {
  const loginInfo=ref([])

  const getLoginInfo=async({ account, password })=>{
    const res=await LoginAPI({ account, password })
    console.log(res)
    loginInfo.value=res.data.result

    const cartStore=useCartStore()
    await mergeCartListApi(cartStore.cartList.map(
      item=>{
        return {
          skuId:item.skuId,
          selected:item.selected,
          count:item.count
        }
      }
    ))
    await cartStore.getCartList()
  }

  const clearLoginInfo=()=>{
    loginInfo.value={}
  }

  return{
    loginInfo,
    getLoginInfo,
    clearLoginInfo
  }
},{
  persist: true,
})
