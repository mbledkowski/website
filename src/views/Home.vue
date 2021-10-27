<template lang="pug">
div#home.win98popup.shadow
  header.bar
    p Maciej B&lstrok;&eogon;dkowski @mble
    span.button.shadow
      svg(xmlns='http://www.w3.org/2000/svg' width='8px' height='7px' viewbox='0 0 8 7' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2')
        path(d='M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z')
  section
    p
      | Front-end developer. Looking for a full-time (or part-time) job.
      br
      | Student at WSB University in Gda&nacute;sk.
  .buttons
    a(href='https://github.com/mbledkowski' target='_blank' rel='noopener')
      span.button.shadow
        img(src='/img/outline.svg' alt='' width='66.9' height='15')
        p
          u G
          | itHub
    a(href='https://linkedin.com/in/mbledkowski' target='_blank' rel='noopener')
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

export default defineComponent({
  name: 'Home',
})
</script>
<style lang="scss">
#home > section > p {
  margin: 0;
}
</style>
