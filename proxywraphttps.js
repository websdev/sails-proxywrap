"use strict"
var https = require("https"), proxywrap = require("findhit-proxywrap")

module.exports = function proxywrapHttps(options) {
	return proxywrap.proxy(https, options)
}
