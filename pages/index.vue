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
    </div>
  </div>
</template>

<style lang="scss">
body {
  font-family: "Montserrat", sans-serif;
}
#app {
  &> #nav {
    position: sticky;
    top: 0;
    z-index: 10;
  }
&> #site > .component {
  &:not(:first-child) {
    margin-top: -100vh;
  }
  &:not(:last-child) {
    height: 200vh;
  }
  > div {
    position: sticky;
    top: 0;
  }
  b.semi {
    font-weight: 600;
  }
}
}
</style>
