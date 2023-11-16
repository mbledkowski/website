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
      <div class="component">
        <Blog />
      </div>
      <div class="component">
        <Contact />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  font-family: "Montserrat", sans-serif;
}

#app {
  h1 {
    grid-column: 1 / 3;
    padding-bottom: 4rem;
    @apply text-3xl text-white;
  }

  h2 {
    @apply text-white text-base;
  }

  p {
    @apply text-white text-base;
  }

  b {
    font-weight: 600;
  }

  &>#nav {
    position: sticky;
    top: 0;
    z-index: 10;
  }

  &>#site>.component {
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
    >div {
      position: sticky;
      top: 0;
    }

    b.semi {
      font-weight: 600;
    }
  }

  .badges {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

  }

  .box {
    background: rgba(15, 17, 42, 0.4);
    border: 3px solid rgba(13, 15, 40, 0.2);
    backdrop-filter: blur(7px);
    border-radius: 20px;
    padding: 1rem;

    &>h2,
    &>p,
    &>div>h2,
    &>div:not(:last-child)>p {
      margin-bottom: 0.5rem;
    }

    &.badge {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      margin: 0 1rem 1rem 0;
      width: 400px;

      >img {
        width: 6rem;
        height: 6rem;
        margin-right: 1rem;
        border-radius: 22.5%;
      }

      .details {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-start;

        >p {
          margin-bottom: 0.5rem;
        }

        >.level,
        >.level>.stars {
          display: flex;
          flex-flow: row nowrap;
          @apply text-white text-sm;
        }

        >.level>.stars {
          margin: calc(0.75rem / 2) 0.5rem calc(0.75rem / 2) 0;

          >span>img {
            width: 0.75rem;
            height: 0.75rem;
          }
        }
      }
    }
  }
}
</style>
