export function findDom(str,dom=document){
  return dom.querySelector(str)
}

export function createDom(str='div',dom=document){
  return dom.createElement(str)
}