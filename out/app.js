(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // app/utils.ts
  var utils_exports = {};
  __export(utils_exports, {
    bar: () => bar,
    baz: () => baz,
    foo: () => foo
  });
  var foo, baz, bar;
  var init_utils = __esm({
    "app/utils.ts"() {
      foo = () => console.log("foo");
      baz = () => console.log("baz");
      bar = () => console.log("bar");
    }
  });

  // app/index.ts
  init_utils();
  foo();
  (async () => {
    const { baz: baz2 } = await Promise.resolve().then(() => (init_utils(), utils_exports));
    baz2();
  })();
})();
