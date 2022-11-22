<template>
	<div id="SignupApp">

		<div class="input_container">
      <div class="sidebar" style="left: 20px"></div>
           <div class="main">

            <div class="signup_container">


		<ul>
			<li v-bind:class="{ is_valid: contains_amount_characters }">From 8 to 15 characters</li>
			<li v-bind:class="{ is_valid: contains_number }">Contains a number</li>
			<li v-bind:class="{ is_valid: contains_uppercase }">Starts with an uppercase</li>
			<li v-bind:class="{ is_valid: contains_underscore }">Contains character "_"</li>
		</ul>

		<div class="checkmark_container" v-bind:class="{ show_checkmark: valid_password }">
			<svg width="50%" height="50%" viewBox="0 0 140 100">
			<path class="checkmark" v-bind:class="{ checked: valid_password }" d="M10,50 l25,40 l95,-70" />
			</svg>
    </div>


		<input type="text" placeholder="Email" required/>
		<input type="password" @input="checkPassword" v-model="password" placeholder="Password" />
    <button @click="goToHome()">Signup</button>

            </div>

           </div>

    <div class="sidebar" style="left: 20px"></div>


		</div>
	</div>

</template>

<script>
export default {

  data(){
    return {
		      password: '' ,
          contains_amount_characters: false,
          contains_number:false,
          contains_uppercase:false,
          contains_underscore:false,
          valid_password:false


		    }
	},


	methods: {
    goToHome(){
       this.$router.push('/');
    },

		checkPassword() {
			this.password_length = this.password.length;
			const format = /[_]/;

			if (this.password_length > 8 ) {
				this.contains_amount_characters = true;
			} else {
				this.contains_amount_characters = false;
			}

			this.contains_number = /\d/.test(this.password);
			this.contains_uppercase = /[A-Z]/.test(this.password);
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
	},
};
</script>

<style scoped>

body{
  background-color: black;
}
main {
  display: inline-block;
  width: 70%;
  margin: 20px;
}
signup_container{

         position: relative;
         padding: 30px;
         box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}        border-radius: 6px;
         background: #FFF;

/* .input_container {
	position: relative;
	padding: 30px;
	box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
	border-radius: 6px;
	background: #FFF;
}

  */ 


sidebar {
  display: inline-block;
  position: relative;
  margin: 20px;
  width: 15%;
  min-height: 100%;
  background-color: rgb(57,91,100, 50%);
  border-radius: 20px;
  background-image: url("../assets/giphy.gif");
}

.input_container{
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
}

input[type="password"],[type="text"] {
	line-height: 1.5;
	display: block;
	color: rgba(136, 152, 170, 1);
	font-weight: 300;
	width: 100%;
	height: calc(2.75rem + 2px);
	padding: .625rem .75rem;
	border-radius: .25rem;
	background-color: #fff;
	transition: border-color .4s ease;
	border: 1px solid #cad1d7;
	outline: 0;
}

input[type="password"]:focus {
	border-color: rgba(50, 151, 211, .45);
}


/* Checkmark & Strikethrough --------- */

.is_valid { color: rgba(136, 152, 170, 0.8); }
.is_valid:before { width: 100%; }

.checkmark_container {
	border-radius: 50%;
	position: absolute;
	top: -15px; right: -15px;
	background: #2ecc71;
	width: 50px; height: 50px;
	visibility: hidden;
	opacity: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: opacity .4s ease;
}


button {

font-family: monospace;
font-size: 200%;
padding: 10px;
border-radius: 20px;
cursor: pointer;

 }


button:hover {
  color: #E7F6F2;
  background-color: #2C3333;
  text-decoration: none;
  shape-margin: inherit;
  border-style: solid;
  border-color: #2C3333;
}


.show_checkmark {
  visibility: visible;
  opacity: 1;
}

.checkmark {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: white;
  stroke-width: 15;
  stroke-linecap: round;
  stroke-dasharray: 180;
  stroke-dashoffset: 180;
}

.checked { animation: draw 0.5s ease forwards; }

@keyframes draw {
  to { stroke-dashoffset: 0; }
}
</style>