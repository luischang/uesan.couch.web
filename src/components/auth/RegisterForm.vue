<template>
  <div class="container">
    <h5>Register</h5>
    <p>Please fill in this form to create an account.</p>
    <hr />

    <label for="nombre"><b>Nombre</b></label>
    <input
      type="text"
      v-model="Usuarios.nombre"
      placeholder="Nombre"
      required
    />
    <label for="apellido"><b>Apellido</b></label>
    <input
      type="text"
      v-model="Usuarios.apellido"
      placeholder="Apellido"
      required
    />
    <label for="genero"><b>Genero</b></label>
    <input
      type="text"
      v-model="Usuarios.genero"
      placeholder="Genero"
      required
    />
    <label for="nroContacto"><b>NroContacto</b></label>
    <input
      type="text"
      v-model="Usuarios.nroContacto"
      placeholder="N° Contacto"
      required
    />
    <label for="correoElectronico"><b>CorreElectronico</b></label>
    <input
      type="text"
      v-model="Usuarios.correoElectronico"
      placeholder="Email"
      name="email"
      id="email"
      required
    />
    <label for="contraseña"><b>Contraseña</b></label>
    <input
      type="contraseña"
      v-model="Usuarios.contrasena"
      placeholder="Enter Password"
      name="psw"
      id="psw"
      required
    />
    <hr />
    <p>
      By creating an account you agree to our <a href="#">Terms & Privacy</a>.
    </p>
    <button @click="signUp" class="registerbtn">Register</button>
  </div>

  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</template>

<style>
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
