'use strict';

/* Controllers */

eventsApp.controller(
	'EventsController',
	function( $scope ) {

		$scope.event = {
			name:'My Awesome Event',
			date:'10 April 2015',
			time:'15:00AM',
			location : {
				address:'100 Acacia Road',
				city:'Chelmsford',
				state:'Essex' },
			sessions:[
				{
					name:'Awesome Event About Controllers',
					creatorName:'Bob Smith',
					duration:'1hr',
					level:"Advanced",
					abstract:'In this session you will do a whole heap of stuff on controllers',
					upVoteCount:10
				},
				{
					name:'Awesome Event About Controllers',
					creatorName:'Bob Smith',
					duration:'1hr',
					level:"Advanced",
					abstract:'In this session you will do a whole heap of stuff on controllers',
					upVoteCount:10
				},
				{
					name:'Awesome Event About Controllers',
					creatorName:'Bob Smith',
					duration:'1hr',
					level:"Advanced",
					abstract:'In this session you will do a whole heap of stuff on controllers',
					upVoteCount:10
				}
			]
		};

		$scope.decrementVoteCount = function decrementVoteCount( session )
		{
			console.log(session);
			session.upVoteCount--;
		}

		$scope.incrementVoteCount = function incrementVoteCount( session )
		{
			session.upVoteCount++;
		}


	})

