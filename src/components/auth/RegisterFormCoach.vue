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
            <p class="welcome-text">Registro de Coach</p>
          </div>
          <form class="login">
            <div class="login__field">
              <div class="column">
                <i class="login__icon fas fa-user"></i>
                <q-input class="login__input" v-model="Usuarios.nombre" filled type="text" label="Nombre" standout="bg-late text-black"  required/>
              </div>
              <div class="column">
                <i class="login__icon fas fa-address-book"></i>
                <q-input class="login__input" v-model="Usuarios.apellido" filled type="text" label="Apellido" standout="bg-late text-black"  required/>
              </div>
            </div>

            <div class="login__field">
              <div class="column">
                <i class="login__icon fas fa-male"></i>
                <q-select
                  label="Género"
                  color="black"
                  options-selected-class="text-deep-orange"
                  class="login__input"
                  v-model="Usuarios.genero"
                  :options="generoOptions"
                  placeholder="Género"
                  filled
                  required
                />
              </div>

              <div class="column">
                <i class="login__icon fas fa-phone-alt"></i>
                <q-input class="login__input" v-model="Usuarios.nroContacto" filled type="number" label="N° celular" standout="bg-late text-black" min="0" @keydown="validarEntradas" :maxlength="9" required/>
              </div>
            </div>
            <div class="login__field">
              <div class="column">
                <i class="login__icon fas fa-mail-bulk"></i>
                <q-input name="email" id="email" class="login__input" v-model="Usuarios.correoElectronico" filled type="text" label="CorreoElectronico" standout="bg-late text-black"  required/>
              </div>
              <div class="column">
                <i class="login__icon fas fa-lock" style="margin-top: 10px;"></i>
                <q-input style="margin-top: 11px;margin-right: 20px;" required v-model="Usuarios.contrasena" filled :type="isPwd ? 'password' : 'text'" label="Contraseña" req>
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
                <!-- <q-input name="psw" id="psw" class="login__input" v-model="" filled type="password" label="Contraseña" standout="bg-late text-black"  required/> -->
              </div>
            </div>
            <!---===========================================================================-->
            <div class="login__field">
              <div class="q-gutter-md">
                <q-input style="margin-top: -219px; margin-right: -180px"  class="login__inputGenero" v-model="Coach.tarifaHora" filled type="number" label="TarifaHora" standout="bg-late text-black" min="1" max="100" @keydown="validarEntrada" required/>
              </div>

              <!-- <div class="q-gutter-md">
                <q-input
                  class="login__inputGenero"
                  type="text"
                  v-model="Coach.idPersona"
                  placeholder="IdPersona"
                  style="margin-top: -180px; margin-left: 60px; width: 100px"
                  required
                >
                </q-input>
              </div> -->

              <div class="q-pa-md login__inputGenero">
                <div class="q-gutter-xm">
                  <q-select
                    filled
                    rounded
                    standout
                    transition-show="scale"
                    transition-hide="scale"
                    v-model="Coach.idServicio "
                    :options="options"
                    label="especialidad"
                    style="
                      margin-top: -230px;
                      margin-left: -340px;
                      width: 300px;
                    "
                    emit-value
                    map-options
                  />
                </div>
              </div>
            </div>

            <!---===========================================================================-->

            <div class="social-login" style="margin-top: 140px;">
              <input type="checkbox" id="acepto-terminos" required />
              <label for="acepto-terminos"
                ><strong
                  >Al crear una cuenta, aceptas nuestros términos y
                  condiciones</strong
                ><a href="src\pages\terminos.html">Terms & Privacy</a>.</label
              >
            </div>
            <q-btn
            style="margin-top: -99px; margin-left: 490px;"
              class="button login__submit"
              @click="signUps"
            label="Registrar datos"
            to="/intCoach"
             />
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

    <button
      class="retrocederrr"
      href="#"
      onclick="history.back(); return false;"
    >
      &larr; Volver
    </button>
  </div>
</template>

<style scoped>
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
  border-radius: 10px;
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
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.welcome-text {
  font-size: 24px;
  color: #1101018e;
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
  height: 650px;
  width: 850px;
  box-shadow: 0px 0px 50px #ad871f;
  animation: containerFadeIn 1.1s ease-in-out forwards;
  border-radius: 10px;
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
  background: #d8cece;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
  height: 220px;
  width: 220px;
  background: #d6ae3e;
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
  padding: 34px;
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
  align-items: center;
  top: 30px;
  color: #f2c037bb;
  margin-right: 160px;
}
.login__input {
  border: none;
  background: none;
  padding: 10px;
  padding-left: 18px;
  font-weight: 700;
  align-items: center;
  flex: 1;
  margin-right: 10px;
  width: 75%;
  transition: 0.2s;
}
.login__inputGenero {
  border: none;
  border-bottom: 2px solid #f2c037;
  background: none;
  padding: 10px;
  padding-left: 0px;
  font-weight: 600;
  flex: 1;
  margin-left: 470px;
  margin-top: -117px;
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
  margin-top: 50px;
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
  top: 380px;
  left: 40px;
  color: #160505;
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
import { ref } from "vue";

export default {
  name: "RegisterFormCoach",

  data() {
    return {
      model: ref(null),
      Coach: {

        idPersona: "",
        tarifaHora: "",
        isActive: true,
        idServicio: "",
      },

      Usuarios: {

        nombre: "",
        apellido: "",
        genero: "",
        nroContacto: "",
        correoElectronico: "",
        contrasena: "",
        idTipoNavegation: 1,
        isActive: true,
      },
      generoOptions: ["Femenino", "Masculino"],

      options: [
        {
          label: "Administración",
          value: "1",
        },
        {
          label: "Marketing",
          value: "2",
        },
        {
          label: "Derecho Corporativo",
          value: "1002",
        },
        {
          label: "Contabilidad",
          value: "1003",
        },
        {
          label: "Logistica",
          value: "1004",
        },
        {
          label: "Finanzas",
          value: "1005",
        },
      ],
    };
  },
  methods: {
    signUps() {

      var urlUsuarios = "http://localhost:5083/api/Usuarios/SignUpCoach";
      var urlCoach = "http://localhost:5083/api/Coach";

      axios
        .post(urlUsuarios, this.Usuarios)
        .then((response) => {
          var generatedId = response.data;
          console.log("Valor capturado: " + generatedId);
          this.Coach.idPersona = generatedId; // Utilizar el valor capturado en el atributo idPersona

          return axios.post(urlCoach, this.Coach); // Devolver la segunda solicitud POST
        })
        .then((response) => {
          console.log("Aquí va la respuesta " + JSON.stringify(response));
          this.$q.notify({
            message: "En hora buena! Tu cuenta ha sido creada con éxito. Bienvenido a nuestra comunidad!",
            color: "positive",
            position: "bottom",
            timeout: 3000,
          });
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log("Ocurrió un error " + error);
          this.$q.notify({
            message: "No se ingresaron datos",
            color: "negative",
            position: "top",
            timeout: 3000,
          });
          this.$router.push("/RegisterCoach")
        });

    },
    validarEntrada(event) {

    const tecla = event.key.toLowerCase();

    // Verificar si la tecla presionada es "e"
    if (tecla === "e" || tecla === "-") {
      event.preventDefault();
      return false;
    }
    },
    validarEntradas(event) {
    const tc = event.key;
    const tecla = event.key.toLowerCase();

    // Verificar si la tecla presionada es "e"
    if (tecla === "e" || tecla === "-") {
      event.preventDefault(); // Prevenir la acción predeterminada de la tecla
      return false; // Evitar que se ingrese la tecla "e"
    }

    if(/\d/.test(tc) && this.Usuarios.nroContacto.length >= 9){
      event.preventDefault();
    }
    }

  },


};

</script>
