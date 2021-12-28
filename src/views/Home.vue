<template lang="pug">
div#home.win98popup.shadow
  header.bar
    p Maciej B&lstrok;&eogon;dkowski @mble
    span.button.shadow
      svg(xmlns='http://www.w3.org/2000/svg' width='8px' height='7px' viewbox='0 0 8 7' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2')
        path(d='M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z')
  article
    p
      | Front-end developer. Linux and open-source enthusiast. Colemak user.
      br
      | Student of Computer Science at WSB University in Gda&nacute;sk.
  .buttons
    a(href='https://github.com/mbledkowski' target='_blank' rel='noopener')
      span.button.shadow
        img(src='/img/outline.svg' alt='' width='66.9' height='15')
        p
          u G
          | itHub
    a(href='https://linkedin.com/in/mbled' target='_blank' rel='noopener')
      span.button.shadow
        img(src='/img/outline.svg' alt='' width='66.9' height='15')
        p
          u L
          | inkedIn
    router-link(to='/about')
      span.button.shadow
        img(src='/img/outline.svg' alt='' width='66.9' height='15')
        p
          u A
          | bout
    router-link(to='/blog')
      span.button.shadow
        img(src='/img/outline.svg' alt='' width='66.9' height='15')
        p
          u B
          | log
</template>

<script lang="ts">
import { defineComponent } from 'vue'

document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'G':
    case 'g':
      window.open('https://github.com/mbledkowski', '_blank')
      break
    case 'L':
    case 'l':
      window.open('https://linkedin.com/in/mbledkowski', '_blank')
      break
    case 'A':
    case 'a':
      window.open('/about', '_self')
      break
    case 'B':
    case 'b':
      window.open('/blog/index', '_self')
      break
    default:
      break
  }
})

export default defineComponent({
  name: 'Home',
})
</script>
<style lang="scss">
#home > article > p {
  margin: 0;
}
</style>
