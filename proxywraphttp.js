"use strict"
var http = require("http"), proxywrap = require("findhit-proxywrap")

module.exports = proxywrap.proxy(http)
