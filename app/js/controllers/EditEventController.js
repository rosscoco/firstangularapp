eventsApp.controller(
	'EditEventController',
	function( $scope, ListEvents, eventData ) {

		$scope.eventFileList = ListEvents.fromFolder('./data/');



		$scope.createEvent = function()
		{
			var newID = $scope.eventFileList.length + 1;
			$scope.event = {name:"New Event!", id:newID, file:'event' + newID + '.json'};
		};

		$scope.saveEvent = function()
		{
			eventData.saveEvent( $scope.event );
		};


		$scope.cancelEvent = function cancelEvent()
		{
			window.location = "./index.html";
		};

		$scope.loadEventData = function loadEventData( eventDataFile )
		{
			$scope.event = eventData.getEvent( eventDataFile );
		};
	});