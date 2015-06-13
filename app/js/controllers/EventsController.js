

/* Controllers */

eventsApp.controller(
	'EventsController',
	function( $scope, eventData ) {
		'use strict';
		$scope.sortorder = "-upVoteCount";

		$scope.event = eventData.getEvent('event1.json');

		//$scope.event is now a promise to a deferred async function call.
		//however angular knows how to bind to the result of this function.

		//if we need to refer to the success/failure state then we can access this through the promise object

		// $scope.event.then( function success( data )
		// {
		// 	//now we can reference the async data received
		// }, function failure( status )
		// {

		// });

		$scope.decrementVoteCount = function decrementVoteCount( session )
		{
			//do not refer to $scope.event in here as until the promise is fulfilled it is a deferred function.
			//if you need to refer to $scop.event, pass an event object in here from the view.
			console.log( session );
			session.upVoteCount--;
		};

		$scope.incrementVoteCount = function incrementVoteCount( session )
		{
			session.upVoteCount++;
		};
	});

