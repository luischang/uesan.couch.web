<template>
  <div class="pri1">
    <img class="ima" src="public/logo.png" />
    <p class="pri11">
      Nuestros servicios de coaching para emprendedores se dedica a brindar el
      apoyo y la orientación necesaria para que los emprendedores alcancen su
      máximo potencial y logren el éxito en sus proyectos empresariales. Nos
      enorgullece ser socios de nuestros clientes en su viaje emprendedor y
      estamos comprometidos con su éxito a largo plazo.
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
</script>
<style scoped>
.pri1 {
  display: grid;
  grid-template-columns: auto 1fr;
  transition-property: initial;
  gap: 20px;
  align-items: center;
}
.ima {
  width: 300px;
  height: 300px;
  border-radius: 18px;
  margin-top: 70px;
  margin-left: 150px;
}
.pri11 {
  text-align: left;
  margin-right: 50px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
  font-size: 25px;
}
</style>
