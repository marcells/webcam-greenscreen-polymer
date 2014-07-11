# &lt;webcam-greenscreen&gt;

> A Web Component using [Polymer](http://www.polymer-project.org/).
> 
> Looking for a boilerplate? Check [polymer-boilerplate](https://github.com/webcomponents/polymer-boilerplate).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/hello-world-polymer/dist/hello-world.html">
    ```

3. Start using it!

    ```html
    <webcam-greenscreen></webcam-greenscreen>
    ```

## Options

Attribute           | Options         | Default             | Description
---                 | ---             | ---                 | ---
`width`             | *pixel*         | `640px`             | Width of the webcam video
`height`            | *pixel*         | `480px`             | Height of the webcam video
`chromaRed`         | *int*           | `0`                 | Red value of color, which gets transparent (0-255)
`chromaGreen`       | *int*           | `0`                 | Green value of color, which gets transparent (0-255)
`chromaBlue`        | *int*           | `0`                 | Blue value of color, which gets transparent (0-255)
`chromaThreshold`   | *float*         | `0.1`               | Sensibility, when the color gets transparent (0.001-0.2)

## License

The MIT License (MIT)

Copyright (c) 2014 Marcell Spies

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.