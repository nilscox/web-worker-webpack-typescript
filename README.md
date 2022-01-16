# web-worker-webpack-typescript

A simple web worker test with webpack, esbuild and typescript, forked from https://github.com/mdn/simple-web-worker.

As far as I understand, esbuild [does not support web workers](https://github.com/evanw/esbuild/issues/312) out of the box yet. This example uses webpack to output two bundles, one that will be loaded in the browser (webpack's main entry) and one only containing the worker code (webpack's worker entry).

Then the HTML page is generated using html-webpack-plugin, preventing the worker's entry to be injected thanks to the [plugin's chucks option](https://github.com/jantimon/html-webpack-plugin#options).

It has an important limitation though: the worker file name is hardcoded in the [main.ts](./src/main.ts#L9), which only works as long as it can be predicted.
