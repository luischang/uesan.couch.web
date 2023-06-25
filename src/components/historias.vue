<!-- eslint-disable vue/multi-word-component-names -->
<template>

    <div class="carousel">
  <div class="card">
    <!-- Contenido de la primera carta -->
  </div>
  <div class="card">
    <!-- Contenido de la segunda carta -->
  </div>
  <div class="card">
    <!-- Contenido de la tercera carta -->
  </div>
  <div class="card">
    <!-- Contenido de la cuarta carta -->
  </div>
  <!-- Agrega más cartas según sea necesario -->
</div>

</template>
<script>
import { DefineComponent } from 'vue';


</script>
<style scoped>
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100%;
  justify-content: center;
}

.card {
  flex: 0 0 calc(100% / 3); /* Ajusta el ancho de las cartas según el número */
  scroll-snap-align: center;
  /* Estilos adicionales para las cartas */
  background-color: #f2f2f2;
  padding: 20px;
  margin-right: 10px;
}

.card:last-child {
  margin-right: 0; /* Elimina el margen derecho de la última carta */
}
.card {
  /* Otros estilos */
  height: 200px; /* Establece una altura fija para todas las cartas */
}
</style>
