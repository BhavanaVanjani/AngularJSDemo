/**
 * Controller
 * 1st parameter name of controller.
 * 2nd parameter is function definition.
 */
app.controller('MessageController',function($scope){
	$scope.message="Welcome to Angular JS!!!"
	$scope.user="Hello"
	$scope.intValue=10;
	$scope.floatValue=100.9;
	$scope.person={'id':10,'name':'John','age':18};
	$scope.employees=[{'empno':100,'empname':'James','dept':'HR'},
		              {'empno':101,'empname':'Bond','dept':'Accounts'},
	                   {'empno':102,'empname':'Michael','dept':'IT'}]
})

