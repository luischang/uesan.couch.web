<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-layout view="LHh Lpr lFf">
    <q-header
      reveal
      elevated
      class="bg-yellow-7 text-black"
      height-hint="98"
      :class="{ 'header-hidden': headerHidden }"
    >
      <q-toolbar class="body-servicios">
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

    <q-page-container class="contenservico">
      <div class="servicio">
        <div class="item1">
          <h2>Servicios de Coaching</h2>
        </div>
        <RouterLink to="/MarketingService">
        <div class="col-2">
          <q-img src="img_Servicios/administracion.jpg" style="height: 250px; width: 300px; border-radius: 30px;">
            <div class="absolute-full text-subtitle2 flex flex-center">
              Coaching Administración
            </div>
          </q-img>
        </div>
      </RouterLink>
        <RouterLink to="/MarketingService">
        <div class="col-3">
          <q-img src="img_Servicios/contabilidad.jpg" style="height: 250px; width: 300px; border-radius: 30px;">
            <div class="absolute-full text-subtitle2 flex flex-center">
              Coaching Contabilidad
            </div>
          </q-img>
        </div>
      </RouterLink>
        <RouterLink to="/MarketingService">
        <div class="col-4">
          <q-img src="img_Servicios//derecho corporativo.jpg" style="height: 250px; width: 300px; border-radius: 30px;">
            <div class="absolute-full text-subtitle2 flex flex-center">
              Coaching Derecho Corporativo
            </div>
          </q-img>
        </div>
      </RouterLink>
        <RouterLink to="/MarketingService">
        <div class="col-5">
          <q-img src="img_Servicios/finanzas.jpg" style="height: 250px; width: 300px; border-radius: 30px;">
            <div class="absolute-full text-subtitle2 flex flex-center">
              Coaching Finanzas
            </div>
          </q-img>
        </div>
      </RouterLink>
        <RouterLink to="/MarketingService">
        <div class="col-6">
          <q-img src="img_Servicios/logistica.jpg" style="height: 250px; width: 300px; border-radius: 30px;">
            <div class="absolute-full text-subtitle2 flex flex-center">
              Coaching Logistica
            </div>
          </q-img>
        </div>
      </RouterLink>
        <RouterLink to="/MarketingService">
        <div class="col-7">
          <q-img src="img_Servicios/Marketing.png" style="height: 250px; width: 300px; border-radius: 30px;">
            <div class="absolute-full text-subtitle2 flex flex-center">
              Coaching Marketing
            </div>
          </q-img>
        </div>
      </RouterLink>
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
import { defineComponent, ref } from "vue";
export default {
  data() {
    return {
      headerHidden: false,
    };
  },
  mounted() {
    // Agrega un listener para ocultar el header al hacer scroll hacia abajo
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Elimina el listener cuando el componente se destruye
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Si el scroll vertical es mayor a 100px, oculta el header
      this.headerHidden = window.pageYOffset > 100;
    },
  },
};
</script>

<style scoped>
.body-servicios {
  width: 100%;
}
.header-hidden {
  transform: translateY(-100%);
}
.contenservico {
  background-image: url("public/imagenPro/register.png");
  width: 100%;
  height: 90%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: initial;
  background-attachment: fixed;
  background-size: cover;
  padding: 20px;
}

.letra2 {
  width: 30%;
  height: 30%;
  position: absolute;
  left: 270px;
  bottom: 260px;
}

.titulo {
  font-size: 60px;
  margin-left: -10px;
  margin-top: 0px;
}

.servicioscoach {
  position: relative;
  align-items: center;
  margin-left: 3%;
  padding-bottom: 70px;
}
.titulo {
  font-size: 60px;
  margin-left: 10px;
  margin-top: 0px;
}
.servicio h2 {
  padding: 20px;
  font-size: 40px;
  text-align: center;
  padding-right: 270px;
}
.admi :not(.contenservico, .servicio) {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
.admi1 p {
  align-items: center;
}
.cont :not(.contenservico, .servicio) {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
.deCorp:not(.contenservico, .servicio) {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
.Fina:not(.contenservico, .servicio) {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
.logi:not(.contenservico, .servicio) {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
.mark:not(.contenservico, .servicio) {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
.servicio {
  width: 100%;
  height: 90%;
  display: grid;
  padding: 20px;
  grid-template-columns: auto auto auto;
  grid-template-areas:
    "item1 item1 item1"
    "item2 item3 item4"
    "item5 item6 item7";
  gap: 0px;
}
.servicio > div {
  /* border: 1px solid red; */
  padding: 15px 5px;
}

.item1 {
  grid-area: item1;

}
.col-2 img,
.col-3 img,
.col-4 img,
.col-5 img,
.col-6 img,
.col-7 img {
/* Ajusta automáticamente la altura según la proporción de la imagen */
  object-fit: cover;
  display: block;
  border-radius: 30px;

}
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7{
  margin-right: 250px;
  padding-top: 50px;

}

</style>
