<template>
  <div class="burbu">
    <div class="boot">
      <q-btn class="crystal-button" color="verde" label="Regresar" text-color="white" to="/Inicio" />
    </div>
    <div class="block2">
      <h3><strong>Registrarse como Emprendedor</strong></h3>
      <p>
        ¡Bienvenido, emprendedor! En nuestra comunidad, Te apoyaremos a impulsar
        tu proyecto y alcanzar tus metas empresariales.
      </p>
      <p>Te ofrecemos:</p>
      <ul>
        <li>-Asesoramiento personalizado de expertos en emprendimiento.</li>
        <li>-Networking con otros emprendedores y profesionales del sector.</li>
        <br />
      </ul>
      <p>
        No importa en qué etapa te encuentres, estamos aquí para apoyarte en tu
        camino hacia el éxito. ¡Únete a nuestra comunidad de emprendedores y
        comienza a hacer realidad tus sueños empresariales!
      </p>
      <div class="q-pa-md q-gutter-sm">
        <q-btn
        class="btne"
          color="green"
          text-color="black"
          label="Iniciar Registro"
          to="/RegisterEmprendedor"
        />
      </div>
    </div>
    <div class="block1">
      <h3><strong>Registrarse como Coach</strong></h3>
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
        <q-btn
          class="btnc"
          color="green"
          text-color="black"
          label="Iniciar Registro"
          to="/RegisterCoach"
        />
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.btnc{
  left: 60px;
}
.btne{
  left: 60px;
}
.crystal-button {
  color: aliceblue;
  backdrop-filter: blur(1000px);
  opacity: 0.9;
}
.burbu {
  background-image: url("https://www.equiposytalento.com/contenido/noticias/cursocoahing943.png");
  display: block;
  width: 100%;
  height: auto;
}
.block1 {
  height: 97.8%;
  width: 25%;
  background-color: rgba(4, 38, 41,0.8);
  padding: 15px;
  position: absolute;
  border-radius: 10px;
  text-align: auto;
  align-items: center;
  backdrop-filter: blur(10px);
  opacity: 0.9;
  z-index: 2;
}
.block1 {
  right: 22%;
  margin-top: 20px;
  min-height: auto;
}

.block2 {
  height: auto;
  width: 25%;
  background-color: rgba(4, 38, 41, 0.8);
  position: absolute;
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  backdrop-filter: blur(10px);
  opacity: 0.9;
  z-index: 2;
}
.block2 {
  left: 22%;
  margin-top: 20px;
  min-height: auto;
  text-align: start;
}
.boot {
  position: absolute;
  top: 20px;
  right: 1200px;
}
h3 {
  font-size: 25px;
  text-align: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  color:red;

}
q-pa-md q-gutter-sm {
  text-align: center;
}
p{
  font-size: 15px;
  text-align: justify;
  font-family: Georgia, "Times New Roman", Times, serif;
  color:aliceblue;
  font-weight: 700;
}
ul{
  font-size: 15px;
  text-align: justify;
  font-family: Georgia, "Times New Roman", Times, serif;
}
li{
  font-size: 15px;
  text-align:left;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: aliceblue;
}
</style>
