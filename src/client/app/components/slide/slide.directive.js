(function(){
  'use strict';

  angular.module('app.components.slide')
  .directive('srSlideable', slideableDirective)
  .directive('srSlideToggle', slideToggleDirective);

  function slideableDirective() {
    return {
      restrict:'C',
      compile: compile
    };
  }

  function compile(element, attr) {
    // wrap tag
    var contents = element.html();
    element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

    return function postLink(scope, element, attrs) {
      // default properties
      attrs.duration = (!attrs.duration) ? '.5s' : attrs.duration;
      attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
      element.css({
        'overflow': 'hidden',
        'height': '0px',
        'transitionProperty': 'height',
        'transitionDuration': attrs.duration,
        'transitionTimingFunction': attrs.easing
      });
    };
  }

  function slideToggleDirective() {
    return {
      restrict: 'A',
      link: link
    };
  }

  function link(scope, element, attrs) {
    // var target = document.querySelector(attrs.srSlideToggle);
    var target = element.find(attrs.srSlideToggle);
    console.log('slide element', element);
    console.log('slide target', target);
    attrs.expanded = false;
    element.bind('click', function() {
      // var content = target.querySelector('.slideable_content');
      var content = target.find('.slideable_content');
      console.log('slide content', content);
      if(!attrs.expanded) {
        content.style.border = '1px solid rgba(0,0,0,0)';
        var y = content.clientHeight;
        console.log(y);
        content.style.border = 0;
        target.style.height = (y+5) + 'px';
      } else {
        target.style.height = '0px';
      }
      attrs.expanded = !attrs.expanded;
    });
  }
})();
