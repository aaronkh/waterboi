/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Diagnostics = require('Diagnostics')
const Patches = require('Patches')
const Networking = require('Diagnostics')
const url = ''

Patches.getBooleanValue('onMouthOpen')
    .monitor()
    .subscribe(function(e) {
        Diagnostics.log(e)
    })
