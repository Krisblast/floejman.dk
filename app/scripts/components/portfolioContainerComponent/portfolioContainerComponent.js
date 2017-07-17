function portfolioContainerComponentCtrl() {
  this.aniScroll = false;
}

angular.module('appApp').component('portfolioContainerComponent', {
  templateUrl: 'scripts/components/portfolioContainerComponent/portfolioContainerComponent.html',
  controller: portfolioContainerComponentCtrl,
  bindings: {
    portfolioItem: '=',
    odd: '=',
    useAniScroll: '=?'
  }
});
