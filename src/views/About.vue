<template lang="pug">
div#about.win98popup.shadow
  header.bar
    p About
    router-link(to='/').button.shadow
        svg(xmlns='http://www.w3.org/2000/svg' width='8px' height='7px' viewbox='0 0 8 7' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2')
          path(d='M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z')
  main.scroll
    section
      h2 Maciej Błędkowski
      p
        | Front-end / Full-stack web developer.
        | Passionate programmer.
        br
        | Student at WSB University in Gda&nacute;sk.
      h2 Projects:
      ul#projects
        li
          a(href="https://github.com/mbledkowski/keycomp")
            b keycomp.co
          |  - website about switches for mechanical keyboards
          br
          | vuejs, nodejs, pug, scss, typescript, chartjs, python, supabase
        li
          a(href="https://github.com/mbledkowski/dnidomatury")
            b dnidomatury.pl
          |  - informations about matura exam
          br
          | expressjs, nodejs, pug, scss, javascript
        li
          a(href="https://github.com/ajayyy/SponsorBlock/graphs/contributors")
            b Front-end for SponsorBlock extension
          |  - front-end for pop-up panel
          br
          | html, css, typescript
        li
          a(href="https://github.com/mbledkowski/password_generator")
            b password generator
          br
          | python, tkinter
        li
          a(href="https://github.com/hspsh/biblioteka")
            b Library system for Hackerspace Pomorze
          br
          | docker, docker-compose, css, koha
        li
          a(href="https://github.com/mbledkowski/mble.dk")
            b mble.dk
          |  - Maciej Błędkowski's website
          br
          | vuejs, nodejs, pug, scss, typescript
        li
          a(href="https://www.youtube.com/channel/UCGHvNRuAi9et6u_ssUxqLPQ")
            b HQ265
          |  - technological/tutorial youtube channel
          br
          | Affinity Photo/Designer, DaVinci Resolve, HitFilm Express, kdenlive
      h2 Skills:
      h3 HTML & PUG:
      ul
        li all of the basics
        li html5 specific tags
        li elements' attributes
        li DOM model
        li pug pre-processor
      h3
        | CSS &
        | SCSS & SASS:
      ul
        li all of the basics
        li syntax, selectors
        li pseudo-elements
        li properties (including new properites like backdrop-filter)
        li transform (translate, rotate, scale, skew)
        li transition
        li position
        li display, flexbox, grid
        li @media
        li sass and scss pre-processors
      h3
        | JS & TS &
        | NODE.JS:
      ul
        li all of the basics
        li types of variables
        li differences between var, let, const
        li ifs, loops, switches, classes, functions
        li operations on arrays (map)
        li DOM selectors (querySelector, getElementById, other)
        li history API (history.pushState, window.history)
        li service worker (offline support)
        li es2016+ features
        li expressjs framework
        li nodejs api
      h4
        | Pluralsight scores:
      ul
        li
          b HTML5: IQ 205
          |  - Expert (April 2020)
        li
          b CSS: IQ 184
          |  - Proficient (November 2020)
        li
          b Node.js: IQ 162
          |  - Proficient (November 2020)
        li
          b JavaScript: IQ 138
          |  - Proficient (April 2020)
      h3 Git & GitHub:
      ul
        li pull, push and commit changes using git
        li how to manage branches and switch between them using git
        li git stash, git reset
        li git status, git log
        li manage repositories on github, gitlab, and bitbucket
        li create and manage with pull requests, issues on github
      h2 Languages:
      h3 Polish: native
      h3 English: C1

</template>
<style lang="scss">
#about section {
  align-items: flex-start;
  p{
    text-align: left;
  }
}
</style>
