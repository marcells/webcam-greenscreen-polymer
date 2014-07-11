function ensureBrowserCompatibility() {
    if (!window.URL) {
        window.URL = window.URL || window.webkitURL || window.msURL || window.oURL;
    }

    if (!navigator.getUserMedia) {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    }

    if(!window.requestAnimationFrame) {
        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
    }
}

function activateDebugging (domForMouseDown, canvasContext) {
    domForMouseDown.addEventListener('mousedown', function(ev) {
        function getColorAtPoint(x, y) {
            var pixels = canvasContext.getImageData(x, y, 1, 1);
            var r = pixels.data[0];
            var g = pixels.data[1];
            var b = pixels.data[2];

            return [r,g,b];
        }

        console.log(getColorAtPoint(ev.offsetX, ev.offsetY));
    }, false);
}

function getAlpha(color) {
    var threshold = 0.1; //min="0" step="0.001" max="0.2"
    var replace = [159, 38, 40]; // Some red value

    var distance = Math.pow(
        (replace[0] - color[0]) *
        (replace[0] - color[0]) +
        (replace[1] - color[1]) *
        (replace[1] - color[1]) +
        (replace[2] - color[2]) *
        (replace[2] - color[2]), 0.5 );

    return Math.min(1000, Math.exp(distance * threshold));
}

function greenScreen(sourceContext, targetContext, width, height) {
    var pixels = sourceContext.getImageData(0, 0, width, height);

    var length = pixels.data.length / 4;

    for (var i=0; i<length; i++) {
        var r = pixels.data[i*4 + 0];
        var g = pixels.data[i*4 + 1];
        var b = pixels.data[i*4 + 2];

        pixels.data[i*4 + 3] = getAlpha([r,g,b]);
    }

    targetContext.putImageData(pixels, 0, 0);
}