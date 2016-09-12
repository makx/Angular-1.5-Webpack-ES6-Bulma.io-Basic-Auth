

export default class LoginController {
  constructor(authService, $state) {
    var vm = this;

    vm.authService = authService;
    vm.$state = $state;

    vm.loginError = false;

    vm.credentials = {
      username: null,
      password: null
    };
  }



  login(credentials) {
    var vm = this;

    if(vm.loginForm.$valid){
      vm.authService.login(credentials).then(function(response){
        //success
        vm.authService.authenticate(response.data);
        vm.$state.go('splash');
        return;
      }, function(response){
        //failure
        vm.loginError = true;
        return;
      });
    }
  }
}
