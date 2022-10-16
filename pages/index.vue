<template>
  <div id="app">
    <div class="component">
      <Main />
    </div>
    <div class="component">
      <Projects />
    </div>
  </div>
</template>

<style lang="scss">
body {
  font-family: "Montserrat", sans-serif;
}
#app > .component {
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
</style>
