import angular from 'angular';

/*
Components
 */
import App from './components/app/app';

/**
 * Dependencies
 */
var dependencies = [
  App.name,
];
angular.module('app',dependencies)
