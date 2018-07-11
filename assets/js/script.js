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
    }
  }
});
