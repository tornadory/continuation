var err, text, a;
(function (_$cont) {
  if (false) {
    if (a) {
      a = b;
    }
    fs.readFile('e.js', function (arguments, _$param0, _$param1) {
      err = _$param0;
      text = _$param1;
      _$cont();
    }.bind(this, arguments));
  } else {
    setTimeout(function (arguments) {
      (function (_$cont) {
        if (0 == 1) {
          fs.readFile('e.js', function (arguments, _$param2, _$param3) {
            err = _$param2;
            text = _$param3;
            _$cont();
          }.bind(this, arguments));
        } else {
          _$cont();
        }
      }.bind(this)(function (_$err) {
        if (_$err !== undefined)
          return _$cont(_$err);
        _$cont();
      }.bind(this)));
    }.bind(this, arguments), 10);
  }
}.bind(this)(function (_$err) {
  if (_$err !== undefined)
    return _$cont(_$err);
  a = err;
}.bind(this)));
/* Generated by Continuation.js v0.1.7 */