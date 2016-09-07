import angular from 'angular';

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
  Components.name,
  Services.name
];
angular.module('app',dependencies)
