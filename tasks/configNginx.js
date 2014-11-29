/**
 * Copies nginx config to --prefix dir, passing through EJS template engine
 * Usage example:
 * gulp config:nginx --prefix /etc/nginx --env prod
 */

var fs = require('fs');
var co = require('co');
var path = require('path');
var gulp = require('gulp');
var gp = require('gulp-load-plugins')();
var mongoose = require('lib/mongoose');
var projectRoot = require('config').projectRoot;
var ejs = require('ejs');
var through = require('through2');
var del = require('del');

module.exports = function() {
  return function() {

    var args = require('yargs')
      .usage("Prefix where to put config files is required and environment for the config.\n")
      .example("gulp config:nginx --prefix /etc/nginx --root /js/javascript-nodejs/current --env production")
      .example("gulp config:nginx --prefix /opt/local/etc/nginx --root /js/javascript-nodejs --env development --debug")
      .describe("prefix", "where to copy config files")
      .describe("env", "test/development/production enviromnent, config files are piped through EJS template, env is used for replacements")
      .describe("clear", "delete all files from prefix, use if no other nginx sites exist")
      .describe("debug", "enable nginx debug in error_log")
      .demand(['prefix', 'env'])
      .argv;

    var locals = {
      env: args.env,
      root: args.root,
      // debug is used for EJS internal debugging
      debugOn: args.debug
    };

    if (args.clear) {
      del.sync(path.join(args.prefix, '**'), {force: true});
    }

    return gulp.src(path.join(projectRoot, 'nginx', '**'))
      .pipe(through.obj(function(file, enc, cb) {
        if (file.isNull()) {
          this.push(file);
          return cb();
        }

        try {
          file.contents = new Buffer(ejs.render(file.contents.toString(), locals));
        } catch (err) {
          this.emit('error', new gp.util.PluginError('configNginx', err));
        }

        this.push(file);
        cb();
      }))
      .pipe(gulp.dest(args.prefix));
  };
};