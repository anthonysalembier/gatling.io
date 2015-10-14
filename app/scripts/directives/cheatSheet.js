app.directive('cheatSheet', function($rootScope) {

  return {
    restrict: 'E',

    template: '<div ng-include="cheatSheetUrl"></div>',

    link: function(scope) {
      console.log($rootScope.version);
      scope.cheatSheetUrl = 'docs/' + $rootScope.version + '/cheat-sheet.html';
    }
  };
});
