//Закомментил, тк при бандле в cjs react попадает в бандл вне зависимости от опций в конфиге esbuild (при бандле в esm всё норм)
// import React from "react";
// console.log(React);

require("react");

console.log(require("react"));
