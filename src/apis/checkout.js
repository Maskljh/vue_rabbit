import httpInstance from "@/utils/http"

export function getCheckOutApi(){
  return httpInstance({
    url:"/member/order/pre"
  })
}

export const createOrderAPI = (data) => {
  return httpInstance({
    url: '/member/order',
    method: 'POST',
    data
  })
}