# mincomplete [![NPM version][npm-image]][npm-url]

> a very minimal autocomplete typeahead autosuggestion select list highlighter

## FYI

Since this is a very minimal module (not designed to be robustly extended and configured), I highly recommend using [**Distiller**](https://github.com/busterc/distiller) to grab the dist file(s) and modify them for your use case; or **fork it**.

## What it doesn't do

- Populate or modify the DOM Element that contains a list of suggestions.
- Provide every possible capability you could ever dream up for such a feature, sticking you with a whole lot of code that you'll never use.

## What it does

Listens to an input for `arrow up`, `arrow down`, `tab` and `enter`
- Upon arrowing a highlighting class is applied to the current item
- On `tab` the highlighted item's `innerText` is applied to the `input.value`
- `Enter` does the same thing as `tab`

## Install

```sh
$ npm install mincomplete
```

## Usage

```js
var suggest = mincomplete({
  input: document.querySelector('#search'),
  suggestions: document.querySelector('#suggestions'),
  highlightedClass: 'highlighted'
});
```

## License

ISC © [Buster Collings](http://about.me/buster)


[npm-image]: https://badge.fury.io/js/mincomplete.svg
[npm-url]: https://npmjs.org/package/mincomplete
