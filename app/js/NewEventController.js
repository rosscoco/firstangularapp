eventsApp.controller(
	'NewEventController',
	function( $scope ) {

		$scope.saveEvent = function saveEvent( event )
		{
			console.log(event.name);
		}

		$scope.cancelEvent = function cancelEvent()
		{
			window.location = "./index.html";
		}
	})