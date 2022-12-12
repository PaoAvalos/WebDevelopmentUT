<template xmlns:v-bind="">
  <div class="main">
      <input type="email" placeholder="Email" required v-model="email"/><br>
      <input type="password" @input="checkPassword" @click='show_req = !show_req' v-model="password"
             placeholder="Password"/>

     <div class="warn" v-show="warn">Invalid password! </div>
      <div id="hide" >

        <ul>
          <li v-bind:class="{ is_valid: contains_amount_characters }">From 8 to 15 characters</li>
          <li v-bind:class="{ is_valid: contains_number }">Contains a number</li>
          <li v-bind:class="{ is_valid: contains_num_lower }">Contains 2 lowercase letter</li>
          <li v-bind:class="{ is_valid: contains_uppercase }">Starts with an uppercase</li>
          <li v-bind:class="{ is_valid: contains_underscore }">Contains character "_"</li>

        </ul>

      </div>

      <button @click="LogInfo()">Signup</button>
  </div>

</template>

<script>
export default {

  data() {
    return {
      password: null,
      contains_amount_characters: false,
      contains_num_lower:false,
      contains_number: false,
      contains_uppercase: false,
      contains_underscore: false,
      valid_password: false,
      show_req: false,
      warn:false,
      email:null


    }
  },


  methods: {
    goToHome() {
      if (this.valid_password === true) {
        this.warn=false ;
        this.$router.push('/');
      }
      else {
        this.warn=true ;
      }
    },

    checkPassword() {
      this.password_length = this.password.length;
      const format = /[_]/;

      if (this.password_length > 8 && 15 > this.password_length) {
        this.contains_amount_characters = true;
      } else {
        this.contains_amount_characters = false;
      }

      this.contains_number = /\d/.test(this.password);
      
      console.log(this.password[0]);
       if (this.password[0] === this.password[0].toUpperCase()) {
         this.contains_uppercase = true;
       } else {
         this.contains_uppercase = false;
       }
      if ((this.password.match(/[a-z]/g) || []).length >1)  {

       this.contains_num_lower = true;
     } else {
       this.contains_num_lower = false;
     }




      this.contains_underscore = format.test(this.password);

      if (
          this.contains_amount_characters === true &&
          this.contains_underscore === true &&
          this.contains_uppercase === true &&
          this.contains_number === true
      ) {
        this.valid_password = true;
      } else {
        this.valid_password = false;
      }
    },

    LogInfo(){
      var profile = {
        email: this.email,
        password: this.password,
      };
      fetch( "http://localhost:3000/api/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        credentials: 'include',
        body: JSON.stringify(profile),

        // here I need to, give away login info, and receive a response from backend, if info correct then set bool
        // to true, if not then go to log in.
      })

          //make response be positive
          .then((response) => {
            this.$router.push("/");
            console.log(" registered user");

          })
          .catch((e) => {
            console.log(e);
            console.log("not registered,error happened");

          });
    },
  },
};
</script>

<style scoped>

.main {
    font-family: monospace;
    padding: 20px;
    background-color: #395B64;
    border-radius: 20px;
    text-align: center;
    font-size: 200%;
    align-items: stretch;
    justify-content: space-around;
}
.warn  {
        margin: 10px;
        color: red;
}
input {
    font-family: monospace;
    font-size: 100%;
    padding: 10px 10px 10px 10px;
    margin-top: 10px;
    border-radius: 20px; 
    border: none;
    box-sizing: border-box;
    width: 50%;
}
input::placeholder {color: rgb(210, 210, 210)}

.is_valid {
  color: white;
}

.is_valid:before {
  width: 100%;
}





@media (max-width: 1000px) {
     .main {
       padding: 0;
       margin-top: 10px;

     }
}

</style>