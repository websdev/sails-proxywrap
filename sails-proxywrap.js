"use strict"
var proxywraphttp, proxywraphttps

module.exports = function proxywrapSails(options) {
	options = Object.assign({}, options);

	proxywraphttp = require("./proxywraphttp")(options)
	proxywraphttps = require("./proxywraphttps")(options)

	require.cache[require.resolve('http')] = { exports: proxywraphttp }
	require.cache[require.resolve('https')] = { exports: proxywraphttps }

	return require('sails');
}

