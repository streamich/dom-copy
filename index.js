
function copy(text) {
    var doc = document;
    el = doc.createElement('input');

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

module.exports = copy;
