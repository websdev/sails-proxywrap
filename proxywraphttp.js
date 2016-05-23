"use strict"
var http = require("http"), proxywrap = require("proxywrap")

module.exports = proxywrap.proxy(http)
