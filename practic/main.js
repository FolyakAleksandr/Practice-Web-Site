const button = document.querySelector(".btn")
const menu = document.querySelector(".menu")

button.addEventListener('click', () => {
  menu.classList.toggle('menu__visiable')
  menu.classList.toggle('menu')
})
console.log(menu)