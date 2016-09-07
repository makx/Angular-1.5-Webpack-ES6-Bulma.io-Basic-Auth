import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './login.template.html';
import controller from './login.controller';

export default angular.module('login.auth', [
  uiRouter
])

/*
Route State Configuration
 */
.config(function($urlRouterProvider, $stateProvider){
  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>',
      authenticate: false
    })
})

.component('login', {
  controller,
  template,
  controllerAs: 'vm'
});
