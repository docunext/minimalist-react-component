#!/bin/sh
PATH=$PATH:$(npm bin)
echo $PATH
webpack --config tools/webpack.config.js --watch & webpack --config tools/webpack.config.server.js
