eventsApp.controller(
	'EditUserController',
	function( $scope, getGravatarUrl ) {

		$scope.user = {};

		$scope.getGravatarUrl = function( url )
		{
			return getGravatarUrl.build(url);
		}
	})