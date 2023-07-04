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
        <q-route-tab to="/login" label="Iniciar sesión" />
        <q-route-tab to="/Register" label="Registrarse" />
        <q-route-tab to="/Servicios" label="Servicios" />
        <q-route-tab to="/Comunidad" label="Comunidad" />
        <q-route-tab to="/QuienesSomos" label="Quienes Somos" />
        <q-route-tab to="/planPagos" label="prueba de sebas" />
        <q-route-tab to="/Inicio" label="Inicio" />
      </q-tabs>
    </q-header>

    <q-page-container class="conti">
      <body>
        <div class="container">
          <div class="description">
            <h2>Coaching de Finanzas</h2>
            <h6>
              ¡Obtén el asesoramiento financiero necesario para optimizar tus decisiones económicas.!
            </h6>
            <p>
              Ya sea que necesites mejorar la gestión de tu flujo de efectivo,
              elaborar presupuestos efectivos o tomar decisiones de inversión inteligentes,
              nuestro servicio de coaching de finanzas te brinda las herramientas y
              conocimientos necesarios para alcanzar tus objetivos financieros.
            </p>
            <q-btn
            class="button bg-green"
              style="margin-left: 45%;"
              label="Pedir Asesoramiento"
              @click="navigateToNextPage('1005')"
            />
            <p>
              Contamos con un equipo de expertos en finanzas dispuestos a ayudarte a comprender conceptos financieros complejos y
              aplicar estrategias efectivas para mejorar la salud financiera de tu empresa o tus finanzas personales.
            </p>
          </div>
          <div class="image">
            <q-img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Marketing_Mix_4P.svg/278px-Marketing_Mix_4P.svg.png"
              alt="Marketing"
            />
            <p>Imagen referencial de Finanzas</p>
          </div>
        </div>
      </body>
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
import { ref } from "vue";

export default {
  methods: {
    navigateToNextPage(idServicio) {
      // Redirigir a la siguiente página con el parámetro idServicio en la URL
      this.$router.push({ name: "ElecCoach", params: { idServicio } });
    },
  },
};
</script>

<style scoped>
.description h2{
  text-align: center;
  padding-top: 40px;
}
.description h6{
  text-align: center;
  padding-bottom: 40px;
}
description p{
  text-align:justify;
  padding-bottom: 40px;
  width:70px;
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
ody {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  display: flex;
  align-items: center;
}

.description {
  flex: 1;
}

.button {
  margin-top: 10px;
}

.image {
  width: 200px;
  margin-left: 20px;
}
</style>
