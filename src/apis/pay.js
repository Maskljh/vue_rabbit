import httpInstance from "@/utils/http"

export function getOrderApi(id){
  return httpInstance({
    url:`/member/order/${id}`
  })
}

