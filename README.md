# mincomplete [![NPM version][npm-image]][npm-url]

> a very minimal autocomplete typeahead autosuggestion select list highlighter

### try the [demo](https://rawgit.com/busterc/mincomplete/master/test/index.html)

![](https://i.imgur.com/Krcvl6j.gif)

## What it doesn't do

- Populate or significantly modify DOM Element that contains a list of suggestions; forcing you to used a baked in filtering algorithm (e.g. fuzzy) and/or presentation format.
- Provide every possible capability you could ever dream up for such a feature, sticking you with a whole lot of code that you'll never use.

## What it does

Listens to an input for `arrow up`, `arrow down`, `tab` and `enter`
- Upon arrowing a highlighting class is applied to the current item
- On `tab` the highlighted item's `innerText` is applied to the `input.value`
- `Enter` does the same thing as `tab`

## What if you need a bit more functionality

- Create your own, additional, event handlers for `tab` and `enter` outside the scope of mincomplete (e.g. fetch data from a server when hitting `enter`).
- [**Fork mincomplete**](https://github.com/busterc/mincomplete) and make it your own.
- Use [**Distiller**](https://github.com/busterc/distiller) to grab the dist file(s) and modify them for your custom use case.

## Install

```sh
$ npm install mincomplete
```

## Usage

```html
// ...

  <style>.highlighted { background-color: yellow; }</style>

</head>
<body>

  <div>
    <input id="search" type="text">
    <div id="suggestions"></div>
  </div>

  <script>
    // so easy a caveman can do it
    mincomplete({
      input: document.querySelector('#search'),
      suggestions: document.querySelector('#suggestions'),
      highlightedClass: 'highlighted'
    });
  </script>

// ...
```

## License

ISC © [Buster Collings](http://about.me/buster)


[npm-image]: https://badge.fury.io/js/mincomplete.svg
[npm-url]: https://npmjs.org/package/mincomplete
