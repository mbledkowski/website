<template>
  <div>
    <NuxtPage/>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Maciej Błędkowski's personal website",
  link: [
    {
      rel: "stylesheet",
      href: "/pressgothicpro/stylesheet.css"
    },
    {
      rel: "stylesheet",
      href: "/urwgeometric/stylesheet.css"
    }
  ],
  script: [
    {
      defer: true,
      src: "https://cloud.umami.is/script.js",
      "data-website-id": "0723f2a3-c586-4b4c-b48f-8748aa3d2fb5"
    }
  ]
})
</script>
