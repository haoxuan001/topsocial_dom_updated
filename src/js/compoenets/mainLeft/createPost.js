import { createDom } from "@/js/utils";

export default function createPost(){
  const label=createDom("label")
  label.classList.add('btn','btn-primary')
  label.setAttribute('for','create-post')
  label.textContent='Create Post'

  return label
}