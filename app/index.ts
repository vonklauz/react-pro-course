import { foo } from "./utils";
import { bar } from "./utils";

foo();
(async () => {
  const { baz } = await import("./utils");
  baz();
})();
