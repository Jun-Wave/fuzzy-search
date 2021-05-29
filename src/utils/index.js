 function _debounce(fn, delay) {
  var delay = delay || 200;
  let timer = null;
  return function () {
    var th = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      timer = null;
      fn.apply(th, args);
    }, delay);
  };
}
export default _debounce;