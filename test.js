function reverseStr(str){
  return str.split('').reverse().map(item=>item===item.toUpperCase()?item.toLowerCase():item.toUpperCase()).join('')
}

console.log(reverseStr("abC"))