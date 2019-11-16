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
const Networking = require('Networking')
const url = 'https://fbsf-2019.appspot.com/state'

Patches.getBooleanValue('onMouthOpen')
    .monitor()
    .subscribe(function(e) {
        console.log(e)
        let request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ isDispensing: e.newValue })
        }
        Networking.fetch(url, request).catch(function(err) {
            Diagnostics.log(err)
        })
    })
