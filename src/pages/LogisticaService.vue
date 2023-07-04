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
            <h2>Coaching de Logística</h2>
            <h6>
              ¡Obtén el asesoramiento especializado para optimizar tus operaciones logísticas.!
            </h6>
            <p>
              Ya sea que necesites mejorar la gestión de inventario, optimizar rutas de distribución o
              implementar estrategias de cadena de suministro más eficientes,
              nuestro servicio de coaching de logística te brinda las herramientas y
              conocimientos necesarios para alcanzar tus objetivos logísticos.
            </p>
            <q-btn
            class="button bg-green"
              style="margin-left: 45%;"
              label="Pedir Asesoramiento"
              @click="navigateToNextPage('1005')"
            />
            <p>
              Contamos con un equipo de expertos en logística dispuestos a ayudarte a identificar oportunidades de mejora y
              aplicar las mejores prácticas en la gestión de tu cadena de suministro.
              Nuestro enfoque personalizado se adapta a las necesidades de tu negocio, ya sea pequeño o grande.
            </p>
          </div>
          <div class="image">
            <q-img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Marketing_Mix_4P.svg/278px-Marketing_Mix_4P.svg.png"
              alt="Marketing"
            />
            <p>Imagen referencial de Logistica</p>
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
