# CSSnano Rollup Plugin

This is a Rollup plugin that uses the CSSNano library to minify CSS files in your bundle.

## Installation

You can install the plugin via npm or Yarn:

```shell
npm install rollup-plugin-cssnano --save-dev
```

or

```shell
yarn add rollup-plugin-cssnano --dev
```

## Example Usage

```javascript
import inputWithCss from 'rollup-plugin-input-with-css';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import brotli from 'rollup-plugin-brotli';
import cssnano from 'rollup-plugin-cssnano';

export default [{
    input: 'css/src/styles.scss',
    output: [{
        file: 'css/dist/styles.css'
    },{
        file: 'css/dist/styles.min.css',
        plugins: [
            cssnano(),
            brotli({options: {level: 11}, test: /\.min\.css$/})
        ],
    }],
    plugins: [
        inputWithCss(),
        postcss({
            use: ['sass'],
            extract: true,
            plugins: [
	            postcssPresetEnv(),
            ],
        }),
    ],
}];
```