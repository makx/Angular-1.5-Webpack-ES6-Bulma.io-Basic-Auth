

export default class LoginController {
  constructor(authService) {
    var vm = this;

    vm.authService = authService;

    vm.authService.authenticate({username: 'maxi', password: 'yep :)'});

    console.log(vm.authService.getUser());
  }
}
