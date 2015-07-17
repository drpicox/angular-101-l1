(function() {
	'use strict';

	angular
		.module('helloApp')
		.directive('haHello', HelloDirective);

	function HelloDirective() {
		var directive = {
			restrict: 'E',
			templateUrl: './HelloDirective.tpl.html',
			scope: {},
			controller: HelloController,
			controllerAs: 'vm',
		};

		return directive;
	}

	HelloController.$inject = [];
	function HelloController  () {
		var vm = this;

		vm.hello = '';
		vm.sayHello = sayHello;

		function sayHello() {
			vm.hello = 'hello!';
		}
	}
})();