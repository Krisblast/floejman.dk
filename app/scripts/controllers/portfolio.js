'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('PortfolioCtrl', function () {
    this.portfolioItems = [
      {
        id: 'reepay',
        image: 'images/reepay-logo.svg',
        headline: 'Reepay',
        text: 'I was hired in Reepay as lead frontend developer for their Dashboard Application. Reepay delivers a powerful subscription engine to handle automated payments.',
        aniScroll: false
      },
      {
        id: 'fritid',
        image: 'images/fritiddk.png',
        headline: 'Fritid.dk',
        text: 'I helped to startup and develop the early frontend for Fritid.dk a online platform dedicated to find leisure events happening close to you.',
        aniScroll: true
      },
      {
        id: 'goimba',
        image: 'images/goimba-black.png',
        headline: 'GOIMBA',
        text: 'GOIMBA was initially a school project which turned into a startup. The goal was to build a free-to-play betting platform for eSports. I co-founded and developed the frontend in this venture',
        aniScroll: true
      }

    ];

    this.otherProjects = [
      {
        id: 'floating',
        image: 'images/reepay-logo.svg',
        headline: 'Floating Island',
        link: 'http://floejman.dk/projects/upload/floejman.dkfull/',
        text: ''
      },
      {
        id: 'pokemon',
        image: 'images/reepay-logo.svg',
        headline: 'Pokemon Calculator',
        link: 'http://floejman.dk/pokemonv3/app/#/',
        text: ''
      },
      {
        id: 'starstorm',
        image: 'images/reepay-logo.svg',
        headline: 'Starstorm',
        link: 'http://floejman.dk/starstorm/#/',
        text: ''
      },
      {
        id: 'zerog',
        image: 'images/reepay-logo.svg',
        headline: 'Project Zerog',
        link: 'http://floejman.dk/projects/zerog-frontend/app/#/dashboard',
        text: ''
      },
      {
        id: 'los',
        image: 'images/reepay-logo.svg',
        headline: 'League Of Sharks',
        link: 'http://floejman.dk/projects/LoSSignup/app/#/signup',
        text: ''
      },
      {
        id: 'multi',
        image: 'images/reepay-logo.svg',
        headline: 'Multi Stream Viewer',
        link: 'http://floejman.dk/projects/multi/#/view1',
        text: ''
      }

    ];
  });
