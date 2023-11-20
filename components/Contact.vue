<template>
  <div id="contact">
    <Titlebar title="Contact" />
    <article>
      <section v-for="section in sections" :key="section[0]">
        <h2>{{ section[1] }}</h2>
        <div class="badges">
          <div v-for="(contact, index) in contactOptions[section[0]]" :key="index" class="box badge">
            <img :src="getImage(namesAndIcons[contact.type][1])" :alt="namesAndIcons[contact.type][0] + ' icon'" />
            <div class="details">
              <p>{{ namesAndIcons[contact.type][0] + " · " }}<b>{{ contact.name }}</b></p>
              <p><b>{{ contact.value }}</b></p>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Contact",
  data() {
    const namesAndIcons = {
      email: ["Email", "mail.webp"],
      instagram: ["Instagram", "instagram.webp"],
      mastodon: ["Masnodon", "mastodon.webp"],
      linkedin: ["LinkedIn", "linkedin.webp"],
      github: ["GitHub", "github.webp"],
      gitlab: ["GitLab", "gitlab.webp"],
      youtube: ["YouTube", "youtube.webp"]
    }
    const contactOptions: { email: { type: keyof typeof namesAndIcons, name: string, value: string }[], socialMedia: { type: keyof typeof namesAndIcons, name: string, value: string }[] } = {
      email: [{
        type: "email",
        name: "Job offers",
        value: "job@mble.dk"
      },
      {
        type: "email",
        name: "General",
        value: "pub@mble.dk"
      }],
      socialMedia: [
        {
          type: "instagram",
          name: "Personal",
          value: "@mbledkowski"
        },
        {
          type: "instagram",
          name: "Graphic design",
          value: "@hqpixl"
        },
        {
          type: "mastodon",
          name: "Personal",
          value: "@mble@toot.io"
        },
        {
          type: "linkedin",
          name: "Professional",
          value: "in/mbled"
        },
        {
          type: "github",
          name: "Code",
          value: "@mbledkowski"
        },
        {
          type: "gitlab",
          name: "Code",
          value: "@mbled"
        },
        {
          type: "youtube",
          name: "Tutorial videos",
          value: "@hq265"
        }
      ]
    }
    const sections: [keyof typeof contactOptions, string][] = [
      ["email", "Email"],
      ["socialMedia", "Social media"]
    ]
    return { namesAndIcons, contactOptions, sections }
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
})
</script>

<style lang="scss">
#contact {
  min-height: 100svh;
  padding: 6rem 8rem;
  background: url("~/assets/images/bg02.jpg") no-repeat center center / cover fixed;
}
</style>
