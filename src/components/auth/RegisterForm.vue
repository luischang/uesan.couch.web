<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <div class="burbu">
    <div class="container">
      <div class="screen">
        <div class="screen__content">
          <div class="welcome-container">
            <img class="welcome-image" src="public/logo.png" />
            <p class="welcome-text">Registro de Emprendedor</p>
          </div>
          <form class="login">
            <div class="login__field">
              <div class="column">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  v-model="Usuarios.nombre"
                  class="login__input"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div class="column">
                <i class="login__icon fas fa-address-book"></i>
                <input
                  class="login__input"
                  type="text"
                  v-model="Usuarios.apellido"
                  placeholder="Apellido"
                  required
                />
              </div>
            </div>
            <div class="login__field">
              <div class="column">
                <i class="login__icon fas fa-male"></i>
                <input
                  class="login__input"
                  type="text"
                  v-model="Usuarios.genero"
                  placeholder="Genero"
                  required
                />
              </div>
              <div class="column">
                <i class="login__icon fas fa-phone-alt"></i>
                <input
                  type="password"
                  class="login__input"
                  v-model="Usuarios.nroContacto"
                  placeholder="N° Contacto"
                  required
                />
              </div>
            </div>
            <div class="login__field">
              <div class="column">
                <i class="login__icon fas fa-mail-bulk"></i>
                <input
                  type="text"
                  v-model="Usuarios.correoElectronico"
                  placeholder="Email"
                  name="email"
                  class="login__input"
                  id="email"
                  required
                />
              </div>
              <div class="column">
                <i class="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  class="login__input"
                  v-model="Usuarios.contrasena"
                  placeholder="Contraseña"
                  name="psw"
                  id="psw"
                  required
                />
              </div>
            </div>
            <div class="social-login">
              <input type="checkbox" id="acepto-terminos" />
              <label for="acepto-terminos"
                ><strong
                  >Al crear una cuenta, aceptas nuestros términos y
                  condiciones</strong
                ><a href="src\pages\terminos.html">Terms & Privacy</a>.</label
              >
            </div>
            <button class="button login__submit" @click="signUp">
              Registrar
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        <div class="screen__background">
          <span
            class="screen__background__shape screen__background__shape4"
          ></span>
          <span
            class="screen__background__shape screen__background__shape3"
          ></span>
          <span
            class="screen__background__shape screen__background__shape2"
          ></span>
          <span
            class="screen__background__shape screen__background__shape1"
          ></span>
        </div>
      </div>
    </div>
    <!-- partial:index.partial.html -->
    <button
      class="retrocederrr"
      href="#"
      onclick="history.back(); return false;"
    >
      &larr; Volver
    </button>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
.burbu {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr 10rem auto;
  min-height: 100vh;
  grid-template-areas: "welcome" "main" "." "footer";
  overflow: hidden;
  background-image: url("public/imagenPro/register.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: initial;
  background-attachment: fixed;
  background-size: cover;
  /* Reflejar horizontalmente */
}

.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 7rem;
  margin-top: 2rem;
  margin-bottom: -2.5rem;
}

.welcome-image {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.welcome-text {
  font-size: 24px;
  color: #5f59598e;
  text-transform: uppercase;
  font-weight: 700;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.name-container {
  display: flex;
}

.screen {
  background: linear-gradient(90deg, #bb9221, #f0b923);
  position: relative;
  height: 530px;
  width: 500px;
  box-shadow: 0px 0px 50px #ad871f;
  animation: containerFadeIn 1.1s ease-in-out forwards;
}

.screen__content {
  z-index: 1;
  position: relative;
}

.screen__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}

.screen__background__shape {
  transform: rotate(45deg);
  position: absolute;
}

.screen__background__shape1 {
  height: 520px;
  width: 520px;
  background: #fff;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
  height: 220px;
  width: 220px;
  background: #ecc24e;
  top: -172px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #f3c853, rgb(219, 179, 68));
  top: -24px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape4 {
  height: 400px;
  width: 200px;
  background: #d6ae3e;
  top: 420px;
  right: 50px;
  border-radius: 60px;
}

.login {
  width: 480px;
  padding: 30px;
}

.login__field {
  padding: 20px 0px;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.column {
  flex: 1;
  display: flex;
  align-items: center;
}
.login__icon {
  position: absolute;
  top: 30px;
  color: #f2c037bb;
  margin-right: 160px;
}
.login__input {
  border: none;
  border-bottom: 2px solid #f2c037;
  background: none;
  padding: 10px;
  padding-left: 18px;
  font-weight: 700;

  flex: 1;
  margin-right: 10px;
  width: 75%;
  transition: 0.2s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: #f2c037;
}

.login__submit {
  background: #fff;
  margin-top: 70px;
  margin-left: 70px;
  padding: 16px 30px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  width: 65%;
  color: #c2970a;
  box-shadow: 0px 2px 20px #f2c037;
  cursor: pointer;
  transition: 0.3s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: #946f10;
  outline: none;
}

.button__icon {
  font-size: 20px;
  margin-left: auto;
  color: #f2c037;
}

.social-login {
  position: absolute;
  height: 45px;
  width: 400px;
  text-align: center;
  top: 360px;
  left: 40px;
  color: #5c5a5a;
}

.social-login__icon {
  position: absolute;
  left: 120px;
  color: #ffffff;

  text-decoration: none;
  text-shadow: 0px 0px 20px #f2c037;
}

.social-login__icon:hover {
  transform: scale(1.1);
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
