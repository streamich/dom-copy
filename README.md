# Copy to Clipboard

Copy any text to clipboard in a brwoser. Usage:

```js
var copy = require('dom-copy');

document.addEventListener('click', function() {
    try {
        copy('Hello world');
    } catch(e) {
        console.log(e);
    }
});
```

Features:

 - The smallest possible function to copy to clipboard in a browser
 - No flash needed.
 - No dependencies, not even `npm` dependencies.
 - Just 20 lines of code
 - Why? Because even 3Kb gzipped is too much for a simple `copy-to-clipboard` function.
 - Execute inside a user generated event.
 - Function may `throw` on error, so wrap in `try {} catch() {}` block.
 - Inspired by [clipboard.js](https://clipboardjs.com/).
 
 
## Tip

Save yourself time and just copy this function straight into your project:

```js
function copy(text) {
    var doc = document;
    var el = doc.createElement('input');

    // Remove from screen.
    var style = el.style;
    style.position = 'absolute';
    style.width = 1;
    style.height = 1;
    style.opacity = 0.01;
    style.left = -9999;

    // Prevent zooming on iOS
    style.fontSize = '12pt';

    // Exec `copy` command.
    el.value = text;
    doc.body.appendChild(el);
    el.focus();
    el.setSelectionRange(0, text.length);
    doc.execCommand('copy');
    doc.body.removeChild(el);
}
```
