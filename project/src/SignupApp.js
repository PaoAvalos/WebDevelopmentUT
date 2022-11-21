
const App = new Vue({
	
	el: "#SignupApp",
	data: {
		password: null,
		password_length: 0,
		contains_amount_characters: false,
		contains_number: false,
		contains_uppercase: false,
		contains_underscore: false,
		valid_password: false
	},

	methods: {
		checkPassword() {
			this.password_length = this.password.length;
			const format = /[_]/;

			if (this.password_length > 8 && 15 > this.password_length) {
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
		}
	}
});
