const fs = require('fs');
const chalk = require('chalk');

let srcFonts = 'src/scss/_fonts.scss';
let appFonts = 'build/fonts/';
module.exports = function fonts(done) {
  fs.writeFile(srcFonts, '', () => {});
  fs.readdir(appFonts, (err, items) => {
    for (font of items) {
      let fontname = font.split('.')[0];
      if (fontname.endsWith('-Bold')) {
        fs.appendFile(srcFonts, `@include font-face("${fontname}", "${fontname}", 700);\n`, () => {});
        continue;
      }
      if (fontname.endsWith('-Regular')) {
        fs.appendFile(srcFonts, `@include font-face("${fontname}", "${fontname}", 400);\n`, () => {});
        continue;
      }
      if (fontname.endsWith('-SemiBold')) {
        fs.appendFile(srcFonts, `@include font-face("${fontname}", "${fontname}", 600);\n`, () => {});
        continue;
      }
    }
  });
  done();
};
