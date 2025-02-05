<template>
  <section id="projects" class="grid grid-cols-3">
    <div v-for="(project, index) in projects" :key="index"
      :class="`card bg-base-100 w-auto my-8 shadow-xl ${index % 2 === 0 ? 'col-start-2 col-end-4' : 'col-start-1 col-end-3'} flex flex-row max-h-[420px]`">
      <a v-if="project.imgs" v-for="img in project.imgs" :key="img" :href="'/personal/'+img" target="_blank" class="max-w-[50%]">
        <figure class="rounded-xl max-h-[100%]">
          <img :src="'/personal/' + img"  alt="Image of {{project.name}}">
        </figure>
      </a>
      <div class="card-body">
        <h2 class="card-title">{{ project.name }}
          <span :title="new Date(project.lastCommit).toString()">({{ new Date(project.lastCommit).getFullYear()
            }})</span>
        </h2>
        <p>{{ project.desc }}</p>
        <div class="flex flex-row justify-between">
        <div class="card-actions">
          <div class="badge badge-outline" v-for="tech in project.tech">{{ tech }}</div>
        </div>
        <a :href="project.link" target="_blank">
          <p>See more
            <Icon name="material-symbols:open-in-new" />
          </p>
        </a></div>
      </div>
    </div>
    <button @click="expand()" class="btn btn-primary col-start-2 col-end-3">
      <p v-if="!more">Show more</p>
      <p v-else>Show less</p>
    </button>
  </section>
</template>

<script setup lang="ts">
const props = defineProps(['projects'])
props.projects.sort((a, b) => new Date(b.lastCommit).getTime() - new Date(a.lastCommit).getTime())

const projectsFiltered = computed(() => props.projects.filter(project => project.prime))

const projects = useState("projects", () => projectsFiltered.value)

const more = useState("more", () => false)

function expand() {
  more.value = !more.value
  console.log(more.value)
  if (more.value) {
    projects.value = props.projects
  } else {
    projects.value = projectsFiltered.value
  }
}
</script>
