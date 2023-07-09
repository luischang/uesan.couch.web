<template>
  <q-layout view="LHh Lpr lFf">
    <q-header reveal elevated class="bg-yellow-7 text-black" height-hint="98">
      <q-toolbar class="">
        <q-toolbar-title
          class="titulo"
          style="
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
              sans-serif;
          "
        >
          <q-avatar
            style="
              width: auto;
              height: 120px;
              border-radius: 10%;
              margin-top: 15px;
              left: 50px;
            "
          >
            <img src="public/logo.png" />
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

    <q-page-container>
      <div>
        <h5>Listado de Coaches</h5>
        <div>
          <q-btn
            type="button"
            class="modal-button"
            v-for="coach in coaches"
            :key="coach.idCoach"
            @click="openModal(coach)"
          >
            <div class="cards-coaches">
              <!-- <p>Tarifa por hora: {{ coach.tarifaHora }}</p>
              <p>Nombre del usuario: {{ coach.idPersonaNavigation.nombre }}</p>
              <p>
                Apellido del usuario: {{ coach.idPersonaNavigation.apellido }}
              </p> -->
              <div class="nft">
                <div class="main">
                  <img
                    class="tokenImage"
                    src="https://img.freepik.com/vector-premium/caricatura-joven-anteojos-vector-persona-ilustracion-lindo-macho-retrato_641602-613.jpg?w=2000"
                    alt="NFT"
                  />
                  <h4>{{ coach.idPersonaNavigation.nombre }}</h4>
                  <p class="description">
                    El profesional
                    {{ coach.idPersonaNavigation.nombre }}
                    {{ coach.idPersonaNavigation.apellido }}
                    se destaca muy bien dentro del servicio requerido.
                  </p>
                  <div class="tokenInfo">
                    <div class="price">
                      <p>Price: {{ coach.tarifaHora }} dollars</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-btn>
          <div v-if="coaches.length === 0">
            <p>No se encontraron datos de coach.</p>
          </div>
        </div>
        <q-dialog v-model="modalOpen">
          <q-card class="cards-coaches-container">
            <q-card-section class="cards-coaches">
              <!-- <div class="card-title">
                <p>Tarifa por hora: {{ selectedCoach.tarifaHora }}</p>
                <p>
                  Nombre del usuario:
                  {{ selectedCoach.idPersonaNavigation.nombre }}
                </p>
                <p>
                  Apellido del usuario:
                  {{ selectedCoach.idPersonaNavigation.apellido }}
                </p>
              </div> -->
              <div class="nft">
                <div class="main">
                  <img
                    class="tokenImage"
                    src="https://img.freepik.com/vector-premium/caricatura-joven-anteojos-vector-persona-ilustracion-lindo-macho-retrato_641602-613.jpg?w=2000"
                    alt="NFT"
                  />
                  <h4>{{ selectedCoach.idPersonaNavigation.nombre }}</h4>
                  <p class="description">
                    El profesional
                    {{ selectedCoach.idPersonaNavigation.nombre }}
                    {{ selectedCoach.idPersonaNavigation.apellido }}
                    se destaca muy bien dentro del servicio requerido.
                  </p>
                  <div class="tokenInfo">
                    <div class="price">
                      <p>Price: {{ selectedCoach.tarifaHora }} dollars</p>
                    </div>
                  </div>
                </div>
                <q-card-actions>
                  <q-btn
                    to="/planPagos"
                    class="btn"
                    label="elegir coach"
                    @click="
                      seleccionarCoach(
                        selectedCoach.idCoach,
                        selectedCoach.idServicio,
                        selectedCoach.tarifaHora,
                        selectedCoach.idServicioNavigation.nombreServicio
                      )
                    "
                  />
                </q-card-actions>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
    </q-page-container>

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
  mounted() {
    this.fetchData();
    const seleccionGuardada = localStorage.getItem("coachSeleccionado");
    if (seleccionGuardada) {
      this.coachSeleccionado = JSON.parse(seleccionGuardada);
    }
  },
  data() {
    return {
      coachSeleccionado: [],
      modalOpen: false,
      coaches: [],
      coaches1: [
        {
          idCoach: 90001,
          idPersonaNavigation: {
            nombre: "Messi",
            apellido: "Argentina",
            genero: "1",
            nroContacto: "67864",
            correoElectronico: "messi@argentina.com",
          },
          idServicioNavigation: {
            nombreServicio: "Modelaje",
            isActive: true,
          },
          tarifaHora: 45,
          idServicio: 2123,
        },
      ], // ID de servicio que quieres consultar
    };
  },
  methods: {
    seleccionarCoach(idCoach, idServicio, tarifaHora, nombreServicio) {
      console.log("coachSeleccionado:", this.coachSeleccionado);
      this.guardarSeleccionEnLocalStorage(
        idCoach,
        idServicio,
        tarifaHora,
        nombreServicio
      );
    },
    guardarSeleccionEnLocalStorage(
      idCoach,
      idServicio,
      tarifaHora,
      nombreServicio
    ) {
      const data = {
        idCoach: idCoach,
        idServicio: idServicio,
        tarifaHora: tarifaHora,
        nombreServicio: nombreServicio,
      };
      localStorage.setItem("datosSeleccionados", JSON.stringify(data));
    },
    watch: {
      coachSeleccionado: {
        handler() {
          // No es necesario llamar a esta función aquí
        },
        deep: true,
      },
    },
    openModal(coach) {
      this.selectedCoach = coach;
      this.modalOpen = true;
    },

    trackDelivery() {
      // Implement your track delivery logic here
    },
    fetchData() {
  var idServicio = this.$route.params.idServicio;
  console.log(idServicio);
  var url = `http://localhost:5083/api/Coach/${idServicio}`;

  axios
    .get(url, {})
    .then((response) => {
      console.log(response);
      console.log(JSON.stringify(response.data));
      this.coaches = response.data;
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
},
  },
};
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

.cards-coaches-container {
  background-color: #34495e;
}
.cards-coaches {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  opacity: 90%;
  padding: 0px;
  margin: 10px;
  display: flex;
  width: fit-content;
  height: fit-content;
  overflow: hidden;
  background-color: rgb(22, 20, 24);
  color: #34495e;
}

.nft {
  user-select: none;
  max-width: 300px;
  margin: auto;
  border: 1px solid #ffffff22;
  background-color: #282c34;
  background: linear-gradient(
    0deg,
    rgba(40, 44, 52, 1) 0%,
    rgba(17, 0, 32, 0.5) 100%
  );
  box-shadow: 0 7px 20px 5px #00000088;
  border-radius: 0.7rem;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: 0.5s all;
}

.nft hr {
  width: 100%;
  border: none;
  border-bottom: 1px solid #88888855;
  margin-top: 0;
}

.nft ins {
  text-decoration: none;
}

.nft .main {
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 1rem;
}

.nft .main .tokenImage {
  border-radius: 0.5rem;
  max-width: 100%;
  height: 250px;
  object-fit: cover;
}

.nft .main .description {
  margin: 0.5rem 0;
  color: #a89ec9;
}

.nft .main .tokenInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nft .main .tokenInfo .price {
  display: flex;
  align-items: center;
  color: #ee83e5;
  font-weight: 700;
}

.nft .main .tokenInfo .price ins {
  margin-left: -0.3rem;
  margin-right: 0.5rem;
}

.nft::before {
  position: fixed;
  content: "";
  box-shadow: 0 0 100px 40px #ffffff08;
  top: -10%;
  left: -100%;
  transform: rotate(-45deg);
  height: 60rem;
  transition: 0.7s all;
}

.nft:hover {
  border: 1px solid #ffffff44;
  box-shadow: 0 7px 50px 10px #000000aa;
  transform: scale(1.015);
  filter: brightness(0.8);
}

.nft:hover::before {
  filter: brightness(0.5);
  top: -100%;
  left: 200%;
}
</style>
