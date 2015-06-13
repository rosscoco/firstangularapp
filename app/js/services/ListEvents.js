eventsApp.factory(
	'ListEvents',
	function( $http, $q ) {
		return {
			fromFolder: function fromFolder( path )
			{
				var deferred = $q.defer();

				$http({ method:'GET', url:path })
					.success( function( data, status, headers, config ) 
					{
						var div			= document.createElement('div');
						div.innerHTML	= data;
						var elements 	= div.getElementsByTagName('li');
						
						var files 		= [];
						
						for ( var i = 0; i < elements.length ; i++ )
						{
							files.push( elements[ i ].children[ 0 ].text );
						}
						
						deferred.resolve( files );
					})
					.error( function( data, status, headers, config ) 
					{
						deferred.reject( data );
					});		

				return deferred.promise;
			}
		};
	});