<template>
  <div v-for="post in posts"><img :src="post.imgUrl" :alt="'Image for &quot;' + post.title + '&quot; article'" />
    <p>{{ post.title }}</p>
    <div>{{ post.preview }} <a :href="post.url">Read More</a></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

function isShitpost(post: { tag_list: string[] }) {
  for (const tag of post.tag_list) {
    if (tag === "shitpost") {
      return false
    }
  }
  return true
}

export default defineComponent({
  name: "Blog",
  setup() {
    const posts: Ref<{ imgUrl: string, title: string, preview: string, url: string }[]> = ref([]);
    fetch("https://dev.to/api/articles?username=mble")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.filter((post: { tag_list: string[] }) => isShitpost(post))
      })
      .then((postsObject) => {
        for (const post of postsObject) {
          posts.value.push({
            imgUrl: post.cover_image,
            title: post.title,
            preview: post.description,
            url: post.url,
          })
          console.log(posts, post)
        }
      })
    return { posts };

  },
});
</script>
