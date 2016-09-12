import angular from 'angular';

import template from './splash.template.html';
import controller from './splash.controller';


export default angular.module('splash',[
])

.component('splash', {
  controller,
  template,
  controllerAs: 'vm'
})

.config(function($stateProvider){
  $stateProvider
    .state("splash", {
      url: '/',
      template: '<splash></splash>',
      authenticate: true
    })
});
