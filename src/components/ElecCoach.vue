<template>
<q-layout view="LHh Lpr lFf">
    <q-header reveal elevated class="bg-yellow-7 text-black" height-hint="98">
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
            <img class="let" src="public/imagenPro/letra2.png" alt=".png" />
          </div>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/login" @click="reloadPage" label="Iniciar sesión" />
        <q-route-tab to="/Register" label="Registrarse" />
        <q-route-tab to="/Servicios" label="Servicios" />
        <q-route-tab to="/Comunidad" label="Comunidad" />
        <q-route-tab to="/QuienesSomos" label="Quienes Somos" />
        <q-route-tab to="/ElecCoach" label="prueba de sebas" />
        <q-route-tab to="/Inicio" label="Inicio" />
      </q-tabs>
    </q-header>

<q-page-container>
  
  <h1>hollaA</h1>

</q-page-container>



    <q-footer reveal elevated class="bg-yellow-7 text-black">
      <q-toolbar>
        <q-toolbar-title style="text-align: center">
          <div>Emprende Facil &copy; 2023</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script></script>

<style scoped>
.contss {
  background-image: url("public/imagenPro/register.png");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-size: cover;
  background-position: -0.2px 60px;
}
.letra2 {
  width: 30%;
  height: 30%;
  position: absolute;
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
  background: #f0b923a1;
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
  border: 3px solid #c5a039a1;
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
  box-shadow: 0px -10px 0px #f0b923;
  background-color: #f0b92394;
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
