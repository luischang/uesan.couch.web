<!-- eslint-disable vue/valid-template-root -->
<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div class="nav">
        <ul>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Comunidad</a></li>
          <li><a href="#">Quienes Somos</a></li>
          <li style="float: right" class="active"><a href="#">Inicio</a></li>
        </ul>
      </div>
      <div class="interface">
        <div class="user">
          <div class="details">
            <div class="image-box">
              <img src="public\test\persona.jpg" alt="Imagen" />
            </div>
            <div class="user-info">
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
          </div>
        </div>
        <div class="info">
          <div class="details">
            <div class="clases">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates tempore placeat eligendi, dolor inventore expedita
                deserunt totam! Enim, inventore quod nulla excepturi asperiores
                similique, ea quidem amet dignissimos suscipit sed.
              </p>
            </div>
            <div class="clases-details">
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
      <div class="footer">
        <h3>Hola</h3>
      </div>
    </body>
  </html>
</template>

<script></script>

<style>
body {
  font-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
  background-color: #1a2332;
}
/* Navigation Decoration */
.nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0 10px;
  overflow: hidden;
  /* background-color: #333; */
  background-color: #1a2332;
  position: fixed;
  top: 0;
  width: 100%;
  float: inline-start;
}

.nav li {
  float: left;
  /* border-right: 1px solid #bbb;   */
}

.nav li:last-child {
  border-right: none;
}

.nav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.nav li a:hover:not(.active) {
  background-color: #111;
}

.nav .active {
  background-color: #04aa6d;
}
/* Interface Decoration */
.interface {
  display: flex; /* Agrega display flex para ajustar la altura de user y info */
  margin-top: 40px;
  padding: 30px;
  float: inline-start;
  width: 100%;
}
.user {
  float: left;
  width: 29%;
  height: 100%; /* Ajusta la altura al 100% del contenedor padre */
  padding: 40px;
}

.user .details {
  background-color: #ffffff;
}

.image-box {
  width: 100%; /* Ancho del cuadro */
  height: 300px; /* Alto del cuadro */
  overflow: hidden; /* Oculta cualquier parte de la imagen que exceda el cuadro */
  padding: 0;
}

.image-box img {
  width: 100%; /* Ajusta el ancho de la imagen al 100% del cuadro */
  height: 100%; /* Ajusta la altura de la imagen automáticamente para mantener la proporción */
  display: block; /* Elimina el espacio adicional debajo de la imagen */
}

.user-info {
  padding: 20px;
}

.user-info h3 {
  font-size: 24px;
  /* font-style: none; */
}

.user-info p {
  color: #6e6d79;
}

.info {
  float: right;
  width: 69%;
  height: 100%;
  padding: 40px;
}

.info .details {
  padding: 0;
}

.clases {
  height: 40%;
  background-color: #9bb94f;
  padding: 20px;
}
.clases-details {
  margin-top: 40px;
  height: 60%;
  background-color: #a79fc5;
  padding: 20px;
}
/* Footer decoration */
.footer {
  margin-top: 530px;
  padding: 10px;
}
</style>
