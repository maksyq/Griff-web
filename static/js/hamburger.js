'use strict'

hamburger.onclick = (event) => {
  navMobile.style.right = "0"
  document.body.style.overflow = 'hidden'
}

exit.onclick = (event) => {
  navMobile.style.right = "-100%"
  document.body.style.overflow = 'auto'
}

for (const iterator of document.querySelectorAll('#navMobile a')) {
  iterator.onclick = (event) => {
    navMobile.style.right = "-100%"
    document.body.style.overflow = 'auto'
  }
}
