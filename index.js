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
