/* Generated by Continuation.js v0.0.7 */
var e, list, _i, _len;
list = [
  1,
  2,
  3
];
_i = 0, _len = list.length;
function _$loop_0(_$loop_0__$cont) {
  if (_i < _len) {
    e = list[_i];
    console.log(e);
    setTimeout(function () {
      _i++;
      _$loop_0(_$loop_0__$cont);
    }, 300);
  } else {
    _$loop_0__$cont();
  }
}
_$loop_0(function () {
});