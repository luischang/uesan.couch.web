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
        <q-route-tab to="/Comunidad" label="Comunidad" />
        <q-route-tab to="/QuienesSomos" label="Quienes Somos" />
        <q-route-tab to="/Inicio" label="Inicio" />
      </q-tabs>
    </q-header>

    <q-page-container class="conti">
      <body>

      <div class="q-pa-sm">
        <div class="q-gutter-sm " style="max-width: 300px; margin-left: 20px;">
          <q-input rounded standout v-model="text" label="Ingrese n° horas" />
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="card-title">Por Hora:</div>
          <div class="card-description">
            <p>Max: 4h</p>
            <p>1) Desarrollo de habilidades empresariales: <br> Mejora de habilidades clave para el éxito empresarial.</p>

            <p>2) Desarrollo de la visión y estrategia empresarial: <br> Definición de metas y planificación estratégica.</p>

            <p>3) Gestión del cambio y superación de obstáculos: <br> Manejo de desafíos y desarrollo de resiliencia.</p>

            <p>4) Desarrollo de habilidades de gestión: <br> Mejora de la gestión empresarial y organizativa.</p>

            <p>5) Estrategias de networking y establecimiento de relaciones: <br> Creación de conexiones y colaboraciones efectivas. </p>

            <p>6) Gestión del equilibrio entre trabajo y vida personal: <br> Encontrar un equilibrio saludable en la vida emprendedora.</p>
          </div>
          <div class="card-input">
          <div style="width: 50%; margin-right: 10px;">
            <p>Total a Pagar</p>
            <input type="text" placeholder="El total es" v>
          </div>
          </div>
          <div class="card-button">
            <q-btn label="Seleccionar" type="submit" color="secundary"/>
          </div>
        </div>

        <div class="card">
          <div class="card-title">Mensual</div>
          <div class="card-description">
            <p>Max: 20h</p>
            <p>1) Desarrollo de habilidades empresariales: <br> Mejora de habilidades clave para el éxito empresarial.</p>

            <p>2) Desarrollo de la visión y estrategia empresarial: <br> Definición de metas y planificación estratégica.</p>

            <p>3) Gestión del cambio y superación de obstáculos: <br> Manejo de desafíos y desarrollo de resiliencia.</p>

            <p>4) Desarrollo de habilidades de gestión: <br> Mejora de la gestión empresarial y organizativa.</p>

            <p>5) Estrategias de networking y establecimiento de relaciones: <br> Creación de conexiones y colaboraciones efectivas. </p>

            <p>6) Gestión del equilibrio entre trabajo y vida personal: <br> Encontrar un equilibrio saludable en la vida emprendedora.</p>

            <p>Sesiones Grabadas</p>
          </div>

          <div class="card-input">
            <div style="width: 50%;margin-right: 10px;">
            <p>Total a Pagar</p>
            <div>
            <input type="text" placeholder="El total es">
            </div>
          </div>
          </div>
          <div class="card-button">
            <q-btn label="Seleccionar" type="submit" color="secundary"/>
          </div>
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
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref('')
    }
  }
}
</script>

<style scoped>
.q-pa-md{
  margin-left: 40px;
}
.card-container {
      display: flex;
      padding-left: 200px;
      padding-right: 200px;

    }

    .card {
      flex: 1;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
      margin-right: 60px;

      height: auto;
    }

    .card:last-child {
      margin-right: 0;
    }

    .card-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .card-description {
      margin-bottom: 10px;
    }
    .card-description p{
      justify-content: baseline;
    }


    .card-button {
      background-color: #4CAF50;
      color: white;
      border: none;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin-bottom: 10px;
      cursor: pointer;
    }

    .hours-input {
      margin-top: 50px;
      margin-bottom: 20px;
      margin-left: 500px;

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


.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
</style>
