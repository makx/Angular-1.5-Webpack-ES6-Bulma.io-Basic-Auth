export default function($rootScope, $httpBackend, authService, $state) {

  //Validation on every transaction
  $rootScope.$on('$stateChangeStart', (event, next) => {
    console.log(next);
    if(!authService.isAuthenticated() && next.name != 'login') {

      event.preventDefault();

      $state.go('login');
    }
  })

  //Mock Response
  $httpBackend.whenPOST('/login').respond(function(method, url, data, headers) {
    var userData = JSON.parse(data);
    if (userData.username == 'demo') {
      if (userData.password == 'demo') {
        return [200, {user: 'demo', fullname: 'Luis Peralta'}, {}];
      }
      return [422, {}, {}];
    }
    return [404, {}, {}];
  });
}
