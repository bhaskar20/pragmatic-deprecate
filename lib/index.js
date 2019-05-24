/**
 * @fileoverview let&#39;s you decprecate and refactor code step by step: 1. deprecate functions, constants, class etc 2. disable the use for these deprecated functions in future 3. refactor sensibly
 * @author Bhaskar
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



