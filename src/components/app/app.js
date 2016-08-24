import angular from 'angular';

export default angular.module('App', [])

.component('app', {
  controller: function(){
    console.log(this);
  },
  template: '<h1> App hello world',
  controllerAs: 'vm'
});
