const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.style = tasks.style;
exports.build_js = tasks.build_js;
exports.libs_js = tasks.libs_js;
exports.dev_js = tasks.dev_js;
exports.html = tasks.html;
exports.rastr = tasks.rastr;
exports.ttf = tasks.ttf;
exports.fonts = tasks.fonts;
exports.bs_html = tasks.bs_html;
exports.watch = tasks.watch;

exports.default = gulp.parallel(
  exports.style,
  exports.libs_js,
  exports.dev_js,
  exports.rastr,
  exports.ttf,
  exports.fonts,
  exports.html,
  exports.bs_html,
  exports.watch,
);
