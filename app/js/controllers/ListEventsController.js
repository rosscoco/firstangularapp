eventsApp.controller(
	'ListEventsController',
	function( $scope, ListEvents ) {

		$scope.eventList = ListEvents.fromFolder('./data/');

		$scope.eventList.then( function( result ){
			console.log("List Events Controller:" + result );
		});
	})

