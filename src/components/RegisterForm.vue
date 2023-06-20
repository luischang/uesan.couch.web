<template>
    <div class="container">
    <h5>Register</h5>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="firstname"><b>First Name</b></label>
    <input type="text" v-model="user.firstName" placeholder="First Name"  required>
    <label for="lastname"><b>Last Name</b></label>
    <input type="text" v-model="user.lastName" placeholder="Last Name"  required>
    <label for="dateofbirth"><b>Date of birth</b></label>
    <input type="text" v-model="user.dateOfBirth" placeholder="Date of birth"  required>
    <label for="lastname"><b>Country</b></label>
    <input type="text" v-model="user.country" placeholder="Country"  required>
    <label for="lastname"><b>Address</b></label>
    <input type="text" v-model="user.address" placeholder="Address"  required>
    <label for="email"><b>Email</b></label>
    <input type="text" v-model="user.email" placeholder="Enter Email" name="email" id="email" required>
    <label for="psw"><b>Password</b></label>
    <input type="password" v-model="user.password" placeholder="Enter Password" name="psw" id="psw" required>   
    <hr>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <button @click="signUp"  class="registerbtn">Register</button>
  </div>

  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>

</template>

<style>
* {box-sizing: border-box}

/* Add padding to containers */
.container {
  padding: 16px;
  display: grid;
  justify-content: center;
  align-items: center;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity:1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}

</style>

<script>
import axios from 'axios'

export default{
    name:"RegisterForm",
    data(){
        return {
            user:{
                firstName:"",
                lastName:"",
                dateOfBirth:"",
                country:"",
                address:"",
                email:"",
                password:""
            }
        }
    },
    methods: {
        signUp(){
            //console.log("Aquí registrare....." + JSON.stringify(this.user))
      var url = 'http://localhost:5211/api/User/SignUp'
      
      axios.post(url, this.user)
        .then(response => {
          console.log("Aquí va la respuesta " + JSON.stringify(response))
          this.$q.notify({
            message: "Registro exitoso",
            color: "positive",
            position: "bottom",
            timeout: 3000
          });
          this.$router.push("/")
        }).catch(error => {
          console.log("Ocurrió un error " + error)
          this.$q.notify({
            message: "Ocurrió un error",
            color: "negative",
            position: "top",
            timeout: 3000
          });
        })
        }
    }



}

</script>

