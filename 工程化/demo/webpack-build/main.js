(()=>{
  "use strict";
  const o={c:1};
  console.log({}),
  console.log(1),
  console.log((
    console.log("b"),
    console.log("a",1),
    o.c=2,
    void console.log("c",o)
  ))
})();