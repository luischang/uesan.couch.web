
<template>
  <q-layout view="LHh Lpr lFf">
    <q-header reveal elevated class="bg-yellow-7 text-black" height-hint="98" :class="{ 'header-hidden': headerHidden }">
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
            <img  class="let" src="public/imagenPro/letra2.png" alt=".png">

        </div>

        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/login" label="Iniciar sesión" />
        <q-route-tab to="/Register" label="Registrarse" />
        <q-route-tab to="/Servicios" label="Servicios" />
        <q-route-tab to="/Servicios" label="Comunidad" />
        <q-route-tab to="/QuienesSomos" label="Quienes Somos" />
        <q-route-tab to="/Inicio" label="Inicio" />
      </q-tabs>
    </q-header>

    <q-page-container class="conten">

    <div class="bloques">
    <div class="block1">
      <h3><strong>Registrarse como Emprendedor&nbsp;</strong></h3>
      <br>
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
    <div class="block2">
      <h3><strong>Registrarse como <br>Coach</strong></h3>
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
    <div>

    </div>
    </q-page-container>

  </q-layout>
</template>

<script>
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


.conten {
  background-image: url("public/imagenPro/register.png");
  width: 100%;
  height: auto;
  background-size:contain;
  background-repeat: no-repeat;
  background-position:initial;
  background-attachment: fixed;
  background-size: cover;


}

.btnc{
  left: 90px;
}
.btne{
  left: 90px;
}
.boot{

  top: 60px;
  right: 1200px;
}
.boot{
  left:90px;
}

.bloques{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  left: 0px;
}

.block2 {
  height: auto;
  width: 25%;
  background-color: rgba(4, 38, 41,0.8);
  padding: 15px;
  margin-right: 20%;
  align-items: center;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  opacity: 0.9;
  z-index: 2;
}


.block1 {
  height: auto;
  width: 25%;
  padding: 15px;
  margin-left: 20%;
  align-items: center;
  background-color: rgba(4, 38, 41, 0.8);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  opacity: 0.9;
  z-index: 2;
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
.header-hidden {
  transform: translateY(-100%);
}

</style>

