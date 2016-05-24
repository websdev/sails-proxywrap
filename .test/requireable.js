#!/usr/bin/env node
var tape = require("tape")

tape("Can require('sails-proxyquire')", function(t){
	t.plan(0)
	require("..")
	t.end()
})
