<template>
  <div class="main">
    <input type="email" placeholder="Email" required  v-model="email"/><br>
    <input type="password" required v-model="password" placeholder="Password"/>
    <div class="warn" v-show="warn">Invalid password of email! </div>
    <div id="hide" />
    <button @click="LogInfo()">Login</button>
    <p id="or">Or</p>
    <button @click="goToSignUp()">Signup</button>
  </div>

</template>

<script>
export default {
    data() {
    return {
      password: null,
      warn:false,
      email: null
    }
  },


  methods: {
    goToSignUp() {
      this.$router.push('/signup');
    },
    LogInfo(){
      var profile = {
        email: this.email,
        password: this.password,
      };
      fetch( "http://localhost:3000/api/login", {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      credentials: 'include',
      body: JSON.stringify(profile),
      })
      .then((response) => {
        if (response.ok === false){
          this.warn=true ;
        }
        else {
          this.$router.push("/");
        }
      })
      .catch((e) => {
        this.$router.push('/signup');
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
#or {
  margin: 0 10px 0 10px;
  font-size: 150%;
  display: inline-block;
  color: white;
}
@media (max-width: 1000px) {
  .main {
    padding: 0;
    margin-top: 10px;
  }
}

</style>