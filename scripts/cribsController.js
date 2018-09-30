angular
	.module('ngCribs')
	.controller('cribsController', function($scope, cribsFactory){

		$scope.cold;

		cribsFactory.getCribs().then(function (response){
			$scope.cold = response.data;	
		});

		
	});