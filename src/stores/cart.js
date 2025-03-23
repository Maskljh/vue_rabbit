import { ref } from "vue";
import { defineStore } from "pinia";
import { computed } from "vue";
import { useUserStore } from "@/stores/user";
import { getCartListApi,addToCartApi,deleteCartListApi } from "@/apis/cart";

export const useCartStore = defineStore(
  "cart",
  () => {
    const cartList = ref([]);
    const userStore = useUserStore();
    // const isLogin = computed(() => userStore.loginInfo.token);
    const isLogin= userStore.loginInfo?.token

    const addCartList = async (goods) => {
      const {skuId,count}=goods
      console.log("加入购物车");
      console.log(isLogin)
      if (isLogin) {
        await addToCartApi({skuId,count})
        const res=await getCartListApi()
        // console.log(res.data.result)
        cartList.value=res.data.result
      } else {
        const item = cartList.value.find((item) => item.skuId === goods.skuId);
        if (item) {
          item.count += goods.count;
        } else {
          cartList.value.push(goods);
        }
      }
    };

    const getCartList=async()=>{
      const res=await getCartListApi()
      // console.log(res.data.result)
      cartList.value=res.data.result
    }

    const delCart = async (skuId) => {
      if(isLogin){
        const idx=[skuId]
        await deleteCartListApi(idx)
        const res=await getCartListApi()
        // console.log(res.data.result)
        cartList.value=res.data.result
      }
      else{
        const item = cartList.value.filter((item) => item.skuId === skuId);
        cartList.value.pop(item);
      }
    };

    const num = computed(() => {
      return cartList.value.reduce((sum, item) => sum + item.count, 0);
    });

    const price = computed(() => {
      return cartList.value.reduce(
        (sum, item) => sum + item.count * item.price,
        0
      );
    });

    const selectedNum = computed(() => {
      return cartList.value.reduce((sum, item) => {
        if (item.selected === true) return sum + item.count;
        else return sum;
      }, 0);
    });

    const selectedPrice = computed(() => {
      return cartList.value.reduce((sum, item) => {
        if (item.selected === true) return sum + item.count * item.price;
        else return sum;
      }, 0);
    });

    const changeSelected = (value, i) => {
      const item = cartList.value.find((item) => item.skuId === i.skuId);
      item.selected = value;
    };

    const isAll = computed(() => {
      return cartList.value.every((item) => item.selected);
    });

    const changeAllSelected = (value) => {
      console.log("到store", value);
      cartList.value.forEach((item) => (item.selected = value));
    };

    const clearCart=()=>{
      cartList.value=[]
    }

    return {
      cartList,
      addCartList,
      delCart,
      num,
      price,
      changeSelected,
      selectedNum,
      selectedPrice,
      isAll,
      changeAllSelected,
      clearCart,
      getCartList
    };
  },
  {
    persist: true,
  }
);
