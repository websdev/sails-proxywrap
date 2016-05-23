"use strict"
var https = require("https"), proxywrap = require("findhit-proxywrap")

module.exports = proxywrap.proxy(https)
