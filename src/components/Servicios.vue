<template>
  <div class="servicio">
    <h2>Servicios Coaching</h2>
    <table>
      <tr>
        <td>
          <img class="admi" src="img_Servicios/administracion.jpg" />
          <p class="pAdmi">Coaching Administración</p>
        </td>
        <td>
          <img class="cont" src="img_Servicios/contabilidad.jpg" />
          <p class="pCont">Coaching Contabilidad</p>
        </td>
        <td>
          <img class="deCorp" src="img_Servicios//derecho corporativo.jpg" />
          <p>Coaching Derecho Corporativo</p>
        </td>
      </tr>
      <tr>
        <td>
          <img class="Fina" src="img_Servicios/finanzas.jpg" />
          <p>Coaching Finanzas</p>
        </td>
        <td>
          <img class="logi" src="img_Servicios/logistica.jpg" />
          <p>Coaching Logistica</p>
        </td>
        <td>
          <img class="mark" src="img_Servicios/Marketing.png" />
          <p>Coaching Marketing</p>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { defineComponent } from "vue";
</script>
<style scoped>
.servicio h2 {
  padding: 20px;
  font-size: 40px;
  text-align: center;
}
.admi {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
.admi1 p {
  align-items: center;
}
.cont {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
.deCorp {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
.Fina {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
.logi {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
.mark {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  margin-top: 90px;
  margin-left: 150px;
}
table {
  margin-left: 10%;
}
table p {
  text-align: center;
}
table tr td p {
  font-size: 20px;
  margin-left: 50px;
}
table tr td img {
  margin-right: 90px;
}
</style>
