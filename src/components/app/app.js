import angular from 'angular';

import template from './app.template.html';

import AppRun from './app.run';
/**
 * Main Application
 */
export default angular.module('App', [])

.component('app', {
  template,
  controller: () => {},
  controllerAs: 'vm'
})

.run(AppRun);
