(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.mincomplete = f()}})(function(){var define,module,exports;module={exports:(exports={})};
'use strict';

/* global Event */

module.exports = function (settings) {
  if (!typeof settings === 'object' || !settings.input || !settings.suggestions) {
    throw new Error('Missing required settings.');
  }
  var highlightedClass = settings.highlightedClass || 'highlighted';
  var highlightedClassSelector = '.' + highlightedClass;
  var input = settings.input;
  var suggestions = settings.suggestions;
  var KEY_UP = 38;
  var KEY_DOWN = 40;
  var KEY_TAB = 9;
  var KEY_ENTER = 13;

  input.addEventListener('keydown', function (e) {
    if (suggestions.childNodes.length === 0) {
      // No suggestions available
      return;
    }
    var which = e.which || e.keyCode;
    switch (which) {
      case KEY_UP:
        e.preventDefault();
        move('up', suggestions, highlightedClass, highlightedClassSelector);
        break;
      case KEY_DOWN:
        e.preventDefault();
        move('down', suggestions, highlightedClass, highlightedClassSelector);
        break;
      case KEY_TAB:
        onTab(e, suggestions);
        break;
      case KEY_ENTER:
        onEnter(e, suggestions);
        break;
      default:
        break;
    }
  });

  function move(direction, suggestions, highlightedClass, highlightedClassSelector) {
    var lastIndex = suggestions.childNodes.length - 1;
    var currentSuggestion = suggestions.querySelector(highlightedClassSelector) || suggestions.childNodes[0];
    currentSuggestion.classList.remove(highlightedClass);
    var nextSuggestion;
    if (direction === 'up') {
      nextSuggestion = currentSuggestion.previousSibling || suggestions.childNodes[lastIndex];
    } else {
      nextSuggestion = currentSuggestion.nextSibling || suggestions.childNodes[0];
    }
    nextSuggestion.classList.add(highlightedClass);
  }

  function onTab(e, suggestions) {
    e.preventDefault();
    e.target.value = suggestions.querySelector(highlightedClassSelector).innerText;
    e.target.dispatchEvent(new Event('input'));
  }

  function onEnter(e, suggestions) {
    onTab(e, suggestions);
  }
};

return module.exports;});
