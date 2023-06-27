<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-layout view="LHh Lpr lFf">
    <q-header reveal elevated class="bg-yellow-7 text-black" height-hint="98" :class="{ 'header-hidden': headerHidden } ">
      <q-toolbar class="" >
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
            <img  class="let" src="public/imagenPro/letra2.png" alt=".png">

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
    <h2>Servicios de  Coaching</h2>
    <table>
      <tr>
        <td>
          <img class="admi" src="img_Servicios/administracion.jpg" />
          <p class="pAdmi">Coaching Administración</p>
        </td>
        <td>
          <img class="cont" src="img_Servicios/contabilidad.jpg" />
          <p class="pCont">Coaching Contabilidad</p>
        </td>
        <td>
          <img class="deCorp" src="img_Servicios//derecho corporativo.jpg" />
          <p>Coaching Derecho Corporativo</p>
        </td>
      </tr>
      <tr>
        <td>
          <img class="Fina" src="img_Servicios/finanzas.jpg" />
          <p>Coaching Finanzas</p>
        </td>
        <td>
          <img class="logi" src="img_Servicios/logistica.jpg" />
          <p>Coaching Logistica</p>
        </td>
        <td>
          <img class="mark" src="img_Servicios/Marketing.png" />
          <p>Coaching Marketing</p>
        </td>
      </tr>
    </table>
  </div>
</q-page-container>



    <q-footer reveal elevated class="bg-yellow-7  text-black">
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
      headerHidden: false
    };
  },
  mounted() {
    // Agrega un listener para ocultar el header al hacer scroll hacia abajo
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // Elimina el listener cuando el componente se destruye
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Si el scroll vertical es mayor a 100px, oculta el header
      this.headerHidden = window.pageYOffset > 100;
    }
  }
};
</script>

<style scoped>
.header-hidden {
  transform: translateY(-100%);
}
.contenservico{

  background-image: url("public/imagenPro/register.png");
  width: 100%;
  height: auto;
  background-size:contain;
  background-repeat: no-repeat;
  background-position:initial;
  background-attachment: fixed;
  background-size: cover;


}

.letra2{
  width: 30%;
  height: 30%;
  position:absolute;
  left: 270px;
  bottom: 260px;
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
.titulo {
  font-size: 60px;
  margin-left: 10px;
  margin-top: 0px;
}
.servicio h2 {
  padding: 20px;
  font-size: 40px;
  text-align: center;
}
.admi {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
.admi1 p {
  align-items: center;
}
.cont {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
.deCorp {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
.Fina {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
.logi {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
.mark {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
table {
  margin-left: 15%;
  padding-bottom: 40px;
}
table p {
  text-align: center;
}
table tr td p {
  font-size: 20px;
  margin-left: 50px;
}
table tr td img {
  margin-right: 90px;
}
p{
  color: black;
}

</style>
