export default class AuthService {
  constructor($http, $q, $cookies){
    var vm = this;
    vm.$http = $http;
    vm.$q = $q;
    vm.$cookies = $cookies;
  }

  getUser() {
    return this.user;
  }

  authenticate(user) {
    var vm = this;
    if(user) {
      vm.$cookies.putObject('user', user)
      vm.user = user;
      return true;
    }

    return false;

  }

  login(credentias){
    var vm = this;
    return vm.$http.post('/login', credentias).then(function(response){
      return response;
    }, function(response){
      return vm.$q.reject(response);
    });
  }

  logout(user){
    this.user = null;
    this.$cookies.putObject('user', null);
  }

  isAuthenticated(){
    return this.user;
  }

}
