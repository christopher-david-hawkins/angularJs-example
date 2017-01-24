var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$log', '$filter', '$timeout', ($scope, $log,  $filter, $timeout)=>{

	$scope.name="";

	$scope.nameCaps = ()=>{
		return $filter('uppercase')($scope.name);
	}

	$timeout(()=>{
		$scope.name = "user";
		$log.info("Name Changed")
	}, 3000)

}])


myApp.controller('secondController', ['$scope', '$log', ($scope, $log)=>{

	$log.info("This is an angular application");

	$scope.list = [
	"PRACTICE",
	"STUDY",
	"EAT",
	"REPEAT",
	]

}])


myApp.controller('thirdController', ['$scope', '$log', '$http', ($scope, $log, $http)=>{
	$http.get("https://jsonplaceholder.typicode.com/users")
	.then(function (response) {$scope.getInfo = response.data;});
}])