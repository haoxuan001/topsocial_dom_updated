import { sidebar,profile } from "@/data/db.json"

import { findDom } from "@/js/utils";
// import sideBar from './components/mainLeft/sidebar'
import Sidebar from '@/js/compoenets/mainLeft/sidebar';
import Profile from "@/js/compoenets/mainLeft/profile";
import createPost from "@/js/compoenets/mainLeft/createPost";

/* Navbar */
  const navbar =
  findDom('nav')
   const navbar_container =
  findDom('.container', navbar)
   const navbar_container_logo =
  findDom('.logo', navbar_container)
   const navbar_container_searchBar =
  findDom('.search-bar', navbar_container)
   const navbar_create =
  findDom('.create', navbar_container)

/* Main */
 const main =
  findDom('main')
   const main_container = 
  findDom('.container', main)

/* Main Left */
  const main_left =
    findDom('.main-left', main_container)
//profile
  const main_left_profile = new Profile(profile);
    main_left.appendChild(main_left_profile.dom);
    console.log(main_left_profile);
//sidebar
  const sideBar = new Sidebar(sidebar)
  main_left.appendChild(sideBar.dom)

  const main_left_create_post=createPost()  
  main_left.appendChild(main_left_create_post)

// //left btn
// const leftButton=document.createElement('div');
// leftButton.classList.add('btn');
// main_left.appendChild(leftButton);
// //btn label
// const labelLeft=document.createElement('label');
// labelLeft.classList.add('btn');
// labelLeft.classList.add('btn-primary');
// labelLeft.setAttribute('for', 'create-post');
// labelLeft.textContent="create";
// leftButton.appendChild(labelLeft);

/* Main Middle */

/* Main Right */

export {
  navbar,
  navbar_container,
  navbar_container_logo,
  navbar_container_searchBar,
  navbar_create,
  main,
  main_container,
  main_left,
  sideBar
}