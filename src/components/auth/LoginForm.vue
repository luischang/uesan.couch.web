<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <div class="burbu">
    <button
      class="retrocederrr"
      href="#"
      onclick="history.back(); return false;"
    >
      &larr; Volver
    </button>
    <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form class="login">
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input
                type="text"
                v-model="correoElectronico"
                class="login__input"
                placeholder="Correo"
                name="uname"
                required
              />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input
                v-model="contrasena"
                type="password"
                class="login__input"
                placeholder="Contraseña"
                name="psw"
                required
              />
            </div>
            <button class="button login__submit" @click="login">
              Log In Now
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div class="social-login">
            <input type="checkbox" checked="checked" name="remember" />
            Remember me | ¿No tienes una cuenta?
            <a href="/Register#/Register" class="social-login__icon"
              >Regístrate</a
            >
          </div>
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      correoElectronico: "",
      contraseña: "",
    };
  },
  methods: {
    login: function () {
      var url = "http://localhost:5083/api/Usuarios/SignIn";
      var data = {
        correoElectronico: this.correoElectronico,
        contrasena: this.contrasena,
      };
      axios
        .post(url, data)
        .then((response) => {
          console.log("Aquí va la respuesta " + JSON.stringify(response));
          localStorage.setItem("userResult", JSON.stringify(response.data));
          this.$q.notify({
            message: "Inicio de sesión correcta",
            color: "positive",
            position: "bottom",
            timeout: 3000,
          });
          this.$router.push("/");
        })
        .catch((error) => {
          console.log("Ocurrió un error " + error);
          localStorage.removeItem("userResult");
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

function goBack() {
  window.history.back();
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
.burbu {
  display: grid;
  grid-template-rows: 1fr 10rem auto;
  min-height: vh;
  grid-template-areas: "main" "." "footer";
  overflow-x: hidden;
  overflow-y: hidden;

  background-image: url("https://www.equiposytalento.com/contenido/noticias/cursocoahing943.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-family: "Open Sans", sans-serif;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(94vh - 5rem); /* Resta la altura del pie de página */
}
.screen {
  background: linear-gradient(90deg, #042e5a71, #041629ef);
  position: relative;
  height: 470px;
  width: 300px;
  box-shadow: 0px 0px 5px #083e777e;
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
  background: #0f386352;
  top: -172px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #0531617c, #021d3ac0);
  top: -24px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape4 {
  height: 400px;
  width: 200px;
  background: #0f386381;
  top: 420px;
  right: 50px;
  border-radius: 60px;
}

.login {
  width: 325px;
  padding: 30px;
  padding-top: 156px;
}

.login__field {
  padding: 20px 0px;
  position: relative;
}
.login__icon {
  position: absolute;
  top: 30px;
  color: #021d3a;
}
.login__input {
  border: none;
  border-bottom: 2px solid #021d3a;
  background: none;
  padding: 10px;
  padding-left: 18px;
  font-weight: 700;
  width: 75%;
  transition: 0.2s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: #103257;
}

.login__submit {
  background: #fff;
  margin-top: 22px;
  margin-left: 19px;
  padding: 16px 30px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  width: 65%;
  color: #021d3a;
  box-shadow: 0px 2px 10px #021d3a;
  cursor: pointer;
  transition: 0.3s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: #151168;
  outline: none;
}

.button__icon {
  font-size: 20px;
  margin-left: auto;
  color: #021d3a;
}

.social-login {
  position: absolute;
  height: 45px;
  width: 150px;
  text-align: center;
  top: 415px;
  left: 80px;
  color: #ffffff;
}

.social-login__icon {
  position: absolute;
  left: 140px;
  color: #ffffff;
  text-decoration: none;
  text-shadow: 0px 0px 8px #1e1697;
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

  color: #021d3a;
  /* sss */
  background: #fff;

  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;

  box-shadow: 0px 2px 10px #021d3a;
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
