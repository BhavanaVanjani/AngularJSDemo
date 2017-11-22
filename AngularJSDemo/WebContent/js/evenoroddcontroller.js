/**
 * Even Or Odd
 * 1 st parameter name of controller
 * 2 nd parameter function definition.
 */
app.controller('EvenOrOddController',function($scope,EvenOrOddService)
{
	$scope.evenOrOdd= function()
	{
		
			$scope.result=EvenOrOddService.evenOrOdd($scope.num)
	}
})