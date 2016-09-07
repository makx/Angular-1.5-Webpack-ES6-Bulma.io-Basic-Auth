import angular from 'angular';

import template from './app.template.html';
/**
 * Main Application
 */
export default angular.module('App', [])

.component('app', {
  template,
  controller: () => {},
  controllerAs: 'vm'
});
