<template>
  <q-layout view="LHh Lpr lFf">
    <q-header reveal elevated class="bg-yellow-7 text-black" height-hint="98">
      <q-toolbar class="">
        <q-toolbar-title class="titulo">
          <q-avatar class="logo-avatar">
            <img src="public/logo.png" alt="Logo" />
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
          <div class="q-gutter-sm" style="max-width: 300px; margin-left: 20px">
            <q-input
      outlined
      v-model="inputValue"
      type="number"
      label="Ingresa un valor numérico"
    />

          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="card-title">Por Hora:</div>
            <div class="card-description">
              <p>Max: 4h</p>
              <p>
                1) Desarrollo de habilidades empresariales: <br />
                Mejora de habilidades clave para el éxito empresarial.
              </p>

              <p>
                2) Desarrollo de la visión y estrategia empresarial: <br />
                Definición de metas y planificación estratégica.
              </p>

              <p>
                3) Gestión del cambio y superación de obstáculos: <br />
                Manejo de desafíos y desarrollo de resiliencia.
              </p>

              <p>
                4) Desarrollo de habilidades de gestión: <br />
                Mejora de la gestión empresarial y organizativa.
              </p>

              <p>
                5) Estrategias de networking y establecimiento de relaciones:
                <br />
                Creación de conexiones y colaboraciones efectivas.
              </p>

              <p>
                6) Gestión del equilibrio entre trabajo y vida personal: <br />
                Encontrar un equilibrio saludable en la vida emprendedora.
              </p>
            </div>
            <div class="card-input" style="display: flex">
              <div style="width: 9%">
                <q-input
      outlined
      :value="result"
      type="text"
      label="Resultado"
      readonly
    />
              </div>
            </div>

            <div class="card-button">
              <q-btn
                to="/moduloPago"
                label="Seleccionar"
                type="submit"
                color="secundary"
              />
            </div>
          </div>

          <div class="card">
            <div class="card-title">Mensual</div>
            <div class="card-description">
              <p>Max: 20h</p>
              <p>
                1) Desarrollo de habilidades empresariales: <br />
                Mejora de habilidades clave para el éxito empresarial.
              </p>

              <p>
                2) Desarrollo de la visión y estrategia empresarial: <br />
                Definición de metas y planificación estratégica.
              </p>

              <p>
                3) Gestión del cambio y superación de obstáculos: <br />
                Manejo de desafíos y desarrollo de resiliencia.
              </p>

              <p>
                4) Desarrollo de habilidades de gestión: <br />
                Mejora de la gestión empresarial y organizativa.
              </p>

              <p>
                5) Estrategias de networking y establecimiento de relaciones:
                <br />
                Creación de conexiones y colaboraciones efectivas.
              </p>

              <p>
                6) Gestión del equilibrio entre trabajo y vida personal: <br />
                Encontrar un equilibrio saludable en la vida emprendedora.
              </p>

              <p>Sesiones Grabadas</p>
            </div>

            <div class="card-input" style="display: flex">
              <div style="width: 9%">
                <p>Total a Pagar</p>
              </div>
              <div style="width: -9px; margin-top: 14px">
                <q-input
      outlined
      :value="result"
      type="text"
      label="Resultado"
      readonly
    />
              </div>
            </div>

            <div class="card-button">
              <q-btn
                to="/moduloPago"
                label="Seleccionar"
                type="submit"
                color="secundary"
              />
            </div>
          </div>
        </div>
      </body>

    </q-page-container>
    <q-btn
      class="retrocederrr"
      href="#"
      onclick="history.back(); return false;"
   />

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
  data() {
    return {
      inputValue: 0,
      result: 0
    };
  },
  watch: {
    inputValue() {
      this.calculateResult();
    }
  },
  methods: {
    calculateResult() {
      const value = parseFloat(this.inputValue);
      if (!isNaN(value)) {
        this.result = value * 2;
      } else {
        this.result = '';
      }
    }
  }
};
</script>

<style scoped>
.retrocederrr {
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 10px;
  background-color: #ccc;

  color: #c2970a;
  /* sss */
  background: #fff;

  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;

  box-shadow: 0px 2px 10px #f2c037;
  cursor: pointer;
  transition: 0.3s;
  animation: containerFadeIn 1.1s ease-in-out forwards;
}
.container {
  margin: 20px;
}

.q-input__label {
  margin-bottom: 10px;
}

.result-label {
  margin-top: 20px;
}
.q-pa-md {
  margin-left: 40px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 0 200px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  height: auto;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-description {
  margin-bottom: 10px;
}

.card-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-pagar p {
  margin: 0;
}

.total-pagar-input input {
  margin-top: 14px;
}

.card-button {
  background-color: #4caf50;
  color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
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
.card-description p {
  justify-content: baseline;
}

.card-button {
  background-color: #4caf50;
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

.logo-avatar {
  width: auto;
  height: 120px;
  border-radius: 10%;
  margin-top: 15px;
  margin-left: 50px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
</style>
