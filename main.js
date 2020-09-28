document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case "G":
    case "g":
      window.open('https://github.com/mbledkowski', '_blank')
      break
    case "L":
    case "l":
      window.open('https://linkedin.com/in/mbledkowski', '_blank')
      break
    case "A":
    case "a":
      window.open('./about.htm', '_self')
      break
    case "B":
    case "b":
      window.open('./blog/index.htm', '_self')
      break
  }
})