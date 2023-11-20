<template>
  <div id="blog">
    <Titlebar title="Blog" />
    <section class="blog-post" v-for="post in posts">
      <img :src="post.imgUrl" :alt="'Image for &quot;' + post.title + '&quot; article'" />
      <div class="box">
        <p>{{ post.title }}</p>
        <div>{{ post.preview }} <a :href="post.url">Read More</a></div>
      </div>
    </section>
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
        }
      })
    return { posts };

  },
});
</script>

<style lang="scss" scoped>
#blog {
  min-height: 100svh;
  padding: 6rem 8rem;
  background: url("~/assets/images/bg02.jpg") no-repeat center center / cover fixed;

  .blog-post {
    display: flex;
    flex-flow: row nowrap;
    margin: 0 1rem 1rem 0;

    >img {
      height: calc(21rem / 2);
      width: calc(50rem / 2);
      border-radius: 20px 0 0 20px;
    }

    .box {
      border-left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      width: 100%;
      color: white;

      >p,
      >div>a {
        font-weight: 600;
      }
    }
  }
}
</style>
