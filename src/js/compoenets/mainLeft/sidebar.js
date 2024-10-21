import { createDom } from "@/js/utils"

export default class Sidebar {
  sidebarInfo = null
  dom = null

  constructor(sidebarInfo) {
    this.sidebarInfo = sidebarInfo
    this.build()
  }

  #build() {
    this.dom = createDom('div')
    this.dom.classList.add('sidebar')

    this.sidebarInfo.forEach(item => {
      const menuItem = new MenuItem(item).build()
      this.dom.appendChild(menuItem)
    })

    return this.dom
  }
  get build(){
    return this.#build
  }
}

class MenuItem {
  title = null
  iconList = null
  dom = null

  constructor(itemInfo) {
    this.title = itemInfo.name
    this.iconList = itemInfo.icon_class_list
  }

  build() {
    this.dom = createDom('a')
    this.dom.classList.add("menu-item")

    this.dom.innerHTML = `
      <span>
        <i class="${this.iconList.join(" ")}"></i>
      </span> 
      <h2>${this.title}</h2>
    `
    return this.dom
  }
}