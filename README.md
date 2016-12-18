# Copy to Clipboard

Copy any text to clipboard in a browser. Usage:

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
 - No flash.
 - No frameworks.
 - No dependencies, not even `npm` dependencies.
 - Just 20 lines of code
 - Why? Because even 3Kb gzipped is too much for a simple `copy-to-clipboard` function.
 - Execute inside a user generated event.
 - Function may `throw` on error, so wrap in `try {} catch() {}` block.
 - Inspired by [clipboard.js](https://clipboardjs.com/).
 - Use the second parameter to tell where to insert the invisible `<input>`
 so that scroll does not move when it is focused.
 
 
## Tip

Save yourself time and just copy this function straight into your project:

```js
function copy(text, parent) {
    var doc = document;
    parent = parent || doc.body;
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
    parent.appendChild(el);
    el.focus();
    el.setSelectionRange(0, text.length);
    doc.execCommand('copy');
    parent.removeChild(el);
}
```

## License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

