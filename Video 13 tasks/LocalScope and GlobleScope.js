// Block Scope ...........  //
// {
//     let a = 10;
// }
// console.log( a );

// <!-- ****************************** --> 
// Globle Scope ........ //
// {
//     var a = 10;
// }
// console.log( a );
// <!-- ****************************** --> 

//  Function Scope ........  //
function b () {
    let a = 10;
    console.log( a );
}
// console.log( a );
b();
// <!-- ****************************** --> 
//  Block Scope, Function Scope and Globle Scope in Javascript  ......... //