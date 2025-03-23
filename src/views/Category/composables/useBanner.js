import { getBannerAPI } from "@/apis/layoutApi";
import { onMounted, ref } from "vue";

export function useBanner(){
  const bannerList = ref([]);
  const getBannerList = async () => {
    const res = await getBannerAPI({
      distributionSite: "2",
    });
    console.log(res);
    bannerList.value = res.data.result;
  };
  onMounted(() => {
    getBannerList();
  });
  return {
    bannerList
  }
}