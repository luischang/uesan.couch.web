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
            <h3>Carlos Villanueva</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates tempore placeat eligendi, dolor inventore expedita
              deserunt totam! Enim, inventore quod nulla excepturi asperiores
              similique, ea quidem amet dignissimos suscipit sed.
            </p>
            <br />
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum.</p>
          </div>
          <div class="emprendedor-button-container">
            <button class="button">Actualizar Perfil</button>
            <button class="button">Cerrar Sesión</button>
          </div>
        </div>
      </div>
      <div class="emprendedor-info">
        <div class="emprendedor-caja">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
            odio modi. Rerum facilis, saepe dolores aperiam ex porro officia
            nihil optio, tempore dicta qui excepturi facere pariatur, dolor vel
            earum!
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              provident assumenda, cumque quo reprehenderit excepturi quas
              blanditiis nihil cum ratione in deserunt culpa laboriosam ipsam
              dolores debitis alias vitae delectus.
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script></script>

<style>
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
