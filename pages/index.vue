<template>
  <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <NuxtImg class="max-w-sm rounded-lg shadow-2xl m-8" :src="'/personal/' + data.image"
        alt="Photo of Maciej Błędkowski" />
      <div>
        <h1 class="text-6xl font-bold">
          {{ data.name }}
        </h1>
        <p class="text-2xl">
          {{ data.title }} · <i>{{ data.motto }}</i>
        </p>
        <p class="text-xl">
          {{ data.pronouns }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/data')
</script>
