<template>
  <q-layout view="LHh Lpr lFf">
    <q-header reveal elevated class="bg-yellow-7 text-black" height-hint="98">
      <q-toolbar>
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
        <q-route-tab to="/Comunidad" label="Comunidad" />
        <q-route-tab to="/QuienesSomos" label="Quienes Somos" />
        <q-route-tab to="/Inicio" label="Inicio" />
      </q-tabs>
    </q-header>
    <q-page-container class="contss">
      <div class="demo">
        <div class="containerSs">
          <div class="row">
            <div class="col-md-12">
              <div id="testimonial-slider" class="owl-carousel">
                <div class="testimonial">
                  <div class="pic">
                    <img src="public/logo.png" alt="" />
                  </div>
                  <div class="testimonial-content">
                    <h3 class="title">¿Quiénes Somos?</h3>

                    <p class="description">
                      En [nombre de la empresa], somos un equipo apasionado de
                      profesionales del coaching dedicados a ayudar a las
                      personas a alcanzar su máximo potencial y a lograr el
                      éxito en todas las áreas de sus vidas. Nuestro enfoque se
                      basa en una combinación de experiencia, conocimientos y
                      técnicas efectivas de coaching que han transformado la
                      vida de numerosos individuos. Creemos en el poder de cada
                      individuo para crear cambios significativos y duraderos en
                      su vida. A través de sesiones personalizadas, establecemos
                      una relación de confianza y colaboración con nuestros
                      clientes, brindándoles el apoyo y la orientación
                      necesarios para superar obstáculos, descubrir sus
                      fortalezas y lograr metas ambiciosas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="containerrr">
        <div class="row">
          <div class="col-md-4">
            <div class="card d-flex mx-auto">
              <img
                class="imagen"
                src="https://www.grupoioe.es/wp-content/uploads/2019/01/110.Definir-la-mision-y-vision-de-una-empresa-1024x494.jpg"
              />
              <div class="card-text">
                <div class="card-title">Misión</div>
                En [nombre de la empresa], nos comprometemos a guiar y empoderar
                a individuos y organizaciones para que descubran su máximo
                potencial y logren el éxito en todas las áreas de sus vidas. A
                través de un enfoque personalizado, brindamos herramientas,
                conocimientos y apoyo integral que les permiten alcanzar sus
                metas, superar desafíos y desarrollar una mentalidad de
                crecimiento continuo. Nuestro objetivo es ser socios
                estratégicos en el proceso de transformación, inspirando y
                motivando a nuestros clientes a desafiarse a sí mismos, superar
                obstáculos y alcanzar niveles de excelencia sin precedentes.
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card d-flex mx-auto">
              <div class="card-image">
                <img
                  class="imagen"
                  src="https://www.100negocios.com/wp-content/uploads/2016/06/Empresario-muy-exitoso.png"
                />
              </div>
              <div class="card-text">
                <div class="card-title">Visión</div>
                En [nombre de la empresa], aspiramos a ser reconocidos como
                líderes en la industria del coaching, brindando servicios de
                excelencia que transforman vidas y organizaciones. Nos
                esforzamos por ser referentes en el desarrollo personal y
                profesional, inspirando a nuestros clientes a alcanzar niveles
                de éxito y bienestar sin límites. Buscamos ser una fuente de
                inspiración y cambio positivo, impulsando a las personas a
                descubrir su propósito, desatar su potencial y vivir vidas
                extraordinarias. A medida que crecemos, buscamos expandir
                nuestro alcance globalmente y establecer alianzas estratégicas
                para impactar positivamente en una mayor cantidad de personas y
                comunidades.
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card d-flex mx-auto">
              <div class="card-imagen">
                <img
                  class="imagen"
                  src="https://d2k7w3fmrpj0w4.cloudfront.net/advices/photos/000/000/837/medium/b108cc2ae582a14b59cab8855bdfaecfa699253e.jpg?1644423345"
                />
              </div>
              <div class="card-text">
                <div class="card-title">Valores</div>
                Empoderamiento: Creemos en capacitar a las personas para que
                descubran su potencial y tomen el control de sus vidas y
                carreras. Integridad: Nos comprometemos a actuar con honestidad,
                ética y transparencia en todas nuestras interacciones y
                relaciones. Pasión: Nos apasiona ayudar a los demás a lograr el
                éxito y encontrar significado en su vida y trabajo. Respeto:
                Valoramos y respetamos las diferencias individuales, creando un
                entorno inclusivo y de respeto mutuo. Excelencia: Nos esforzamos
                por brindar servicios de alta calidad, superando las
                expectativas y buscando la mejora continua.
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-page-container>
    <q-footer reveal elevated class="bg-yellow-7  text-black" >
      <q-toolbar>
        <q-toolbar-title style="text-align: center">
          <div>Emprende Facil &copy; 2023</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script></script>

<style>
.contss{
  background-image: url("public/imagenPro/comu.png");
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-size:contain;
background-size:fullscream;
background-position:-0.2px 60px ;

}
.letra2{
  width: 30%;
  height: 30%;
  position:absolute;
  left: 270px;
  bottom: 260px;
}

.containerSs {
  padding: 80px;
  display: grid;
  justify-content: center;
  align-items: center;
  animation: containerFadeIn 1.1s ease-in-out forwards;
}
.testimonial .pic {
  width: 22%;
  padding: 20px 0;
  margin: 0 6% 0 2%;
  float: left;
  position: relative;
  z-index: 1;
}
.testimonial .pic:before,
.testimonial .pic:after {
  content: "";
  width: 130px;
  height: 150px;
  background: #0d0852;
  position: absolute;
  z-index: -1;
}
.testimonial .pic:before {
  top: 0;
  right: -20px;
}
.testimonial .pic:after {
  bottom: 0;
  left: -20px;
}
.testimonial .pic img {
  width: 100%;
  height: auto;
  border-radius: 2rem;
  border: 3px solid #17033b;
}
.testimonial .testimonial-content {
  width: 70%;
  float: right;
}
.testimonial .title {
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  text-transform: uppercase;
  padding-top: 65px;
  padding-left: 15px;
}
.testimonial .post {
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 27px;
  color: #000000;
  text-transform: capitalize;
  margin-bottom: 25px;
  padding-left: 15px;
}
.testimonial .description {
  font-size: 16px;
  color: #000000;
  padding: 0 15px;
  margin: 0;
  position: relative;
}

@media only screen and (max-width: 990px) {
  .testimonial {
    text-align: center;
  }
  .testimonial .pic {
    width: 200px;
    margin: 0 auto;
    float: none;
  }
  .testimonial .pic:before,
  .testimonial .pic:after {
    width: 80px;
    height: 100px;
  }
  .testimonial .testimonial-content {
    width: 100%;
    float: none;
  }
  .testimonial .title {
    padding: 15px 0 0 0;
  }
  .testimonial .post {
    padding: 0;
    margin-bottom: 10px;
  }
}
/*ssssssssssssssssssssssssssssssss*/
.containerrr {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(130vh - 13rem); /* Resta la altura del pie de página */
}
.card {
  border-radius: 1rem;
  box-shadow: 0px -10px 0px rgb(6, 0, 90);
  background-color: #083ef35b;
  animation: containerFadeIn 1.1s ease-in-out forwards;
}
@media (max-width: 767px) {
  .card {
    margin: 1rem 0.7rem 1rem;
    max-width: 80vw;
  }
}
.imagen {
  padding-top: 20px;
  display: flex;

  width: 20rem;
  border-radius: 5rem;
  margin: 1.3rem auto 1rem auto;
}
.col-md-4 {
  padding: 0 0.5rem;
}
.card-title {
  font-size: 2rem;
  margin-bottom: 0;
  font-weight: bold;
  font-family: "IM Fell French Canon SC";
  margin-bottom: 17px;
}
.card-text {
  text-align: center;
  padding: 1rem 2.6578rem;
  font-size: 0.8rem;
  color: rgb(0, 0, 0);
  line-height: 1.4rem;
}
.footer {
  border-top: none;
  text-align: center;
  line-height: 1.2rem;
  padding: 2rem 0 1.4rem 0;
  font-family: "Varela Round";
}
#name {
  font-size: 0.8rem;
  font-weight: bold;
}
#position {
  font-size: 0.7rem;
}

a:hover {
  color: rgb(0, 19, 82);
}
/*sssssssssssssssssssss*/

.user-content p {
  margin-top: 5px;
  font-size: 12px;
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
@keyframes textFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes containerFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
