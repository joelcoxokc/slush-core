/*
 * slush-slush-demo
 * https://github.com/joelcoxokc/slush-slush-demo
 *
 * Copyright (c) 2014, Joel Cox
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
  _ = require('underscore.string'),
  inquirer = require('inquirer'),
  $ = require('gulp-load-plugins')({lazy:false}),
  Storage = require('./config/storage');

function format(string) {
  var username = string.toLowerCase();
  return username.replace(/\s/g, '');
}

var defaults = (function () {
  var homeDir = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,
    workingDirName = process.cwd().split('/').pop().split('\\').pop(),
    osUserName = homeDir && homeDir.split('/').pop() || 'root',
    configFile = homeDir + '/.gitconfig',
    user = {};

  if (require('fs').existsSync(configFile)) {
    user = require('iniparser').parseSync(configFile).user;
  }
  return {
    appName: workingDirName,
    userName: format(user.name) || osUserName,
    authorEmail: user.email || ''
  };
})();



require('./app')(gulp, inquirer, _, $, defaults, Storage);
