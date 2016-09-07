import angular from 'angular';


/**
 * Components
 */
/*
Main Component
 */
import App from './app/app';

/*
Application Layout
 */
import Layout from './layout/layout';

/*
Auth Components
 */
import Login from './auth/login/login';

/*
Splash Page
 */
import Splash from './splash/splash';

export default angular.module('components.app', [
  App.name,
  Layout.name,
  Login.name,
  Splash.name
]);
