'use strict';

eventsApp.filter(
	'formatEventName',
	function()
	{
		return function( eventName )
		{
			var eventName = eventName.split('.')[0];
			return eventName.slice(0,1).toUpperCase() + eventName.slice(1);
		}
	})
