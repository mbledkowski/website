<template>
  <h1 v-if="subtitle === undefined">{{ title }}</h1>
  <h1 v-else>
    {{ title }} · <b class="semi">{{ subtitle }}</b>
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Titlebar",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped>
h1 {
  grid-column: 1 / 3;
  padding-bottom: 4rem;
  @apply text-3xl text-white;
  b {
    font-weight: 600;
  }
}
</style>
