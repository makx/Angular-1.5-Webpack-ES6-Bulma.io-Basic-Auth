import angular from 'angular';

import template from './layout.template.html';
import controller from './layout.controller';

export default angular.module('app.layout', [])

.component('layout',{
  transclude: true,
  template,
  controller,
  controllerAs: 'vm'
});
