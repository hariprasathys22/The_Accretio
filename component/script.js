let searchBtn = document.querySelector('.search-icon')
searchBtn.addEventListener('click',()=>{
    let searchBox = document.querySelector('.search-content')
    searchBtn.style.display="none"
    searchBox.style.display="block"
    searchBox.style.transitionDuration=".5s"
})

let op = document.querySelector('.menuEl')
let cl = document.querySelector('.close_button')
let menu = document.querySelector('.menu1')

op.addEventListener('click',()=>{
    op.classList.toggle("open-active")
    cl.classList.toggle("close-active")
    menu.classList.toggle("menuItems")
})
cl.addEventListener('click',()=>{
    op.classList.remove("open-active")
    cl.classList.remove("close-active")
    menu.classList.remove("menuItems")
})