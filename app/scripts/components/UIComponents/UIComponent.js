angular.module('appApp').component('overlapperWhite', {
  bindings: {
    top: '=?',
    height: '=?'
  },
  template: '<div class="overlapper" ng-style="{ top: $ctrl.top, height: $ctrl.height }"></div>'
});


angular.module('appApp').component('overlapperBlack', {
  bindings: {
    top: '=?',
    height: '=?'
  },
  template: '<div class="overlapper-2" ng-style="{ top: $ctrl.top, height: $ctrl.height }"></div>'
});


angular.module('appApp').component('mainContainer', {
  bindings: {
    background: '=?',
    minHeight: '=?',
    height: '=?',
    textAlign: '=?'
  },
  transclude: true,
  template: '<div class="mainOne" ng-style="{ minHeight: $ctrl.minHeight, background: $ctrl.background, textAlign: $ctrl.textAlign }" ng-transclude></div>'
});


angular.module('appApp').component('secondContainer', {
  bindings: {
    background: '=?',
    minHeight: '=?',
    height: '=?',
    textAlign: '=?'
  },
  transclude: true,
  template: '<div class="mainTwo" ng-style="{ minHeight: $ctrl.minHeight, background: $ctrl.background, textAlign: $ctrl.textAlign }" ng-transclude></div>'
});




angular.module('appApp').component('wave', {
  bindings: {
    waveType: '=?'
  },
  template: '<div class="wave {{$ctrl.waveType}}"></div>'
});
