<template>
  <div id="projects">
    <section v-for="(project, index) in projects" class="project" :key="index">
      <Titlebar title="Projects" :subtitle="project.title" />
      <article>
        <div class="page-number">
          <span class="main">
            <b v-if="index < 10">0{{ index + 1 }}</b>
            <b v-else>{{ index + 1 }}</b>/</span>
          <span v-if="projects.length < 10">0{{ projects.length }}</span>
          <span v-else>{{ projects.length }}</span>
        </div>
        <div class="technologies box">
          <div v-if="project.properties.design !== undefined">
            <h2>Design</h2>
            <p>{{ project.properties.design }}</p>
          </div>
          <div v-if="project.properties.styling !== undefined">
            <h2>Styling</h2>
            <p>{{ project.properties.styling }}</p>
          </div>
          <div v-if="project.properties.frontend !== undefined">
            <h2>Front-end</h2>
            <p>{{ project.properties.frontend }}</p>
          </div>
          <div v-if="project.properties.backend !== undefined">
            <h2>Back-end</h2>
            <p>{{ project.properties.backend }}</p>
          </div>
          <div v-if="project.properties.testing !== undefined">
            <h2>Testing</h2>
            <p>{{ project.properties.testing }}</p>
          </div>
        </div>
        <div class="description box">
          <h2>About</h2>
          <p>
            <i>{{ project.description }}</i>
          </p>
          <div class="links">
            <a v-if="project.link !== undefined" :href="project.link"><img src="~/assets/icons/web.svg"
                alt="Website" /></a>
            <a :href="project.github"><img src="~/assets/icons/github.svg" alt="GitHub" /></a>
            <p>
              <b class="semi">{{ project.license }}</b>
            </p>
          </div>
        </div>
      </article>
      <aside class="images" v-if="project.images !== undefined">
        <img v-for="(image, index) in project.images" :src="image.src" :alt="image.alt" :key="index" />
      </aside>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "Dni Do Matury",
          description:
            "A countdown to the Polish Matura exam, written in Vue.js and TypeScript.",
          images: [
            {
              src: "~/assets/images/projects/dnimatury/desktop.png",
              alt: "Dni Do Matury desktop",
            },
          ],
          link: "https://dnidomatury.pl/",
          github: "https://github.com/mbledkowski/dnidomatury",
          license: "Apache-2.0",
          properties: {
            design: "Affinity Designer",
            styling: "SCSS, Tailwind CSS",
            frontend: "Nuxt.js, Vue.js, Day.js, TypeScript",
            backend: "Node.js, Netlify",
            testing: "Jest",
          },
        },
        {
          title: "Password Generator",
          description: "Applicaton for generating random passwords.",
          github: "https://github.com/mbledkowski/password_generator",
          license: "Apache-2.0",
          properties: {
            frontend: "Tkinter",
            backend: "Python",
          },
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
#projects {
  padding: 0 8rem 6rem;
  background: url("~/assets/images/bg00.jpg") no-repeat center center / cover fixed;

  .project {
    padding-top: 6rem;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: min-content 1fr;
    min-height: calc(100vh - 12rem);

    article {
      display: flex;
      flex-flow: column nowrap;
      min-height: calc(100vh - 18.25rem);
      @apply text-white text-base;

      >div:not(:last-child) {
        margin-bottom: 1rem;
      }

      >div:last-child {
        margin-top: auto;
      }

      .technologies p {
        font-weight: 600;
      }

      .page-number>.main {
        @apply text-xl;
      }

      .links {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin: 0.5rem 0 0;

        a {
          margin-right: 0.75rem;
        }
      }
    }
  }
}
</style>
