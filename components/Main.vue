<template>
  <div id="main">
    <nav>
      <a href="/#projects">Projects</a>
      <a href="/#skills">Skills & CV</a>
      <a href="/#blog">Blog</a>
      <a href="/#contact">Contact</a>
    </nav>
    <main>
      <section>
        <h2><u>Maciej</u> Błędkowski</h2>
        <h3>
          <b>Full-stack engineer</b> · <b class="semi">he/him</b> or
          <b class="semi">they/them</b>
        </h3>
        <div id="social">
          <a href="https://github.com/mbledkowski" target="_blank">
            <img src="~/assets/icons/github.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/mbled/" target="_blank">
            <img src="~/assets/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://instagram.com/mbledkowski" target="_blank">
            <img src="~/assets/icons/instagram.svg" alt="Instagram" />
          </a>
        </div>
      </section>
      <img src="~/assets/images/mble.png" alt="Maciej Błędkowski" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
#main {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  background: url("~/assets/images/hero.jpg") no-repeat center center / cover
    fixed;
  nav {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    margin: 2rem 0;
    width: 100%;
    z-index: 1;
    a {
      @apply text-xl text-white;
      &:not(:last-child):after {
        content: "·";
        margin: 0 0.5rem;
      }
    }
  }
  main {
    display: flex;
    flex-flow: row nowrap;
    margin: auto 0;
    section {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: flex-start;
      margin: auto 0 auto 8rem;
    }
    & > img {
      width: 50vw;
      position: absolute;
      right: 0;
      bottom: 0;
    }
    h2,
    h3 {
      @apply text-white;
    }
    h2 {
      @apply text-7xl font-black;
      u {
        text-decoration: solid underline #55aaaa 0.5rem;
      }
    }
    h3 {
      @apply text-3xl;
    }
    h2,
    h3,
    #social {
      margin-bottom: 1rem;
    }
    #social {
      display: flex;
      flex-flow: row nowrap;
      a {
        margin-right: 0.75rem;
        img {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
}
</style>
