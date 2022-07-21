function receivesAFunction(func) {
   return func();
 }

 function returnsANamedFunction(){
   return function add(){
      x + y
   }
 }

 const returnsAnAnonymousFunction = function(){
   return function(){}
 }

