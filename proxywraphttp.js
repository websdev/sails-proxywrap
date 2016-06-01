"use strict"
var http = require("http"), proxywrap = require("findhit-proxywrap")

module.exports = function proxywrapHttp(options) {
	return proxywrap.proxy(http, options)
}
