"use strict"
var proxyquire = require("proxyquire"), proxywraphttp = require("./proxywraphttp")

module.exports = proxyquire("sails",  {
	"http": "proxywraphttp",
	"https": "proxywraphttps"
})
