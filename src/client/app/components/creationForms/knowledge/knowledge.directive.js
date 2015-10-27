(function() {
  'use strict';

  angular.module('app.components.creationForms.knowledge')
    .directive('srKnowledgeForm', knowledgeDirective);

  function knowledgeDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/creationForms/knowledge/knowledge.html'
    }
  }

})();
