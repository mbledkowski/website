<template>
  <section id="timeline" class="grid grid-cols-3">
    <div v-for="(item, index) in timeline" :key="index"
         :class="`card bg-base-100 w-auto my-8 shadow-xl ${index % 2 === 0 ? 'col-start-2 col-end-4' : 'col-start-1 col-end-3'} flex flex-row max-h-[420px]`">
      <div class="max-w-[50%] grid grid-cols-3 grid-rows-3" v-if="item.imgs" >
        <a v-for="(img, index) in item.imgs" :key="img" :href="'/personal/'+img" target="_blank" :class="index === 0 ? 'col-start-1 col-end-3 row-start-1 row-end-4' : 'col-start-3 col-end-4'">
          <figure class="rounded-xl max-h-[100%]">
            <img :src="'/personal/' + img"  alt="Image of {{item.name}}">
          </figure>
        </a></div>
      <div class="card-body">
        <h2 class="card-title">{{ item.name }}
          <span :title="new Date(item.date).toString()">({{ new Date(item.date).getFullYear()
            }})</span>
        </h2>
        <p>{{ item.desc }}</p>
        <a v-if="item.link" :href="item.link" target="_blank">
        <p>See more
          <Icon name="material-symbols:open-in-new" />
        </p>
      </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps(['timeline'])
props.timeline.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
</script>
