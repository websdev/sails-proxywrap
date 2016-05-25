"use strict"
var proxywraphttp = require("./proxywraphttp"), proxywraphttps = require("./proxywraphttps")

require.cache[require.resolve('http')] = { exports: proxywraphttp }
require.cache[require.resolve('https')] = { exports: proxywraphttps }

module.exports = require("sails")

