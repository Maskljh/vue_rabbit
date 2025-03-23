import httpInstance from "@/utils/http";

export function LoginAPI ({account,password}) {
  return httpInstance({
    url: 'login',
    method:"POST",
    data:{
      account,
      password
    }
  })
}