<!-- eslint-disable vue/valid-template-root -->
<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body id="coach">
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
          <div class="button-container">
            <button class="button">Actualizar Perfil</button>
            <button class="button">Cerrar Sesión</button>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="details">
          <div class="clases">
            <div class="container">
              <div class="calendar">
                <div class="calendar__opts">
                  <select name="calendar__month" id="calendar__month">
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>Apr</option>
                    <option selected>May</option>
                    <option>Jun</option>
                    <option>Jul</option>
                    <option>Aug</option>
                    <option>Sep</option>
                    <option>Oct</option>
                    <option>Nov</option>
                    <option>Dec</option>
                  </select>

                  <select name="calendar__year" id="calendar__year">
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option selected>2020</option>
                  </select>
                </div>

                <div class="calendar__body">
                  <div class="calendar__days">
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>T</div>
                    <div>F</div>
                    <div>S</div>
                    <div>S</div>
                  </div>

                  <div class="calendar__dates">
                    <div class="calendar__date calendar__date--grey">
                      <span>27</span>
                    </div>
                    <div class="calendar__date calendar__date--grey">
                      <span>28</span>
                    </div>
                    <div class="calendar__date calendar__date--grey">
                      <span>29</span>
                    </div>
                    <div class="calendar__date calendar__date--grey">
                      <span>30</span>
                    </div>
                    <div class="calendar__date"><span>1</span></div>
                    <div class="calendar__date"><span>2</span></div>
                    <div class="calendar__date"><span>3</span></div>
                    <div class="calendar__date"><span>4</span></div>
                    <div class="calendar__date"><span>5</span></div>
                    <div class="calendar__date"><span>6</span></div>
                    <div class="calendar__date"><span>7</span></div>
                    <div class="calendar__date"><span>8</span></div>
                    <div class="calendar__date"><span>9</span></div>
                    <div class="calendar__date"><span>10</span></div>
                    <div class="calendar__date"><span>11</span></div>
                    <div class="calendar__date"><span>12</span></div>
                    <div class="calendar__date"><span>13</span></div>
                    <div class="calendar__date"><span>14</span></div>
                    <div class="calendar__date"><span>15</span></div>
                    <div
                      class="calendar__date calendar__date--selected calendar__date--first-date calendar__date--range-start"
                    >
                      <span>16</span>
                    </div>
                    <div
                      class="calendar__date calendar__date--selected calendar__date--last-date"
                    >
                      <span>17</span>
                    </div>
                    <div
                      class="calendar__date calendar__date--selected calendar__date--first-date"
                    >
                      <span>18</span>
                    </div>
                    <div class="calendar__date calendar__date--selected">
                      <span>19</span>
                    </div>
                    <div class="calendar__date calendar__date--selected">
                      <span>20</span>
                    </div>
                    <div
                      class="calendar__date calendar__date--selected calendar__date--last-date calendar__date--range-end"
                    >
                      <span>21</span>
                    </div>
                    <div class="calendar__date"><span>22</span></div>
                    <div class="calendar__date"><span>23</span></div>
                    <div class="calendar__date"><span>24</span></div>
                    <div class="calendar__date"><span>25</span></div>
                    <div class="calendar__date"><span>26</span></div>
                    <div class="calendar__date"><span>27</span></div>
                    <div class="calendar__date"><span>28</span></div>
                    <div class="calendar__date"><span>29</span></div>
                    <div class="calendar__date"><span>30</span></div>
                    <div class="calendar__date"><span>31</span></div>
                  </div>
                </div>

                <div class="calendar__buttons">
                  <button class="calendar__button calendar__button--grey">
                    Back
                  </button>

                  <button class="calendar__button calendar__button--primary">
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div class="clases-text">
              <p>
                ¿Te gustaría tener una caja que te ayude a ahorrar dinero sin
                que te des cuenta? Con la caja de auto llenado de reservas,
                puedes programar una cantidad fija o variable que se transferirá
                automáticamente a tu cuenta de ahorros cada mes. Así, podrás
                cumplir tus metas financieras sin esfuerzo ni preocupaciones. La
                caja es fácil de usar, segura y discreta. Solo tienes que
                conectarla a tu cuenta bancaria y elegir el plan que más te
                convenga. ¡No esperes más y pide la tuya hoy mismo!
              </p>
              <h5>Aquí van todas las reservas del usuario</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates tempore placeat eligendi, dolor inventore expedita
                deserunt totam! Enim, inventore quod nulla excepturi asperiores
                similique, ea quidem amet dignissimos suscipit sed.
              </p>
            </div>
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
      <div></div>
    </div>
  </body>
</template>

<script></script>

<style scoped>
#coach {
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
  display: flex; /* Agrega display flex para ajustar la altura de user y info */
  margin-top: 15px;
  padding: 30px;
  float: inline-start;
  width: 100%;
  background-color: #ededed;
}
.user {
  float: left;
  width: 29%;
  height: 100%; /* Ajusta la altura al 100% del contenedor padre */
  padding: 20px;
}

.user .details {
  background-color: #ffffff;
}

.image-box {
  width: 100%; /* Ancho del cuadro */
  height: 300px; /* Alto del cuadro */
  overflow: hidden; /* Oculta cualquier parte de la imagen que exceda el cuadro */
  padding: 0;
  border: 1px solid rgba(226, 214, 214, 0.877);
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
  padding: 20px;
}

.info .details {
  padding: 0;
  --side-padding: 20px;
  --border-radius: 34px;
  --accent-br: 15px;
}

.button-container {
  display: flex;
  flex-grow: 1;
}

.button-container > .button {
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

.button-container > .button:hover {
  background-color: #111;
  color: white;
}

.clases {
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
  display: inline-block;
  /* background-color: #9bb94f; */
  padding: 10px;
  opacity: 100%;
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
}
.clases-details {
  border-radius: 10px;
  display: block;
  margin-top: 10px;
  width: auto;
  background-color: #b183ae;
  padding: 20px;
}
.clases-text > p :not(:first-child) {
  margin-top: 20px;
}

.clases-text {
  opacity: 100%;
  width: 63%;
  height: max-content;
  float: right;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
}
/* Footer decoration */
.footer {
  margin-top: 530px;
  padding: 10px;
}

/* Estilos para el calendario */
/* Estilos para la caja contenedora */

/* Estilos para el calendario */
.container {
  float: left;
  --side-padding: 20px;
  --border-radius: 34px;
  --accent-br: 15px;
  width: fit-content;
  width: var(--width, 35%);
  height: var(--height, auto);

  /* Resto del código CSS omitido por brevedad */
}

.container .calendar {
  --side-padding: 20px;
  --border-radius: 34px;
  --accent-br: 15px;
}

.container .calendar select {
  background-color: #f3f4f6;
  padding: 15px 20px;
}

.container .calendar__opts,
.container .calendar__buttons {
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
}

.container .calendar__opts {
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  padding: 20px var(--side-padding);
}

.container .calendar__body {
  background-image: linear-gradient(to bottom, #f3f4f6, #fff);
}

.container .calendar__days {
  background-color: #fff;
  padding: 0 var(--side-padding) 10px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.container .calendar__days > div {
  text-align: center;
  font-weight: 700;
  font-size: 1.02rem;
  color: #c5c8ca;
}

.container .calendar__dates {
  padding: 10px var(--side-padding);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.container .calendar__date {
  --height: calc(400px / 6 - var(--side-padding));
  text-align: center;
  height: var(--height);
  line-height: var(--height);
  font-weight: 600;
  font-size: 1.02rem;
  cursor: pointer;
  position: relative;
}

.container .calendar__date::before {
  content: "";
  position: absolute;
  background-color: rgba(255, 255, 255, 0);
  width: 100%;
  height: calc(var(--height) * 0.9);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: var(--accent-br);
  transition: background-color 0.3s ease;
}

.container
  .calendar__date:not(.calendar__date--selected):not(
    .calendar__date--grey
  ):hover::before {
  background-color: #ededed;
}

.container .calendar__date--grey {
  color: #c5c8ca;
  cursor: not-allowed;
}

.container .calendar__date--selected {
  color: #ff374b;
}

.container .calendar__date--selected::before {
  background-color: #ffeaec;
  border-radius: 0;
}

.container .calendar__date--first-date::before {
  border-top-left-radius: var(--accent-br);
  border-bottom-left-radius: var(--accent-br);
}

.container .calendar__date--last-date::before {
  border-top-right-radius: var(--accent-br);
  border-bottom-right-radius: var(--accent-br);
}

.container .calendar__date--range-start::after {
  content: "";
  position: absolute;
  bottom: 3px;
  border-radius: 24px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff374b;
  width: 10px;
  height: 4px;
}

.container .calendar__date--range-end {
  color: #fff;
}

.container .calendar__date--range-end::before {
  box-shadow: 0 15px 20px -3px rgba(255, 55, 75, 0.35);
  background-color: #ff374b;
  border-radius: var(--accent-br);
  z-index: 1;
}

.container .calendar__date--range-end::after {
  content: "";
  position: absolute;
  height: calc(var(--height) * 0.9);
  background-color: #ffeaec;
  width: 50px;
  top: 50%;
  right: 50%;
  transform: translateY(-50%);
}

.container .calendar__date span {
  position: relative;
  z-index: 1;
}

.container .calendar__buttons {
  padding: 10px var(--side-padding) 20px;
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
}

.container .calendar__button {
  cursor: pointer;
}

.container .calendar__button--grey {
  background-color: #f3f4f6;
}

.container .calendar__button--primary {
  background-color: #1752ff;
  color: #fff;
  transition: box-shadow 0.3s cubic-bezier(0.21, 0.68, 0.09, 0.27),
    transform 0.2s linear;
}

.container .calendar__button--primary:hover {
  box-shadow: 0 20px 30px -13px rgba(23, 82, 255, 0.45);
  transform: translateY(-3px);
}

.container .calendar__button--primary:active {
  box-shadow: 0 10px 10px -6px rgba(23, 82, 255, 0.45);
  transform: translateY(-1px);
}

.container body {
  display: grid;
  place-items: center;
  background-color: #eaedf2;
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  margin: 3vmin;
  width: 100%;
  height: 100%;
}

.container select,
.container button {
  font-family: inherit;
  font-weight: 700;
  font-size: 1.02rem;
  border-radius: 20px;
  outline: none;
  border: 0;
  padding: 15px 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.container select {
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='960px' height='560px' viewBox='0 0 960 560' style='enable-background:new 0 0 960 560;' xml:space='preserve'%3E%3Cg%3E%3Cpath d='M935.7,248.5l-416-240c-12.3-7.1-27.8-7.1-40.1,0L24.3,248.5C11.9,255.6,5.6,268.3,5.6,281v234.3c0,13.7,6.3,26.4,18.7,33.5l416,240c6.2,3.6,13.3,5.5,20.3,5.5s14.1-1.9,20.3-5.5l416-240c12.4-7.2,18.7-19.9,18.7-33.6V281C954.3,268.3,948,255.6,935.7,248.5z'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 15px;
  cursor: pointer;
}
</style>
