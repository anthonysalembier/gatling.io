app.directive('cheatSheet', function ($rootScope) {

  return {
    restrict: 'E',

    template: '<div ng-include="cheatSheetUrl"></div>',

    link: function (scope) {
      scope.cheatSheetUrl = 'docs/2.2.0/cheat-sheet.html';
    }
  };
});
