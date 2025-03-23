import { getCategoryListAPI } from "@/apis/layoutApi";
import { onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export function useCategory() {
  const categoryList = ref([]);
  const route = useRoute();

  const getCategoryList = async (id = route.params.id) => {
    const res = await getCategoryListAPI(id);
    console.log(res);
    categoryList.value = res.data.result;
    // console.log(categoryList.value.name)
  };
  onMounted(() => {
    getCategoryList();
  });

  //重要 当参数变化时，页面发生改变
  onBeforeRouteUpdate((to) => {
    getCategoryList(to.params.id);
  });

  return{
    categoryList
  }
}
