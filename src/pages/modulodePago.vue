<template>
  <div class="burbuu">
    <div class="card">
      <button class="proceed" @click="openModal(coach)">
        <svg class="sendicon" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
          ></path>
        </svg>
      </button>
      <img
        src="https://seeklogo.com/images/V/VISA-logo-62D5B26FE1-seeklogo.com.png"
        class="logo-card"
      />
      <label>Card number:</label>
      <input
        id="user"
        type="text"
        class="input cardnumber"
        placeholder="1234 5678 9101 1121"
      />
      <label>Name:</label>
      <input class="input name" placeholder="Edgar Pérez" />
      <label class="toleft">CCV:</label>
      <input class="input toleft ccv" placeholder="321" />
    </div>
    <div class="receipt">
      <div class="coontainer">
        <div class="col">
          <p>Cost:</p>
          <p class="cost">${{ resultadoMultiplicacion }}</p>
          <br />
          <p>Name:</p>
          <p class="seller">{{ nombre }} {{ apellido }}</p>
          <p>Fecha</p>
          <p class="seller">{{ fecha }}</p>
        </div>
        <div class="col">
          <p>Curso Suscrito:</p>
          <p class="bought-items">{{ nombreServicio }}</p>
          <br />
        </div>
      </div>
      <p class="comprobe">Esta informacion sera enviada a tu perfil</p>
    </div>
    <q-dialog v-model="modalOpen" class="confirmar-compra">
      <q-card class="confirmar-compra-box">
        <p>Confirmar</p>
        <p>¿Desea confirmar la compra?</p>
        <div>
          <button @click="set_matricula()">Sí, confirmo</button>
          <button style="--c: #f0932b" @click="closeModal(coach)">
            No, quiero regresar
          </button>
        </div>
      </q-card>
    </q-dialog>
    <button
      class="retrocederrr"
      href="#"
      onclick="history.back(); return false;"
    >
      &larr; Volver
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  data() {
    return {
      modalOpen: false,
      resultadoMultiplicacion: 0,
      nombre: "",
      nombreServicio: "",
      apellido: "",
      fecha: "",
      idCoach: "",
      emprendedor: [],
      idPlan: "",
      multiplicador: "",
      idServicio: "",
      isActive: true,
      idPersona: "",
      idEmprendedor: "",

      // ID de servicio que quieres consultar
    };
  },
  methods: {
    getIdTipoFromLocalStorage() {
      var datosSeleccionados = localStorage.getItem("datosSeleccionados");
      var userResult = localStorage.getItem("userResult");
      if (datosSeleccionados) {
        var datos = JSON.parse(datosSeleccionados);
        var datos2 = JSON.parse(userResult);
        this.nombreServicio = datos.nombreServicio;
        this.resultadoMultiplicacion = datos.resultadoMultiplicacion;
        this.nombre = datos2.nombre;
        this.apellido = datos2.apellido;
      } else {
        console.log("No se encontraron datos seleccionados en el localStorage");
      }
    },
    openModal(seguro) {
      this.modalOpen = true;
    },
    closeModal(seguro) {
      this.modalOpen = false;
    },
    endModal(seguro) {
      this.$router.push("/intEmprendedor");
    },
    obtenerFechaActual() {
      fetch("https://worldtimeapi.org/api/timezone/America/Lima")
        .then((response) => response.json())
        .then((data) => {
          const fechaActual = new Date(data.datetime);
          const fechaFormateada = fechaActual.toLocaleDateString("es-PE");
          this.fecha = fechaFormateada;
          localStorage.setItem("fecha", JSON.stringify(data.datetime));
        })
        .catch((error) => {
          console.log("Error al obtener la fecha actual:", error);
        });
    },
    set_matricula: function () {
      this.datosSeleccionados = JSON.parse(
        localStorage.getItem("datosSeleccionados")
      );
      this.userResult = JSON.parse(localStorage.getItem("userResult"));
      this.idDetCoachServicio = JSON.parse(
        localStorage.getItem("idDetCoachServicio")
      );
      this.idEmprendedor = JSON.parse(localStorage.getItem("idEmprendedor"));
      this.fecha = JSON.parse(localStorage.getItem("fecha"));
      this.idPago = JSON.parse(localStorage.getItem("idPago"));
      this.idPersona = this.userResult.idPersona;
      this.idEmprendedor = this.idEmprendedor.idEmprendedor;

      console.log("IDPERSONA", this.idPersona);
      // Verificar si los valores están definidos y no son nulos
      if (
        this.datosSeleccionados &&
        this.datosSeleccionados.idCoach &&
        this.datosSeleccionados.idTipo &&
        this.datosSeleccionados.resultadoMultiplicacion &&
        this.datosSeleccionados.idServicio
      ) {
        // Realizar el resto del código aquí
        this.idCoach = this.datosSeleccionados.idCoach;
        this.idTipo = this.datosSeleccionados.idTipo;
        this.resultadoMultiplicacion =
          this.datosSeleccionados.resultadoMultiplicacion;
        this.idServicio = this.datosSeleccionados.idServicio;
        var data = {
          idCoach: this.idCoach,
          idPlan: this.idTipo,
          multiplicador: this.resultadoMultiplicacion,
          idServicio: this.idServicio,
          isActive: true,
        };
        var url = "http://localhost:5083/api/DetalleCouchServicio/Insert";
        axios
          .post(url, data)
          .then((response) => {
            console.log("Aquí va la respuesta " + JSON.stringify(response));
            localStorage.setItem(
              "idDetCoachServicio",
              JSON.stringify(response.data)
            );
          })
          .catch((error) => {
            console.log("Ocurrió un error " + error);
          });
      } else {
        // Manejar la situación cuando los valores no son válidos o están indefinidos
        console.log("Los valores no son válidos o están indefinidos");
      }

      if (1 == 1) {
        console.log(this.idPersona);
        var url = `http://localhost:5083/api/Emprendedores/501`;
        axios
          .get(url, {})
          .then((response) => {
            console.log(response);
            console.log(JSON.stringify(response.data));
            this.emprendedor = [
              {
                idEmprendedor: response.data.idEmprendedor,
              },
            ];
            localStorage.setItem(
              "idEmprendedor",
              JSON.stringify(response.data)
            );
          })
          .catch((error) => {
            console.error("Error al obtener los datos:", error);
          });
      }
      console.log(this.idEmprendedor, this.resultadoMultiplicacion);
      if (1 == 1) {
        // Realizar el resto del código aquí
        this.datosSeleccionados = JSON.parse(
          localStorage.getItem("datosSeleccionados")
        );
        this.userResult = JSON.parse(localStorage.getItem("userResult"));
        this.idDetCoachServicio = JSON.parse(
          localStorage.getItem("idDetCoachServicio")
        );
        this.idEmprendedor = JSON.parse(localStorage.getItem("idEmprendedor"));
        this.fecha = JSON.parse(localStorage.getItem("fecha"));
        this.idPago = JSON.parse(localStorage.getItem("idPago"));
        this.idPersona = this.userResult.idPersona;
        this.idEmprendedor = this.idEmprendedor.idEmprendedor;
        this.resultadoMultiplicacion =
          this.datosSeleccionados.resultadoMultiplicacion;
        this.idPago = this.idPago;
        this.idDetCoachServicio = this.idDetCoachServicio;
        var data = {
          idPago: this.idPago,
          idDetCoachServicio: this.idDetCoachServicio,
          nroSolicitudes: this.resultadoMultiplicacion,
        };
        var url = "http://localhost:5083/api/DetallePago/Insert";
        axios
          .post(url, data)
          .then((response) => {
            console.log("Aquí va la respuesta " + JSON.stringify(response));
            localStorage.clear();
            console.log("LocalStorage borrado.");
            this.$router.push("/intEmprendedor");
          })
          .catch((error) => {
            console.log("Ocurrió un error " + error);
          });
      } else {
        // Manejar la situación cuando los valores no son válidos o están indefinidos
        console.log("Los valores no son válidos o están indefinidos");
      }
      if (1 == 1) {
        // Realizar el resto del código aquí
        this.datosSeleccionados = JSON.parse(
          localStorage.getItem("datosSeleccionados")
        );
        this.userResult = JSON.parse(localStorage.getItem("userResult"));
        this.idDetCoachServicio = JSON.parse(
          localStorage.getItem("idDetCoachServicio")
        );
        this.idEmprendedor = JSON.parse(localStorage.getItem("idEmprendedor"));
        this.fecha = JSON.parse(localStorage.getItem("fecha"));
        this.idPago = JSON.parse(localStorage.getItem("idPago"));
        this.idPersona = this.userResult.idPersona;
        this.idEmprendedor = this.idEmprendedor.idEmprendedor;
        this.resultadoMultiplicacion =
          this.datosSeleccionados.resultadoMultiplicacion;
        var data = {
          idEmprendedor: this.idEmprendedor,
          fechaRegistro: this.fecha,
          totalPago: this.resultadoMultiplicacion,
          isActive: true,
        };
        var url = "http://localhost:5083/api/Pago/Insert";
        axios
          .post(url, data)
          .then((response) => {
            console.log("Aquí va la respuesta " + JSON.stringify(response));
            localStorage.setItem("idPago", JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log("Ocurrió un error " + error);
          });
      } else {
        // Manejar la situación cuando los valores no son válidos o están indefinidos
        console.log("Los valores no son válidos o están indefinidos");
      }
    },
  },
  mounted() {
    this.getIdTipoFromLocalStorage();
    this.obtenerFechaActual();
  },
};

function goBack() {
  window.history.back();
}
</script>
<style scoped>
card-title {
  margin-bottom: unset;
}
.card-title p {
  color: rgb(29, 226, 226);
  font-weight: 900;
  font-size: 30px;
  margin-bottom: unset;
}
.card-text p {
  color: rgb(226, 213, 26);
  font-size: 25px;
  text-align: center;
  padding: 3vh 0;
  font-weight: lighter;
}
.btn {
  width: 100%;
  background-color: rgb(226, 223, 29);
  border-color: rgb(223, 226, 29);
  border-radius: 25px;
  color: white;
  font-size: 20px;
}
.btn:focus {
  box-shadow: none;
  outline: none;
  box-shadow: none;
  color: white;
  -webkit-box-shadow: none;
  transition: none;
}
.btn:hover {
  color: white;
}
.coach-data {
  padding: 10px;
  margin-bottom: 10px;
}
.letra2 {
  width: 30%;
  height: 30%;
  position: absolute;
  left: 270px;
  bottom: 260px;
}

.card-title {
  font-size: 2rem;
  margin-bottom: 0;
  font-weight: bold;
  font-family: "IM Fell French Canon SC";
  margin-bottom: 17px;
}
.card-text {
  text-align: center;
  padding: 1rem 2.6578rem;
  font-size: 0.8rem;
  color: rgb(0, 0, 0);
  line-height: 1.4rem;
}

#name {
  font-size: 0.8rem;
  font-weight: bold;
}
#position {
  font-size: 0.7rem;
}

a:hover {
  color: rgb(0, 19, 82);
}
/*sssssssssssssssssssss*/

.user-content p {
  margin-top: 5px;
  font-size: 12px;
}

.titulo {
  font-size: 60px;
  margin-left: 10px;
  margin-top: 0px;
}

.ser {
  align-items: center;
  margin-left: 3%;
  padding-bottom: 70px;
}
@keyframes textFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes containerFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

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

@keyframes textFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes containerFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@import url("https://fonts.googleapis.com/css?family=Work+Sans");
.burbuu {
  position: relative;
  /* overflow: hidden; */
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  background-image: url("public/imagenPro/register.png");
  z-index: -999;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.card {
  background: #16181a;
  border-radius: 14px;
  max-width: 300px;
  display: block;
  margin: auto;
  padding: 60px;
  margin-top: 80px;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 2px 10px 40px black;
  animation: containerFadeIn 1.1s ease-in-out forwards;
  z-index: 99;
}

.logo-card {
  max-width: 50px;
  margin-bottom: 15px;
  margin-top: -19px;
}

label {
  display: flex;
  font-size: 10px;
  color: white;
  opacity: 0.4;
}

input {
  font-family: "Work Sans", sans-serif;
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  color: #dbdce0;
  transition: border-bottom 0.4s;
}
input:focus {
  border-bottom: 1px solid #1abc9c;
  outline: none;
}

.cardnumber {
  display: block;
  font-size: 20px;
  margin-bottom: 8px;
}

.name {
  display: block;
  font-size: 15px;
  max-width: 200px;
  float: left;
  margin-bottom: 15px;
}

.toleft {
  float: left;
}
.ccv {
  width: 50px;
  margin-top: -5px;
  font-size: 15px;
}

.receipt {
  background: #dbdce0;
  border-radius: 10px;
  padding: 5%;
  padding-top: 180px;
  max-width: 600px;
  max-height: 650px;
  display: block;
  margin: auto;
  animation: containerFadeIn 1.1s ease-in-out forwards;
  margin-top: -150px;
  z-index: -999;
  margin-bottom: 80px;
  position: relative;
}

.col {
  width: 50%;
  float: left;
}
.bought-item {
  background: #f5f5f5;
  padding: 2px;
}
.bought-items {
  margin-top: -20px;
}

.cost {
  color: #3a7bd5;
}
.seller {
  color: #3a7bd5;
}
.description {
  font-size: 13px;
}
.price {
  font-size: 10px;
}
.comprobe {
  text-align: center;
}
.proceed {
  position: absolute;
  transform: translate(300px, 10px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  left: 18rem;
  background: #1abc9c;

  border: none;
  color: white;
  transition: box-shadow 0.2s, transform 0.4s;
  cursor: pointer;
  animation: containerFadeIn 1.1s ease-in-out forwards;
}
.proceed:active {
  outline: none;
}
.proceed:focus {
  outline: none;
  box-shadow: inset 0px 0px 5px white;
}
.sendicon {
  filter: invert(100%);
  padding-top: 2px;
}

@media (max-width: 600px) {
  .proceed {
    transform: translate(250px, 10px);
  }
  .col {
    display: block;
    margin: auto;
    width: 100%;
    text-align: center;
  }
}

.confirmar-compra {
  height: 100vh;
  margin: 0;
  display: grid;
  place-content: center;
  grid-auto-flow: column;
  gap: 40px;
  background: #f2dca2;
}

.confirmar-compra-box {
  width: 600px;
  height: 250px;
  padding: 30px;
  border-radius: 10px;
}

.confirmar-compra-box p {
  font-family: system-ui, sans-serif;
  font-size: 35px;
  font-weight: bold;
}
.confirmar-compra-box p:first-child {
  margin: 5px 150px;
}
.confirmar-compra-box p:not(p:first-child) {
  margin: 0 10px;
}
.confirmar-compra-box > div {
  margin: 10px 22px;
  padding: 0px;
  display: inline-block;
}

.confirmar-compra-box > div > button {
  margin: 0 10px;
}
.confirmar-compra button {
  --c: #f9ca24; /* the color*/

  box-shadow: 0 0 0 0.1em inset var(--c);
  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: var(--_g) calc(var(--_p, 0%) - 100%) 0%,
    var(--_g) calc(200% - var(--_p, 0%)) 0%,
    var(--_g) calc(var(--_p, 0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p, 0%)) 100%;
  background-size: 50.5% calc(var(--_p, 0%) / 2 + 0.5%);
  outline-offset: 0.1em;
  transition: background-size 0.4s, background-position 0s 0.4s;
}
.confirmar-compra button:hover {
  --_p: 100%;
  transition: background-position 0.4s, background-size 0s;
}
.confirmar-compra button:active {
  box-shadow: 0 0 9e9Q inset #0009;
  background-color: var(--c);
  color: #fff;
}
.confirmar-compra button {
  font-family: system-ui, sans-serif;
  font-size: 24px;
  cursor: pointer;
  padding: 0.1em 0.6em;
  font-weight: bold;
  border: none;
}
</style>
