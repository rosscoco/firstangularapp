eventsApp.factory(
	'eventData', 
	function( $http, $q ){
		return { 
			getEvent: function( url ){

				var deferred = $q.defer();

				$http({method:'GET', url:url })
					.success( function( data, status, headers, config ) {
						deferred.resolve(data);
					})
					.error(function( data, status, headers, config ) {
						deferred.reject(status);
					});

				return deferred.promise;
			}
		}
	})