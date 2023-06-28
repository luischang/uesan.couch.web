<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-layout view="LHh Lpr lFf">
    <q-header reveal elevated class="bg-yellow-7 text-black" height-hint="98">
      <q-toolbar class="">
        <q-toolbar-title
          class="titulo"
          style="
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
              sans-serif;
          "
        >
          <q-avatar
            style="
              width: auto;
              height: 120px;
              border-radius: 10%;
              margin-top: 15px;
              left: 50px;
            "
          >
            <img src="public/logo.png" />
          </q-avatar>
          <div class="letra2">
            <img class="let" src="public/imagenPro/letra2.png" alt=".png" />
          </div>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/login" @click="reloadPage" label="Iniciar sesión" />
        <q-route-tab to="/Register" label="Registrarse" />
        <q-route-tab to="/Servicios" label="Servicios" />
        <q-route-tab to="/Servicios" label="Comunidad" />
        <q-route-tab to="/QuienesSomos" label="Quienes Somos" />
        <q-route-tab to="/ElecCoach" label="prueba de sebas" />
        <q-route-tab to="/Inicio" label="Inicio" />
      </q-tabs>
    </q-header>


    <q-page-container class="contComuni">
      <h2>Nuestra Comunidad</h2>
      <div class="q-pa-md">

    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      infinite
      :autoplay="autoplay"
      swipeable
      animated
      control-color="amber"
      navigation
      padding
      arrows
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      height="450px"
      class="bg-white shadow-2 rounded-borders q-vertical-top-50px"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/material.png" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="card">
    <h3>Equipo</h3>
    <img src="public\imagenPro\equipo.png" alt=".png">
    <p>Estamos compuesto por expertos en diversas áreas relacionadas con los negocios, como estrategia, marketing, finanzas etc. Cada miembro del equipo aporta sus habilidades y experiencia para proporcionar una amplia gama de conocimientos y herramientas a los emprendedores que buscan crecer y prosperar en sus proyectos.</p>
  </div>

  <div class="card">
    <h3>Mastermind</h3>
    <img src="public\imagenPro\pngwing.com (2).png" alt=".png">
    <p>Están verdaderamente comprometidos con el éxito y el bienestar de cada miembro. Están disponibles para brindar apoyo adicional, asesoramiento y orientación personalizada cuando sea necesario. Su pasión por ver a los participantes alcanzar su máximo potencial es evidente en cada interacción.</p>
  </div>

  <div class="card">
    <h3>Experiencia</h3>
    <img src="public\imagenPro\experi.png" alt=".png">
    <p>En cada interacción con nosotros, te garantizamos una atención al cliente excepcional. Nuestro equipo está aquí para escucharte, comprenderte y resolver tus dudas o problemas de manera eficiente. Queremos que te sientas valorado y apoyado en cada paso del camino.</p>
  </div>

  </div>

    </q-page-container>



    <q-footer reveal elevated class="bg-yellow-7 text-black">
      <q-toolbar>
        <q-toolbar-title style="text-align: center">
          <div>Emprende Facil &copy; 2023</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>

<style scoped>
.card {
      display: inline-block;
      width: 300px;
      margin: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      text-align: center;
      padding: 0.9px;
    }

    .card img {
      width: 100%;
      height: auto;
     margin-top: 0%;

    }

    .card h3 {
      margin-top: 10px;
    }

    .card p {
      margin-bottom: 10px;
      justify-content:center;
    }


q-carousel{
  margin-bottom: 40px;
}

.contComuni{
background-image: url("public/imagenPro/comu.png");
background-repeat: no-repeat;
background-size: cover;
align-items: center;
text-align: center;
width:100%;
height: 100%;
background-position:-490px -0.10px;

}
.contComuni h2{
  margin-top: 40px;
  font-size: 60px;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #000000;
  text-align: center;
  margin-bottom: 160px;
}

.letra2 {
  width: 30%;
  height: 30%;
  position: absolute;
  left: 270px;
  bottom: 260px;
}

.titulo {
  font-size: 60px;
  margin-left: 10px;
  margin-top: 0px;
}
</style>
