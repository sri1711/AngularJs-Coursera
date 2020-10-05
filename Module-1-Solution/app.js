(function(){
	'use strict';

	angular.module('LunchCheck',[])

	.controller('LunchCheckController',LunchController)

	LunchController.$inject=['$scope'];

	function LunchController($scope){
		$scope.items="";
		$scope.msg="";
		$scope.msgset = function(){
			var NoOfItems = noItem();
			if($scope.items===""){
				$scope.msg="Please enter data first";
			}
			else if(NoOfItems > 3){
				$scope.msg="Too Much!!";
			}
			else if(NoOfItems <= 3 && NoOfItems >= 1){
				$scope.msg="Enjoy!!";
			}
		}

		function noItem(){
			var itemarray = $scope.items.split(",");
			var no_of_item =  itemarray.length;
			for(var i=0;i<itemarray.length;i++){
				if(itemarray[i]==="")
					no_of_item--;
			}
			return no_of_item;
		}
	}

})();