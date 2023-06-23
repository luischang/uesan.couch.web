<template>
  <div class="burbu">
    <div class="container">
      <div class="todo">
      <h5><strong>REGISTRO DE USUARIO</strong></h5>
      <p><strong>Por favor, complete este formulario para crear una cuenta de Usuario.</strong></p>

      <label for="nombre"><b><strong>Nombre</strong></b></label>
      <input type="text" v-model="Usuarios.nombre" placeholder="Nombre" required />

      <label for="apellido"><b><strong>Apellido</strong></b></label>
      <input type="text" v-model="Usuarios.apellido" placeholder="Apellido" required />

      <label for="genero"><b><strong>Genero</strong></b></label>
      <input type="text" v-model="Usuarios.genero" placeholder="Genero" required />

      <label for="nroContacto"><b><strong>NroContacto</strong></b></label>
      <input type="text" v-model="Usuarios.nroContacto" placeholder="N° Contacto" required />

      <label for="correoElectronico"><b><strong>CorreElectronico</strong></b></label>
      <input type="text" v-model="Usuarios.correoElectronico" placeholder="Email" name="email" id="email" required />

      <label for="contraseña"><b><strong>Contraseña</strong></b></label>
      <input type="contraseña" v-model="Usuarios.contrasena" placeholder="Enter Password" name="psw" id="psw" required />

      <hr />

      <div class="terminos-condiciones">
        <input type="checkbox" id="acepto-terminos">
        <label for="acepto-terminos"><strong>Al crear una cuenta, aceptas nuestros términos y condiciones</strong><a  href="src\pages\terminos.html">Terms & Privacy</a>.</label>
      </div>

      <button @click="signUp" class="registerbtn"><strong>Registrar</strong></button>


      <div class="containersignin">
      <p><strong>¿Ya tienes una cuenta?</strong> <router-link to="/login">Sign in</router-link>.</p>
      </div>
  </div>
  </div>
  </div>
</template>


<style>
input{
  border-radius: 10px;
}
b{
  color: rgb(231, 214, 214);
  font-weight:bold;

}
p{
  color: rgb(235, 214, 187);
}
h5{
  color: red;
}
.todo{
  background-color: rgba(4, 38, 41,0.8);
  padding: 15px;
  border-radius: 10px;
  width: 35%;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  opacity: 0.9;
  z-index: 2;
}
.terminos-condiciones {
  color:rgb(231, 214, 214);
  margin-top: 0px;
  margin-bottom: 40px;
}

.terminos-condiciones input[type="checkbox"] {
  display: none;
}

.terminos-condiciones label:before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #999;
  border-radius: 3px;
  margin-right: 5px;
  vertical-align: middle;
}

.terminos-condiciones input[type="checkbox"]:checked + label:before {
  background-color: #007bff;
  border-color: #007bff;
}

.terminos-condiciones label {
  cursor: pointer;
}
.containersignin{
  display: grid;
  justify-content: center;
  align-items: center;
}
.burbu {
  background-image: url("https://www.equiposytalento.com/contenido/noticias/cursocoahing943.png");
  display: block;
}
* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {

  padding: 16px;
  display: grid;
  justify-content: center;
  align-items: center;
  animation: containerFadeIn 1.1s ease-in-out forwards;
}

/* Full-width input fields */
input[type="text"],
input[type="contraseña"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1eded;
}

input[type="text"]:focus,
input[type="contraseña"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #831818;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
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
</style>

<script>
import axios from "axios";

export default {
  name: "RegisterForm",

  data() {
    return {
      Usuarios: {
        nombre: "",
        apellido: "",
        genero: "",
        nroContacto: "",
        correoElectronico: "",
        contrasena: "",
        idTipo: 2,
        isActive: true,
      },
    };
  },
  methods: {
    signUp() {
      //console.log("Aquí registrare....." + JSON.stringify(this.user))
      var url = "http://localhost:5083/api/Usuarios/SignUp";

      axios
        .post(url, this.Usuarios)
        .then((response) => {
          console.log("Aquí va la respuesta " + JSON.stringify(response));
          this.$q.notify({
            message: "Registro exitoso",
            color: "positive",
            position: "bottom",
            timeout: 3000,
          });
          this.$router.push("/");
        })
        .catch((error) => {
          console.log("Ocurrió un error " + error);
          this.$q.notify({
            message: "Ocurrió un error",
            color: "negative",
            position: "top",
            timeout: 3000,
          });
        });
    },

  },

  };


</script>
