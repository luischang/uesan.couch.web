<template>
<!--
Forked from:
https://quasar.dev/vue-components/carousel#example--multi-image-slides
-->
<div id="q-app" style="min-height: 100vh;">
<div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="amber"
      navigation
      padding
      arrows
      height="400px"
      class="bg-grey-9 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg"></q-img>
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg"></q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg"></q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/cat.jpg"></q-img>
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png"></q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/material.png"></q-img>
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png"></q-img>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</div>
</template>

<script>
const { ref } = Vue

const app = Vue.createApp({
  setup () {
    return {
      slide: ref(1)
    }
  }
})

app.use(Quasar, { config: {} })
app.mount('#q-app')
</script>

<style>
/* Estilos adicionales si los necesitas */
</style>
