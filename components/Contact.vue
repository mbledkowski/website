<template>
  <section id="contact" class="min-h-[50vh] flex justify-center items-center">
    <div class="card bg-base-100 w-96 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Have a job offer?</h2>
        <p class="card-text">
          Send me an email and I'll get back to you as soon as possible.
        </p>
        <div class="card-actions justify-center">
          <a :href="'mailto:' + props.email.address">
            <button class="btn btn-primary">
              <Icon name="fluent-color:mail-32" class="w-[32px] h-[32px]" />
              {{ props.email.address }}
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps(['email']) 
</script>
