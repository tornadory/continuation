var list, i;
function delay(num, callback) {
  setTimeout(function () {
    callback(num);
  }, 10);
}
list = [];
i = 0;
while (i < 5) {
  list.push(i);
  i++;
}
console.log(list);
i = 0;
function _$loop_0(_$loop_0__$cont) {
  if (i < 5) {
    delay(i * i, function () {
      list[i] = arguments[0];
      i++;
      _$loop_0(_$loop_0__$cont);
    });
  } else {
    _$loop_0__$cont();
  }
}
_$loop_0(function () {
  console.log(list);
});
/* Generated by Continuation.js v0.1.1 */