<!-- eslint-disable vue/valid-template-root -->
<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body id="Emprendedor">
    <div class="nav">
      <ul>
        <li><a href="http://localhost:9000/#/Servicios">Servicios</a></li>
        <li><a href="#">Comunidad</a></li>
        <li><a href="#">Quienes Somos</a></li>
        <li style="float: right" class="active"><a href="#">Inicio</a></li>
      </ul>
    </div>
    <div class="interface">
      <div class="emprendedor-user">
        <div class="emprendedor-details">
          <div class="emprendedor-image-box">
            <img src="public\test\persona.jpg" alt="Imagen" />
          </div>
          <div class="emprendedor-user-info">
            <h3>{{ nombre }} {{ apellido }}</h3>
            <p>
              Nos complace darte la más cordial bienvenida a nuestra comunidad
              de mentores y mentees. En primer lugar, queremos agradecerte por
              unirte a nosotros y confiar en nuestro programa de mentoría para
              impulsar tu crecimiento personal y profesional.
            </p>
            <br />
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum.</p>
          </div>
          <div class="emprendedor-button-container">
            <button class="button">Actualizar Perfil</button>
            <button class="button" @click="cerrar()">Cerrar Sesión</button>
          </div>
        </div>
      </div>
      <div class="emprendedor-info">
        <div class="emprendedor-caja">
          <p>
            Aquí en nuestra plataforma, te ofrecemos un espacio seguro y
            enriquecedor donde podrás encontrar el apoyo y la orientación
            necesaria para alcanzar tus metas.
            <br />
            <br />
            Creemos firmemente en el poder transformador de la mentoría. A
            través de este programa, podrás establecer conexiones significativas
            con profesionales exitosos que han recorrido el camino que tú deseas
            seguir.
            <br />
            <br />
            Aprovecha esta oportunidad para aprender de su experiencia, recibir
            consejos personalizados y desafiar tus propias limitaciones. Nuestro
            enfoque se basa en la colaboración y la confianza mutua. Queremos
            que te sientas cómodo(a) y seguro(a) al compartir tus metas,
            inquietudes y desafíos con tu mentor asignado. Juntos, trabajaremos
            para crear un plan personalizado que te permita superar obstáculos,
            adquirir nuevas habilidades y tomar decisiones informadas. Además,
            nuestro servicio de mentoring va más allá de la simple orientación.
            <br />
            <br />
            También te brindamos recursos educativos, herramientas prácticas y
            acceso a una red de contactos profesionales que pueden ampliar tus
            horizontes y abrir puertas hacia oportunidades emocionantes. Estamos
            emocionados por acompañarte en este viaje de crecimiento y
            aprendizaje. Esperamos que esta experiencia de mentoría sea
            enriquecedora y te ayude a alcanzar tus metas de manera exitosa.
            <br />
            <br />
            Saludos cordiales, EmprendeFácil.
          </p>
        </div>
        <div class="emprendedor-clases">
          <div class="emprendedor-servicios">
            <p>
              ¿Te gustaría tener una caja que te ayude a ahorrar dinero sin que
              te des cuenta? Con la caja de auto llenado de reservas, puedes
              programar una cantidad fija o variable que se transferirá
              automáticamente a tu cuenta de ahorros cada mes. Así, podrás
              cumplir tus metas financieras sin esfuerzo ni preocupaciones. La
              caja es fácil de usar, segura y discreta. Solo tienes que
              conectarla a tu cuenta bancaria y elegir el plan que más te
              convenga. ¡No esperes más y pide la tuya hoy mismo!
            </p>
          </div>
          <div class="emprendedor-coach">
            <p>
              el coaching es un proceso transformador que brinda apoyo y guía
              personalizada para que las personas alcancen su máximo potencial.
              Si estás buscando un enfoque centrado en el crecimiento y el logro
              de tus metas, el coaching puede ser la herramienta perfecta para
              ti.
              <br />
              <br />
              ¡Empieza hoy mismo y descubre el poder de desbloquear tu verdadero
              potencial con la ayuda de un coach profesional!
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { ref } from "vue";

export default {
  methods: {
    getIdTipoFromLocalStorage() {
      var datosSeleccionados = localStorage.getItem("datosSeleccionados");
      var userResult = localStorage.getItem("userResult");
      if (datosSeleccionados) {
        var datos = JSON.parse(datosSeleccionados);
        var datos2 = JSON.parse(userResult);
        this.nombreServicio = datos.nombreServicio;
        this.resultadoMultiplicacion = datos.resultadoMultiplicacion;
        this.nombre = datos2.nombre;
        this.apellido = datos2.apellido;
      } else {
        console.log("No se encontraron datos seleccionados en el localStorage");
      }
    },
    openModal(seguro) {
      this.modalOpen = true;
    },
    closeModal(seguro) {
      this.modalOpen = false;
    },
    endModal(seguro) {
      this.$router.push("/intEmprendedor");
    },
  },
  mounted() {
    this.getIdTipoFromLocalStorage();
  },
  data() {
    return {
      modalOpen: false,
      resultadoMultiplicacion: 0,
      nombre: "",
      nombreServicio: "",
      apellido: "",
      // ID de servicio que quieres consultar
    };
  },
};
</script>

<style scoped>
#Emprendedor {
  font-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
  background-color: #1a2332;
}
/* Navigation Decoration */
.nav {
  position: relative;
  z-index: 9999;
}
.nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0 0px;
  overflow: hidden;
  background-color: #fad935;
  position: fixed;
  top: 0;
  width: 100%;
  float: inline-start;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.329);
}

.nav li {
  float: left;
  font-weight: bold;
  /* border-right: 1px solid #bbb;   */
}

.nav li:last-child {
  border-right: none;
}

.nav li a {
  display: block;
  color: rgba(0, 0, 0, 0.842);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.nav li a:hover:not(.active) {
  background-color: #111;
  color: white;
}

.nav .active {
  background-color: #b183ae;
}
/* Interface Decoration */
.interface {
  display: grid;
  grid-template-columns: 400px 25% 35%;
  grid-template-rows: 50% 50%;
  margin-top: 15px;
  padding: 30px;
  width: 100%;
  background-color: #ededed;
}
.emprendedor-user {
  grid-row-start: 1;
  grid-row-end: 3;
  width: 100%;
  height: 100%;
  padding: 20px;
}

.emprendedor-user .emprendedor-details {
  background-color: #ffffff;
}

.emprendedor-image-box {
  width: 100%; /* Ancho del cuadro */
  height: 300px; /* Alto del cuadro */
  overflow: hidden; /* Oculta cualquier parte de la imagen que exceda el cuadro */
  padding: 0;
  border: 1px solid rgba(226, 214, 214, 0.877);
}

.emprendedor-image-box img {
  width: 100%; /* Ajusta el ancho de la imagen al 100% del cuadro */
  height: 100%; /* Ajusta la altura de la imagen automáticamente para mantener la proporción */
  display: block; /* Elimina el espacio adicional debajo de la imagen */
}

.emprendedor-user-info {
  padding: 20px;
}

.emprendedor-user-info h3 {
  font-size: 24px;
  /* font-style: none; */
}

.emprendedor-user-info p {
  color: #6e6d79;
}

.emprendedor-button-container {
  display: flex;
  flex-grow: 1;
}

.emprendedor-button-container > .button {
  flex-grow: 1;
  width: 100%;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin: 0;
}

.emprendedor-button-container > .button:hover {
  background-color: #111;
  color: white;
}

/* Aquí comienza la zona de edición de las cajas laterales al usuario */
.emprendedor-info {
  display: grid;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 4;
  width: 100%;
  height: 100%;
  padding: 20px;
}

.emprendedor-info .emprendedor-details {
  padding: 0;
  --side-padding: 20px;
  --border-radius: 34px;
  --accent-br: 15px;
}

.emprendedor-caja {
  display: grid;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
  /* border: 2px solid red; */
  margin: 10px;
  padding: 10px;
  background-color: #b183aebb;
  border-radius: 10px;
}

.emprendedor-clases {
  display: grid;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 3;
  grid-column-end: 4;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  margin: 10px;
  padding: 10px;
  background: #73c8a9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #373b44,
    #73c8a9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #373b44,
    #73c8a9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  grid-template-rows: 50% 50%;
}
.emprendedor-coach {
  grid-row-start: 2;
  grid-row-end: 3;
  border-radius: 10px;
  margin-top: 10px;
  width: auto;
  background-color: #b183ae;
  padding: 20px;
}
.emprendedor-servicios > p :not(:first-child) {
  grid-row-start: 1;
  grid-row-end: 2;
  margin-top: 20px;
}

.emprendedor-servicios {
  opacity: 100%;
  width: 100%;
  height: max-content;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
}
/* Footer decoration */
.footer {
  margin-top: 530px;
  padding: 10px;
}
</style>

<script></script>
