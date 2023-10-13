<template>
  <div id="app">
    <div id="nav">
      <Nav />
    </div>
    <div id="site">
      <div class="component">
        <Main />
      </div>
      <div class="component">
        <Projects />
      </div>
      <div class="component">
        <Skills />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  font-family: "Montserrat", sans-serif;
}
#app {
  & > #nav {
    position: sticky;
    top: 0;
    z-index: 10;
  }
  & > #site > .component {
    display: flex;
    flex-flow: column nowrap;
    // &:not(:first-child) {
    //   margin-top: -100vh;
    // }
    // &:not(:last-child) {
    //   min-height: max-content;
    //   &::after {
    //     content: "";
    //     display: block;
    //     height: 100vh;
    //   }
    // }
    > div {
      position: sticky;
      top: 0;
    }
    b.semi {
      font-weight: 600;
    }
  }
  .box {
    background: rgba(15, 17, 42, 0.4);
    border: 3px solid rgba(13, 15, 40, 0.2);
    backdrop-filter: blur(7px);
    border-radius: 19px;
    padding: 1rem;
    & > h2,
    & > p,
    & > div > h2,
    & > div:not(:last-child) > p {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
