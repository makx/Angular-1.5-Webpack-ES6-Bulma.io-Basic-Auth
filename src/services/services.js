import angular from 'angular';

/*
Services
 */
import AuthService from "./auth.service";

export default angular.module('app.services',[])

.service('authService', AuthService);
