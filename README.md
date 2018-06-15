# Sails Proxywrap

Return a Sails module where HTTP & HTTPS have been substituted out for [Proxywrap](https://github.com/daguej/node-proxywrap)-ed replacements.

This project implements a zero-change API implementation of [Sails#3506](https://github.com/balderdashy/sails/pull/3506).

# Use

`npm install --save @vpdigital/sails-proxywrap` to install the module

Edit `app.js` and replace `require("sails")` with `require("@vpdigital/sails-proxywrap")`.
