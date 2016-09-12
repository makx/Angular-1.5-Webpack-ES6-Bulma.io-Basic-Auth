import angular from 'angular';

import uiRouter from 'angular-ui-router';

/*
Externals
 */
import ngMockE2E from 'angular-mocks/ngMockE2E';
import ngCookies from 'angular-cookies';

/*
Services
 */
import Services from './services/services';

/*
Components
 */
import Components from './components/components';

import './styles/app.scss';

/**
 * Dependencies
 */
var dependencies = [
  uiRouter,
  ngMockE2E,
  ngCookies,
  Components.name,
  Services.name
];

angular.module('app',dependencies)
