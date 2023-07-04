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
      <q-card>
        Confirmar
        <div>¿Desea confirmar la compra?</div>
        <div>
          <button @click="endModal(coach)">Sí, confirmo</button>
          <button @click="closeModal(coach)">No, quiero regresar</button>
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

export default {
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
  },
  mounted() {
    this.getIdTipoFromLocalStorage();
  },
  data() {
    return {
      modalOpen: false,
      resultadoMultiplicacion: 0,
      nombre: "",
      nombreServicio: "",
      apellido: "",
      // ID de servicio que quieres consultar
    };
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
  padding: 20px;
  border-radius: 10px;
}

.confirmar-compra button {
  padding: 10px;
  margin: 5px 15px;
}
</style>
