
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

module.exports = copy;
