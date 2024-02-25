if (typeof setImmediate === 'undefined') {
  // eslint-disable-next-line no-undef
  global.setImmediate = (callback, ...args) => {
    return setTimeout(callback, 0, ...args);
  };
}
