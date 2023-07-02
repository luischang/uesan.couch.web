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
            <div class="coach-data">
              <p>Tarifa por hora: {{ coach.tarifaHora }}</p>
              <p>Nombre del usuario: {{ coach.idPersonaNavigation.nombre }}</p>
              <p>
                Apellido del usuario: {{ coach.idPersonaNavigation.apellido }}
              </p>
            </div>
          </q-btn>
          <div v-if="coaches.length === 0">
            <p>No se encontraron datos de coach.</p>
          </div>
        </div>
        <q-dialog v-model="modalOpen">
          <q-card>
            <div class="card-img">
              <q-img class="img-fluid" />
            </div>

            <q-card-section>
              <div class="card-title">
                <p>Tarifa por hora: {{ selectedCoach.tarifaHora }}</p>
                <p>
                  Nombre del usuario:
                  {{ selectedCoach.idPersonaNavigation.nombre }}
                </p>
                <p>
                  Apellido del usuario:
                  {{ selectedCoach.idPersonaNavigation.apellido }}
                </p>
              </div>
            </q-card-section>

            <q-card-actions>
              <q-btn class="btn" label="elegir coach" @click="trackDelivery" />
            </q-card-actions>
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
  },
  data() {
    return {
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
        },
      ], // ID de servicio que quieres consultar
    };
  },
  methods: {
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
      var url = `http://localhost:5083/api/Coach/100`;
      var token = JSON.parse(localStorage.getItem("userResult")).token;
      console.log("Token: " + token);
      axios
        .get(url, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          console.log(response);
          console.log(JSON.stringify(response.data));
          this.coaches = [
            {
              idCoach: response.data.idCoach,
              idPersonaNavigation: response.data.idPersonaNavigation,
              idServicioNavigation: response.data.idServicioNavigation,
              tarifaHora: response.data.tarifaHora,
            },
          ];
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
  -webkit-user-select: none;
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
</style>
