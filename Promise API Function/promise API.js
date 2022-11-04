// *************************** //
let a = new Promise( ( resolve, reject ) => {
    alert( "Promise 1 Loading..." );
    setTimeout( () => {
        resolve( "Promise 1" );
    }, 1000 );

} );
// 
let b = new Promise( ( resolve, reject ) => {
    alert( "Promise 2 Loading..." );
    setTimeout( () => {
        resolve( "Promise 2" );
    }, 2000 );

} );
// 
let c = new Promise( ( resolve, reject ) => {
    alert( "Promise 3 Loading..." );
    setTimeout( () => {
        resolve( "Promise 3" );
    }, 3000 );

} );
// 
console.log("Please Wait...")
let d = Promise.all( [a, b, c] );
d.then( ( value ) => {
    console.log( value )
} );
