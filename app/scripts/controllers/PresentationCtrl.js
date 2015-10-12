'use strict';

/**
 * @ngdoc function
 * @name gatling.io.controller:PresentationCtrl
 * @description
 * # PresentationCtrl
 * Controller of the presentation view
 */

var PresentationCtrl = function ($scope, $location) {

  //------------------------------------------------------//
  //                   Scope variables                    //
  //------------------------------------------------------//

  $scope.views = {
    values: [
      {
        title: 'VALUES_TITLE_1',
        img: 'images/gatling.png',
        text: 'VALUES_CONTENT_1'
      },
      {
        title: 'VALUES_TITLE_2',
        img: 'images/gatling.png',
        text: 'VALUES_CONTENT_2'
      },
      {
        title: 'VALUES_TITLE_3',
        img: 'images/gatling.png',
        text: 'VALUES_CONTENT_3'
      }
    ],
    why: [
      {
        title: 'WHY_TITLE_1',
        img: 'images/gatling.png',
        text: 'WHY_CONTENT_1'
      },
      {
        title: 'WHY_TITLE_2',
        img: 'images/gatling.png',
        text: 'WHY_CONTENT_2'
      },
      {
        title: 'WHY_TITLE_3',
        img: 'images/gatling.png',
        text: 'WHY_CONTENT_3'
      },
      {
        title: 'WHY_TITLE_4',
        img: 'images/gatling.png',
        text: 'WHY_CONTENT_4'
      }
    ],
    history: [
      {
        title: 'HISTORY_TITLE_1',
        img: 'images/gatling.png',
        text: 'HISTORY_CONTENT_1'
      },
      {
        title: 'HISTORY_TITLE_2',
        img: 'images/gatling.png',
        text: 'HISTORY_CONTENT_2'
      }
    ]
  };

  $scope.selectedView = null;

  //-----------------------------------------------//
  //                   Watchers                    //
  //-----------------------------------------------//

  $scope.$watch('location', function() {
    if ($location.$$url === '/values') {
      $scope.selectedView = $scope.views.values
    }
    switch ($location.$$url) {
      case '/values' :
        $scope.selectedView = $scope.views.values;
        break;
      case '/why' :
        $scope.selectedView = $scope.views.why;
        break;
      case '/history' :
        $scope.selectedView = $scope.views.history;
        break;
    }

  });

};

angular.module('gatling.io').controller('PresentationCtrl', ['$scope', '$location', PresentationCtrl]);
