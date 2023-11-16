<template>
  <div id="skills">
    <Titlebar title="Skills & CV" />
    <section v-for="section in sections" :key="section[0]">
      <h2>{{ section[1] }}</h2>
      <div class="badges">
        <div v-for="(item, index) in skills[section[0]]" :key="index" class="box badge">
          <img :src="getImage(item[1])" :alt="item[0] + ' icon'" />
          <div class="details">
            <p><b>{{ item[0] }}</b></p>
            <div class="level">
              <div class="stars">
                <span class="active_star" v-for="index in item[2]" :key="index"><img src="~/assets/icons/star.svg"
                    alt="Star" /></span>
                <span class="inactive_star" v-for="index in 5 - item[2]" :key="index"><img src="~/assets/icons/star.svg"
                    alt="Star" class="brightness-50" /></span>
              </div>
              <p>{{ levels[Number(item[2]) - 1] }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Skills",
  data() {
    interface Skills {
      [key: string]: [string, string, number][];
    }
    const skills: Skills = {
      design: [
        ["Affinity Designer", "affinity_designer.webp", 5],
        ["Affinity Photo", "affinity_photo.webp", 5],
        ["Figma", "figma.webp", 5],
        ["DaVinci Resolve", "davinci_resolve.webp", 2],
        ["Adobe Photoshop", "adobe_photoshop.webp", 2],
      ],
      frontend: [
        ["TypeScript", "typescript.webp", 4],
        ["JavaScript", "javascript.webp", 4],
        ["Nuxt", "nuxt.webp", 4],
        ["Vue.js", "vue.webp", 4],
        ["Vuex", "vuex.webp", 1],
        ["Vite", "vite.webp", 2],
        ["Webpack", "webpack.webp", 2],
        ["Babel", "babel.webp", 2],
        ["HTML", "html.webp", 5],
      ],
      backend: [
        ["Node.js", "nodejs.webp", 4],
        ["NestJS", "nestjs.webp", 3],
        ["Express", "express.webp", 3],
        ["Deno", "deno.webp", 2],
        ["Bun", "bun.webp", 2],
        ["Python", "python.webp", 4],
        ["Rust", "rust.webp", 1],
        ["C++", "cpp.webp", 1],
        ["C#", "csharp.webp", 1],
        ["Tensorflow", "tensorflow.webp", 2],
        ["PyTorch", "pytorch.webp", 1],
        ["PostgreSQL", "postgresql.webp", 3],
        ["MongoDB", "mongodb.webp", 2],
        ["Git", "git.webp", 3],
      ],
      infrastructure: [
        ["Linux", "linux.webp", 5],
        ["Docker", "docker.webp", 4],
        ["Docker Compose", "docker_compose.webp", 3],
        ["Debian (incl. Ubuntu)", "debian.webp", 4],
        ["RHEL (incl. Fedora)", "rhel.webp", 4],
        ["Arch Linux", "arch.webp", 5],
        ["NixOS", "nixos.webp", 5],
        ["Google Cloud Platform", "google_cloud.webp", 2],
        ["Oracle Cloud Infrastructure", "oracle_cloud.webp", 3],
        ["Netlify", "netlify.webp", 4],
        ["Heroku", "heroku.webp", 2],
        ["Firebase", "firebase.webp", 1],
        ["Supabase", "supabase.webp", 4],
      ],
    };

    const sections: [keyof typeof skills, string][] = [
      ["design", "Design"],
      ["frontend", "Front-end"],
      ["backend", "Back-end"],
      ["infrastructure", "Infrastructure"],
    ];
    return {
      levels: ["Beginner", "Novice", "Intermediate", "Advanced", "Expert"],
      sections,
      skills,
    };
  },
  methods: {
    getImage(name: string) {
      const assets = import.meta.glob("~/assets/**/*", {
        eager: true,
        import: "default",
      });
      return assets[`/assets/icons/apps/${name}`] as string;
    },
  },
});
</script>

<style lang="scss" scoped>
#skills {
  padding: 6rem 8rem;
  background: url("~/assets/images/bg01.jpg") no-repeat center center / cover fixed;
}
</style>
