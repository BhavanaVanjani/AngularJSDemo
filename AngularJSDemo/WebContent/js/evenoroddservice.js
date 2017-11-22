/**
 *EvenOrOddService 
 */
app.factory('EvenOrOddService',function()
{
	var service={}  //instantiated
	service.evenOrOdd=function(num)
	{
		if(num%2==0)
		{
			return  num + " Even";
		}
		else
		{
			return  num + " Odd";
		}
		
	}
	
	return service
	
})

 