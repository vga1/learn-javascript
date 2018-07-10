const app = new Vue({
  el:'#app',
  data:{
    errors:[],
    inputEmail: null,
    inputPassword:null

  },
  methods:{
    checkForm:function(e) {
      this.errors = [];
      if(!this.name) this.errors.push("Укажите имя.");
      if(!this.this.email) {
        this.errors.push("Укажите электронную почту.");
      } else if(!this.validEmail(this.email)) {
        this.errors.push("Укажите корректный адрес электронной почты.");        
      }
      if(!this.errors.length) return true;
      e.preventDefault();
    },
    validEmail:function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
})