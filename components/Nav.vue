<template>
  <div id="nav">
    <nav>
      <a href="/#projects">Projects</a>
      <a href="/#skills">Skills & CV</a>
      <a href="/#blog">Blog</a>
      <a href="/#contact">Contact</a>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
