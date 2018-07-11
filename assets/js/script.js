const app = new Vue({
  el: '#app',
  data: {
    errors: [],
    inputEmail: '',
    inputPassword: ''
  },
  methods: {
    signIn: function() {
      // https://validatejs.org/#validators-length
      console.log(
        validate(
          { from: 'null' },
          {
            from: {
              email: true,
              length: { maximum: 3 }
            }
          }
        )
      );

      // this.errors = [];
      // if (this.inputEmail.length === 0) {
      //   console.log(111);
      //   this.errors.push('Укажите электронную почту.');
      // }
      // if (!this.inputPassword) {
      //   this.errors.push('Укажите пароль.');
      // }
    }
  }
});
