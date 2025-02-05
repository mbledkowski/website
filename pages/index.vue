<template>
  <div id="page-index">
    <div
      class="hero grid-rows-[4em_minmax(600px,_1fr)_4em] md:grid-rows-[4em_minmax(400px,_1fr)_4em] gap-8 p-2 py-8 sm:p-8 min-h-screen sm:bg-gradient-to-r from-[#11998e] to-[#38ef7d]">
      <div
        class="hero-content row-start-2 flex-col lg:flex-row-reverse sm:mx-16 sm:bg-base-100 sm:rounded-2xl sm:shadow-2xl">
        <NuxtImg class="sm:max-w-sm rounded-lg w-10/12 max-w-fit shadow-lg sm:shadow-2xl sm:m-8"
          :src="'/personal/blob/' + data.image" alt="Photo of Maciej Błędkowski" />
        <div class="my-0 mx-2 sm:mx-4 sm:my-8 md:mx-8 lg:ml-8 lg:mx-0">
          <h1 class="text-5xl mb-2 sm:text-8xl lg:text-9xl font-medium sm:mb-4 pressgothicpro">
            {{ data.name }}
          </h1>
          <p class="text-md sm:text-2xl urwgeometric">
            {{ data.title }} · <i>{{ data.motto }}</i>
          </p>
          <p class="text-sm sm:text-xl urwgeometric font-thin">
            {{ data.pronouns }}
          </p>
          <div id="social" class="mt-4">
            <a v-if="data.social.linkedin" :href="data.social.linkedin.link"
              :title="'LinkedIn: ' + data.social.linkedin.username">
              <Icon name="cib:linkedin" size="1.5em" />
            </a>
            <a v-if="data.social.github" :href="data.social.github.link"
              :title="'GitHub: ' + data.social.github.username">
              <Icon name="cib:github" size="1.5em" />
            </a>
            <a v-if="data.social.stackoverflow" :href="data.social.stackoverflow.link"
              :title="'Stack Overflow: ' + data.social.stackoverflow.username">
              <Icon name="cib:stackoverflow" size="1.5em" />
            </a>
          </div>
        </div>
      </div>
      <nav class="row-start-3 urwgeometric font-bold sticky top-0">
        <ul class="menu bg-base-200 items-center menu-horizontal rounded-badge">
          <li>
            <a class="rounded-badge" @click="section = 'projects'">
              Projects
            </a>
          </li>
          <li>
            <a class="rounded-badge" @click="section = 'timeline'">
              Timeline
            </a>
          </li>
          <li>
            <a class="special-button max-h-[46px]" @click="section = 'contact'">
              Contact & CV
              <div class="special-button-hover-effect">
                <div></div>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div id="sections">
      <Projects v-if="section === 'projects'" :projects="data.projects" />
      <Timeline v-if="section === 'timeline'" :timeline="data.timeline" />
      <Contact v-if="section === 'contact'" :email="data.email.job" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/data')
const section = useState('section', () => 'projects')
</script>

<style scoped>
#social a:not(:last-child) {
  @apply mr-2;
}

nav>ul>li:not(:last-child)>a {
  @apply mr-2;
  padding: 13px 25px;

}

.pressgothicpro {
  font-family: 'Press Gothic Pro';
}

.urwgeometric {
  font-family: 'URW Geometric';
}

.special-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  border: 0;
  position: relative;
  overflow: hidden;
  border-radius: 10rem;
  transition: all 0.02s;
  font-weight: bold;
  cursor: pointer;
  color: rgb(27, 27, 27);
  z-index: 0;
  box-shadow: 0 0px 7px -5px rgba(0, 0, 0, 0.5);
}

@media (prefers-color-scheme: dark) {
  .special-button {
    color: rgb(228, 228, 228);
  }
}

.special-button:hover {
  background: rgb(193, 228, 248);
  color: rgb(23, 0, 85);
}

.special-button:active {
  transform: scale(0.97);
}

.special-button-hover-effect {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.special-button-hover-effect div {
  background: rgb(222, 0, 75);
  background: linear-gradient(90deg,
      rgba(222, 0, 75, 1) 0%,
      rgba(191, 70, 255, 1) 49%,
      rgba(0, 212, 255, 1) 100%);
  border-radius: 40rem;
  width: 10rem;
  height: 10rem;
  transition: 0.4s;
  filter: blur(20px);
  animation: effect infinite 3s linear;
  opacity: 0.5;
}

.special-button:hover .special-button-hover-effect div {
  width: 8rem;
  height: 8rem;
}

@keyframes effect {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
