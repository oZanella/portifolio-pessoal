function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver ligth mode, adicionar img ligth
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Sem foto no modo light")
  } else {
    //se tiver sem ligth mode, adicionar img normal
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute("alt", "Sem foto no modo Dark")
  }
}
