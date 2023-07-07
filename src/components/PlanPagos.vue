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
        <q-route-tab to="/login" label="Iniciar sesión" />
        <q-route-tab to="/Register" label="Registrarse" />
        <q-route-tab to="/Servicios" label="Servicios" />
        <q-route-tab to="/Comunidad" label="Comunidad" />
        <q-route-tab to="/QuienesSomos" label="Quienes Somos" />
        <q-route-tab to="/Inicio" label="Inicio" />
      </q-tabs>
    </q-header>

    <q-page-container class="conti">
      <body>
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
              <div class="q-pa-sm">
                <div
                  class="q-gutter-sm"
                  style="max-width: 300px; margin-left: 20px"
                >
                  <q-input
                    outlined
                    v-model="inputValue"
                    type="number"
                    label="Ingresa el número de horas a contratar:"
                  />
                </div>
              </div>
              <div class="card-input">
                <div style="width: 9%">
                  <p>Total a Pagar</p>
                </div>
                <div placeholder="máximo 8 horas">
                  <p>{{ result }}</p>
                </div>
              </div>
            </div>

            <div class="card-button">
              <q-btn
                @click="guardarIdTipoEnLocalStorage(1011)"
                label="Seleccionar"
                type="submit"
                color="secondary"
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
                <p>{{ result2 }}</p>
              </div>
            </div>

            <div class="card-button">
              <q-btn
                @click="
                  () => {
                    guardarIdTipoEnLocalStorage(1010);
                  }
                "
                label="Seleccionar"
                type="submit"
                color="secondary"
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
import axios from "axios";
export default {
  data() {
    return {
      inputValue: 0,
      result: 0,
      result2: 0,
      idTipo: 0,
    };
  },
  mounted() {
    this.cargarDatosSeleccionados();
    this.calculateResult2();
  },
  watch: {
    inputValue(newValue) {
      const value = parseFloat(newValue);
      if (!isNaN(value) && value > 0 && value < 9) {
        this.calculateResult();
        this.result = multiplicarYMostrar(this.inputValue, this.idTipo);
      } else {
        this.result = 0; // O cualquier otro valor predeterminado que desees
      }
    },
  },
  methods: {
    cargarDatosSeleccionados() {
      // Obtener los datos seleccionados del localStorage
      var datosSeleccionados = localStorage.getItem("datosSeleccionados");

      if (datosSeleccionados) {
        // Convertir los datos de texto a objeto JavaScript
        var datos = JSON.parse(datosSeleccionados);

        // Guardar el valor en result2
        this.result2 = datos.tarifaHora * 20;
      } else {
        console.log("No se encontraron datos seleccionados en el localStorage");
      }
    },
    calculateResult() {
      const value = parseFloat(this.inputValue);
      if (!isNaN(value)) {
        this.result = value * 2;
      } else {
        this.result = "";
      }
    },
    calculateResult2() {
      // Obtener los datos seleccionados del localStorage
      var datosSeleccionados = localStorage.getItem("datosSeleccionados");

      if (datosSeleccionados) {
        // Convertir los datos de texto a objeto JavaScript
        var datos = JSON.parse(datosSeleccionados);

        // Calcular el resultado de la multiplicación
        var resultadoMultiplicacion = datos.tarifaHora * 20;

        // Guardar el valor en result2
        this.result2 = resultadoMultiplicacion;
      } else {
        console.log("No se encontraron datos seleccionados en el localStorage");
      }
    },
    guardarIdTipoEnLocalStorage(idTipo) {
      var datosSeleccionados = localStorage.getItem("datosSeleccionados");
      var userResult = localStorage.getItem("userResult"); // Agregar esta línea para obtener los datos de "userResult"

      if (datosSeleccionados && userResult) {
        // Verificar que ambos datos existan en el localStorage
        var datos = JSON.parse(datosSeleccionados);
        if (idTipo == 1011) {
          if (this.result !== 0) {
            // Validar que result sea distinto de 0
            datos.idTipo = idTipo;
            datos.resultadoMultiplicacion = this.result;
            console.log(idTipo);
            localStorage.setItem("datosSeleccionados", JSON.stringify(datos));
            this.$router.push("/moduloPago");
          } else {
            console.log("result es igual a 0. No es válido");
            this.$q.notify({
              message: "Numero de horas incorrecto",
              color: "negative",
              position: "top",
              timeout: 1000,
            });
          }
        } else if (idTipo == 1010) {
          if (this.result2 !== 0) {
            // Validar que result2 sea distinto de 0
            datos.idTipo = idTipo;
            datos.resultadoMultiplicacion = this.result2;
            console.log(idTipo);
            localStorage.setItem("datosSeleccionados", JSON.stringify(datos));
            this.$router.push("/moduloPago");
          } else {
            console.log("result2 es igual a 0. No es válido");
          }
        }
      } else {
        this.$q.notify({
          message: "Debe ingresar con su cuenta",
          color: "negative",
          position: "top",
          timeout: 1000,
        });
        console.log("No hay nada en el localStorage");
      }
    },
  },
};
function multiplicarYMostrar(inputValue) {
  // Obtener los datos seleccionados del localStorage
  var datosSeleccionados = localStorage.getItem("datosSeleccionados");

  if (datosSeleccionados) {
    // Convertir los datos de texto a objeto JavaScript
    var datos = JSON.parse(datosSeleccionados);

    // Obtener el otro parámetro necesario para la multiplicación
    var otroParametro = parseFloat(inputValue);

    // Calcular el resultado de la multiplicación
    var resultadoMultiplicacion = datos.tarifaHora * otroParametro;

    // Actualizar la regla CSS dinámicamente

    datos.resultadoMultiplicacion = resultadoMultiplicacion;

    return resultadoMultiplicacion;
  } else {
    console.log("No se encontraron datos seleccionados en el localStorage");
  }
}
function goBack() {
  window.history.back();
}
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
.q-pa-sm {
  margin: 0 70px;
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
  padding: 0px;
  height: auto;
}

.card-title {
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-description {
  font-family: "Inter", sans-serif;
  margin-bottom: 10px;
  border-top: 1px solid #e0e0e0;
  padding: 2em;
  pointer-events: all;
  overflow: auto;
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
  padding: 30px;
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
  background-color: #4caf4f00;
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
