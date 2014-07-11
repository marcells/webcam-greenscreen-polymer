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

function getAlpha(originalColor, chromaKey) {
    var distance = Math.pow(
        (chromaKey.color[0] - originalColor[0]) *
        (chromaKey.color[0] - originalColor[0]) +
        (chromaKey.color[1] - originalColor[1]) *
        (chromaKey.color[1] - originalColor[1]) +
        (chromaKey.color[2] - originalColor[2]) *
        (chromaKey.color[2] - originalColor[2]), 0.5 );

    return Math.min(1000, Math.exp(distance * chromaKey.threshold));
}

function greenScreen(sourceContext, targetContext, width, height, chromaKey) {
    var pixels = sourceContext.getImageData(0, 0, width, height);

    var length = pixels.data.length / 4;

    for (var i=0; i<length; i++) {
        var r = pixels.data[i*4 + 0];
        var g = pixels.data[i*4 + 1];
        var b = pixels.data[i*4 + 2];

        pixels.data[i*4 + 3] = getAlpha([r,g,b], chromaKey);
    }

    targetContext.putImageData(pixels, 0, 0);
}