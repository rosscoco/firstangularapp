eventsApp.factory(
	'eventData', 
	function( $resource, $q ){

		//var resource = $resource( "data/:id", { id:'@id' });
		var resource = $resource( "data/:file");
		return { 
			getEvent: function( filename )
			{
				var deferred = $q.defer();

				resource.get({ file:filename },
					function success( data ) {
						deferred.resolve( data );
					},
					function error( status ) {
						deferred.reject( status );
					});

				return resource.get({ id:filename });
			},

			saveEvent: function( data )
			{
				var deferred = $q.defer();
				data.file = fileName;	
				resource.save(data,
					function success( response )
					{
						deferred.resolve( data );
					},
					function error( response )
					{
						deferred.reject( status );
					});
			}

		};
	});