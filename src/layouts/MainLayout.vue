<template>
  <q-layout view="LHh Lpr lFf">
    <q-header reveal elevated class="bg-amber-6 text-black" height-hint="98">
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
              width: 90px;
              height: 90px;
              border-radius: 10%;
              margin-top: 15px;
            "
          >
            <img src="public/logo.png" />
          </q-avatar>
          EmprendeFacil.
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/login" label="Iniciar sesión" />
        <q-route-tab to="/Register" label="Registrarse" />
        <q-route-tab to="/Servicios" label="Servicios" />

        <q-route-tab to="/QuienesSomos" label="Quienes Somos" />
        <q-route-tab to="/Inicio" label="Inicio" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <Brindar />
    </q-page-container>

    <q-page-container class="palette:red">
      <h1>Historias de exito</h1>
      <historias />
    </q-page-container>

    <q-page-container class="bg-primary">
      <Servicios class="ser" />
    </q-page-container>

    <q-footer reveal elevated class="bg-amber-6 text-white">
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
import Brindar from "src/components/Brindar.vue";
import Servicios from "src/components/Servicios.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    Brindar,
    Servicios,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
.bg-Primary {
  color: #f2f2f2;
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
.histo {
  top: 20px;
  bottom: 20px;
  background-color: aqua;
}
</style>
