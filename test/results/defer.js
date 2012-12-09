var fs, _$err, text, util;
fs = require('fs');
(function (_$cont) {
  try {
    fs.readFile('continuation.j', 'utf-8', function () {
      try {
        _$err = arguments[0];
        text = arguments[1];
        if (_$err)
          throw _$err;
        console.log(text);
        _$cont();
      } catch (_$err) {
        _$cont(_$err);
      }
    });
  } catch (_$err) {
    _$cont(_$err);
  }
}(function (e) {
  if (e !== undefined) {
    util = require('util');
    console.error(util.inspect(e, false, null, true));
  }
}));
/* Generated by Continuation.js v0.1.1 */