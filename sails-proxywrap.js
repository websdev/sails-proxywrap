"use strict"
var proxyquire = require("proxyquire"), proxywraphttp = require("./proxywraphttp"), proxywraphttps = require("./proxywraphttps")

module.exports = proxyquire("sails",  {
	"http": proxywraphttp,
	"https": proxywraphttps
})
