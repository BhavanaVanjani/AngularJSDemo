/**
 * NameController
 */
app.controller('NameController',function($scope)
{
  $scope.welcome=function()
  {
	  $scope.welcomeMessage="Welcome " + $scope.name;
  }
	})