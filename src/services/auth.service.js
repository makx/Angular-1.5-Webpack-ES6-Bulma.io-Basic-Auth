export default class AuthService {
  constructor(){
    var vm = this;

    vm.user = {
      username: 'nana',
      password: 'nene'
    }

  }

  getUser() {
    return this.user;
  }

  authenticate(user) {
    this.user = user;
  }

  login(user){

  }

  logout(user){

  }

  isAuthenticated(){

  }

}
