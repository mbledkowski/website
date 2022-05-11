<template lang="pug">
div#blog.win98popup.shadow
  header.bar
    p Blog
    router-link(to='/').button.shadow
        svg(xmlns='http://www.w3.org/2000/svg' width='8px' height='7px' viewbox='0 0 8 7' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2')
          path(d='M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z')
  article
    div(class="post-prev" v-for="item in items")
      p {{item.title}}
      div(class="subsection")
        p {{monthNames[item.date.getMonth()]}} {{item.date.getDate()}}, {{item.date.getFullYear()}}
        router-link(:to='"/blog/"+item.address') Read
</template>
<style lang="scss">
.post-prev {
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-flow: column nowrap;
  > p {
    align-self: flex-start;
  }
}
.post-prev > p, .post-prev >.subsection > p {
  margin-bottom: 0;
}
.post-prev > .subsection {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
</style>
<script lang="ts">
export default ({
  data() {
    return {
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      items: [
        { title: '[Writeup] FluxCloud Serverless - Hack.lu 2020', date: new Date('26 October 2020'), address: 'fluxcloud-serverless-hacklu-2020' },
        { title: '[Writeup] Callboy - Hack.lu 2020', date: new Date('26 October 2020'), address: 'callboy-hacklu-2020' },
        { title: '[Writeup] Cubes - Heroctf.fr 2021', date: new Date('26 April 2021'), address: 'cubes-heroctf-2021' },
        { title: '[Writeup] Ping Pong - Heroctf.fr 2021', date: new Date('26 April 2021'), address: 'ping-pong-heroctf-2021' },
        { title: '[Writeup] Record - Heroctf.fr 2021', date: new Date('26 April 2021'), address: 'record-heroctf-2021' },
        { title: '[Writeup] Russian Doll - Heroctf.fr 2021', date: new Date('26 April 2021'), address: 'russian-doll-heroctf-2021' },
        { title: '[Writeup] You Should Die - Heroctf.fr 2021', date: new Date('26 April 2021'), address: 'you-should-die-heroctf-2021' },
        { title: 'Listening to Spotify fully open-source way', date: new Date('11 May 2022'), address: 'spotify-open-source-way' },
      ],
    }
  },
})
</script>
