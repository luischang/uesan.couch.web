<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <div class="burbuu">
    <div class="container">
      <div class="screenn">
        <div class="screenn__content">
          <div class="welcome-container">
            <img class="welcome-image" src="public/logo.png" />
            <p class="welcome-text">Bienvenido!</p>
          </div>
          <form class="loginn">
            <div class="loginn__field">
              <i class="loginn__icon fas fa-user"></i>
              <input
                type="text"
                v-model="correoElectronico"
                class="loginn__input"
                placeholder="Correo"
                name="uname"
                required
              />
            </div>
            <div class="loginn__field">
              <i class="loginn__icon fas fa-lock"></i>
              <input
                v-model="contrasena"
                type="password"
                class="loginn__input"
                placeholder="Contraseña"
                name="psw"
                required
              />
            </div>
            <button class="button loginn__submit" @click="login">
              Ingresar
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div class="social-loginn">
            <input type="checkbox" checked="checked" name="remember" />
            Recordar | ¿No tienes una cuenta?
            <a href="/Register#/Register" class="social-loginn__icon"
              >Regístrate</a
            >
          </div>
        </div>
        <div class="screenn__background">
          <span
            class="screenn__background__shape screenn__background__shape4"
          ></span>
          <span
            class="screenn__background__shape screenn__background__shape3"
          ></span>
          <span
            class="screenn__background__shape screenn__background__shape2"
          ></span>
          <span
            class="screenn__background__shape screenn__background__shape1"
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

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      correoElectronico: "",
      contrasena: "",
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
          setTimeout(() => {
            // Verificar si el correo electrónico es "@admin"
            if (response.data.idTipo === 1) {
              this.$router.push("/intCouch");
            } else {
              this.$router.push("/intEmprendedor");
            }
          }, 170);
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
.burbuu {
  position: relative;
  overflow: hidden;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("public/imagenPro/register.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: initial;
  background-attachment: fixed;
  background-size: cover;
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

.screenn {
  background: linear-gradient(90deg, #bb9221, #f0b923);
  position: relative;
  height: 470px;
  width: 300px;
  box-shadow: 0px 0px 50px #ad871f;
  animation: containerFadeIn 1.1s ease-in-out forwards;
}

.screenn__content {
  z-index: 1;
  position: relative;
}

.screenn__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}

.screenn__background__shape {
  transform: rotate(45deg);
  position: absolute;
}

.screenn__background__shape1 {
  height: 520px;
  width: 520px;
  background: #fff;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
}

.screenn__background__shape2 {
  height: 220px;
  width: 220px;
  background: #ecc24e;
  top: -172px;
  right: 0;
  border-radius: 32px;
}

.screenn__background__shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #f3c853, rgb(219, 179, 68));
  top: -24px;
  right: 0;
  border-radius: 32px;
}

.screenn__background__shape4 {
  height: 400px;
  width: 200px;
  background: #d6ae3e;
  top: 420px;
  right: 50px;
  border-radius: 60px;
}

.loginn {
  width: 325px;
  padding: 30px;
}

.loginn__field {
  padding: 20px 0px;
  position: relative;
}
.loginn__icon {
  position: absolute;
  top: 30px;
  color: #f2c037bb;
}
.loginn__input {
  border: none;
  border-bottom: 2px solid #f2c037;
  background: none;
  padding: 10px;
  padding-left: 18px;
  font-weight: 700;

  width: 75%;
  transition: 0.2s;
}

.loginn__input:active,
.loginn__input:focus,
.loginn__input:hover {
  outline: none;
  border-bottom-color: #f2c037;
}

.loginn__submit {
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
  color: #c2970a;
  box-shadow: 0px 2px 20px #f2c037;
  cursor: pointer;
  transition: 0.3s;
}

.loginn__submit:active,
.loginn__submit:focus,
.loginn__submit:hover {
  border-color: #946f10;
  outline: none;
}

.button__icon {
  font-size: 20px;
  margin-left: auto;
  color: #f2c037;
}

.social-loginn {
  position: absolute;
  height: 45px;
  width: 150px;
  text-align: center;
  top: 380px;
  left: 80px;
  color: #ffffff;
}

.social-loginn__icon {
  position: absolute;
  left: 120px;
  color: #ffffff;

  text-decoration: none;
  text-shadow: 0px 0px 20px #f2c037;
}

.social-loginn__icon:hover {
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
