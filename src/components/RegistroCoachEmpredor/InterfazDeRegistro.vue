<template>
  <div class="container">
    <div class="block">
      <h3>Registrarse como Emprendedor</h3>
      <p>
        ¡Bienvenido, emprendedor! En nuestra comunidad, Te apoyaremos a impulsar
        tu proyecto y alcanzar tus metas empresariales.
      </p>
      <p>Te ofrecemos:</p>
      <ul>
        <li>-Asesoramiento personalizado de expertos en emprendimiento.</li>
        <li>-Networking con otros emprendedores y profesionales del sector.</li>
      </ul>
      <p>
        No importa en qué etapa te encuentres, estamos aquí para apoyarte en tu
        camino hacia el éxito. ¡Únete a nuestra comunidad de emprendedores y
        comienza a hacer realidad tus sueños empresariales!
      </p>
      <div class="q-pa-md q-gutter-sm">
        <q-btn  color="green" text-color="black" label="Iniciar Registro" to="/RegisterEmprendedor" />
      </div>
    </div>
    <div class="block">
      <h3>Registrarse como Coach</h3>
      <p>
        ¡Hola, coach! En nuestra plataforma, encontrarás una oportunidad para
        compartir tus conocimientos y experiencia con emprendedores.
      </p>
      <p>Como coach, podrás:</p>
      <ul>
        <li>-Brindar asesoramiento personalizado a emprendedores.</li>
        <li>-Ayudar a desarrollar habilidades y competencias empresariales.</li>
        <li>
          -Compartir estrategias y consejos para el éxito en los negocios.
        </li>
      </ul>
      <p>
        Únete a nuestra comunidad de coaches comprometidos con el crecimiento y
        desarrollo de emprendedores. Juntos podemos marcar la diferencia y
        construir un futuro.
      </p>
      <div class="q-pa-md q-gutter-sm">
        <q-btn  color="green" text-color="black" label="Iniciar Registro" to="/RegisterEmprendedor" />
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.block {
  flex: 0 0 349.9px;
  border: 1px solid #ccc;
  padding: 25px;
  margin: 10px;
  text-align: center;
}

h3 {
  margin-top: 0;
}

p {
  text-align: justify;
}
ul {
  text-align: left;
}
ul li {
  list-style: none;
  margin-left: 20px;
}

.button:hover {
  background-color: #45a049;
}
</style>
