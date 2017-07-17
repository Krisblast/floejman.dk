'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MainCtrl', function () {
    this.skills = {
      minor:
        [
          "Skill 1",
          "Skill 2",
          "Skill 3",
          "Skill 4",
          "Skill 5"

        ],

      major: [

        {
          logo: 'images/angular-icon-color.svg',
          headline: 'AngularJS',
          text: 'I have used AngularJS in countless projects and pretty much fell in love with it since the first time I used it. Its a wonderful framework for both fast prototypes or large scale production applications. Just remember to do it The Angular Way!'
        },
        {
          logo: 'images/html-icon.png',
          headline: 'HTML/CSS',
          text: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Nullamdictum felis eu pede mollis pretium.'
        },
        {
          logo: 'images/agile_icon.png',
          headline: 'Agile development',
          text: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.  feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aeneanimperdiet. Etiam ultricies nisi vel augue.'
        },
        {
          logo: 'images/git_logo.png',
          headline: 'GIT',
          text: 'Maecenas tempus,  rhoncus, sem quam semper libero, sit amet adipiscing  luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut'
        }
      ]
    };

  });

