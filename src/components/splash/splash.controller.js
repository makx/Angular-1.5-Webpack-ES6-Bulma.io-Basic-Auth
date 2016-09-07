
export default class SplashController {
  constructor(authService){
      var vm = this;

      vm.authService = authService;

      console.log(vm.authService.getUser());
  }


}
