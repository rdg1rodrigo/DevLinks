function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./img/avatar.png")
    img.setAttribute(
      "alt","foto do rodrigo, usando oculos, camiseta preta e barba"
    
    )
  } else {
    img.setAttribute("src", "./img/Avataur.png")
    img.setAttribute(
      "alt",
      "foto do rodrigo, usando oculos, blusa cinza e barba"
    )
  }
}
