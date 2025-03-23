import XtxSku from "./XtxSku/index.vue"

//全局注册
export const componentPlugin = {
  install (app) {
    // app.component('组件名字'，组件配置对象)
    app.component('XtxSku', XtxSku)
  }
}