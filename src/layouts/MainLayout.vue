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

    <q-page-container class="conti">
      <div>
        <Brindar />
      </div>

      <div style="text-align: center">
        <h2>Historias de exito</h2>
        <!--
Forked from:
https://quasar.dev/vue-components/card#example--expandable
-->
        <div id="q-app" style="min-height: 100vh">
          <div
            class="q-pa-md row items-start q-gutter-md"
            style="margin-left: 40px; margin-top: 80px"
          >
            <q-card class="my-card" flat bordered>
              <q-img src="public\imagenes\gerson.jpg"></q-img>

              <q-card-section>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>
            </q-card>
            <q-card class="my-card" flat bordered>
              <q-img src="public\imagenes\Melva.jpg"></q-img>

              <q-card-section>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>
            </q-card>
            <q-card class="my-card" flat bordered>
              <q-img src="public\imagenes\sebastian.jpg"></q-img>

              <q-card-section>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>
            </q-card>
            <q-card class="my-card" flat bordered>
              <q-img src="public\imagenes\team.jpg"></q-img>

              <q-card-section>
                <div class="text-caption text-grey">Logro cumplir con sus metas</div>
              </q-card-section>
            </q-card>

            <q-card class="my-card" flat bordered>
              <q-img src="public\imagenes\jose.jpg"></q-img>
              <q-card-section>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut .
                </div>
              </q-card-section>
            </q-card>

          </div>
        </div>
      </div>

      <div class="servicioscoach">
        <h2>Servicios de Coaching</h2>
        <table>
          <tr>
            <q-td>
              <RouterLink to="/AdministracionService">
                <img class="admi" src="img_Servicios/administracion.jpg" />
                <p class="pAdmi">Coaching Administración</p>
              </RouterLink>
            </q-td>
            <td>
              <RouterLink to="/ContabilidadService">
                <img class="cont" src="img_Servicios/contabilidad.jpg" />
                <p class="pCont">Coaching Contabilidad</p>
              </RouterLink>
            </td>
            <td>
              <RouterLink to="/Derecho_CorporativoService">
                <img
                  class="deCorp"
                  src="img_Servicios//derecho corporativo.jpg"
                />
                <p>Coaching Derecho Corporativo</p>
              </RouterLink>
            </td>
          </tr>
          <tr>
            <td>
              <RouterLink to="/FinanzasService">
                <img class="Fina" src="img_Servicios/finanzas.jpg" />
                <p>Coaching Finanzas</p>
              </RouterLink>
            </td>
            <td>
              <RouterLink to="/LogisticaService">
                <img class="logi" src="img_Servicios/logistica.jpg" />
                <p>Coaching Logistica</p>
              </RouterLink>
            </td>
            <td>
              <RouterLink to="/MarketingService">
                <img class="mark" src="img_Servicios/Marketing.png" />
                <p>Coaching Marketing</p>
              </RouterLink>
            </td>
          </tr>
        </table>
      </div>
    </q-page-container>

    <q-footer reveal elevated class="bg-yellow-7 text-black">
  <q-toolbar>
    <q-toolbar-title style="text-align: center">
      <div>Emprende Facil &copy; 2023</div>
    </q-toolbar-title>
    <div class="q-ml-md">
      <a href="https://www.facebook.com/tu_pagina_de_facebook" target="_blank">
        <q-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/220px-2021_Facebook_icon.svg.png" class="q-mr-sm" />
      </a>
      <a href="https://twitter.com/tu_cuenta_de_twitter" target="_blank">
        <q-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/320px-Logo_of_Twitter.svg.png" class="q-mr-sm" />
      </a>
      <a href="https://www.instagram.com/tu_cuenta_de_instagram" target="_blank">
        <q-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/150px-Instagram_logo_2022.svg.png" />
      </a>
    </div>
  </q-toolbar>
</q-footer>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import Brindar from "src/components/Brindar.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    Brindar,
  },
});
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
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
  margin-left: 10px;
  margin-top: 0px;
}

.histo {
  top: 20px;
  bottom: 20px;
  background-color: aqua;
}
.servicioscoach {
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  bottom: 160px;
}
.conti {
  background-image: url("public/imagenPro/register.png");
  width: 100%;
  height: auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: initial;
  background-attachment: fixed;
  background-size: cover;
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
p {
  color: black;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
</style>
