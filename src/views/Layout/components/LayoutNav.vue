<script setup>
import {useUserStore} from "@/stores/user"
import { useRouter } from "vue-router"
const userStore=useUserStore()

import {useCartStore} from "@/stores/cart"
const cartStore=useCartStore()
const route=useRouter()
// console.log(userStore.loginInfo)

const confirmEvent=()=>{
  userStore.clearLoginInfo()
  cartStore.clearCart()
  route.push("/login")
}
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if=userStore.loginInfo.token>
          <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{userStore.loginInfo.account}}</a></li>
          <li>
            <el-popconfirm title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消"  @confirm="confirmEvent">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>


<style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    // 去除li前面的小黑点
    list-style-type: none; 
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
