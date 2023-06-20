<template>
  <q-layout view="LHh Lpr lFf">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="titulo">
          <q-avatar class="logo">
            <img src="public/logo.png" />
          </q-avatar>
          AyniConnect
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/login" label="Login" />
        <q-route-tab to="/Register" label="Sign Up" />
        <q-route-tab to="/Servicios" label="Servicios" />
        <q-route-tab to="/page1" label="Comunidad" />
        <q-route-tab to="/page2" label="Quienes Somos" />
        <q-route-tab to="/page3" label="Inicio" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <Brindar />
    </q-page-container>

    <Servicios class="ser" />

    <q-footer reveal elevated class="bg-Blue-8 text-white">
      <q-toolbar>
        <q-toolbar-title style="text-align: center">
          <q-avatar style="position: fixed; margin-left: 120px">
            <img src="public/favicon.ico" />
          </q-avatar>
          <div>AyniConnect &copy; 2023</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import Brindar from "src/components/Brindar.vue";
import Servicios from "src/components/Servicios.vue";
import { computed } from "vue";
export default defineComponent({
  name: "MainLayout",

  components: {
    Brindar,
    Servicios,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      //essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style scoped>
img:not(.q-icon):not(.q-img__image) {
  border-radius: 10px;
  height: inherit;
  width: inherit;
}
.logo {
  width: 120px;
  height: 120px;
  margin-top: 10px;
}
.titulo {
  font-size: 45px;
}

.ser {
  align-items: center;
  margin-left: 3%;
  padding-bottom: 70px;
}
</style>
