export default class LayoutController {
  constructor(authService, $state){
    var vm = this;

    vm.authService = authService;
    vm.$state = $state;
  }

  logout() {
    var vm = this;
    vm.authService.logout();
    vm.$state.go('login');
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
