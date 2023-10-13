<template>
  <div>{{ posts }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Blog",
  setup() {
    const posts = ref([]);
    fetch("https://dev.to/api/articles?username=mbled")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        posts.value = data;
      });
    return { posts };
  },
});
</script>
