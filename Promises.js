// let a = new Promise(function(resolve, reject){
//     alert("Hello Everyone!")
//     alert("this is waleed")
//     resolve(50);
// });
// // *******************  //
// console.log("Waleed");
// setTimeout(function(){
//   console.log("waleed two in 3 second show ")
// },3000);
// console.log("My name is waleed ishfaq");

// console.log(a);
// //****************** //

let a = new Promise( ( resolve, reject ) => {
    alert( "Hello I am Promise" );
    alert( "Promise is Pending..." );
    alert( "Please wait..." );
    setTimeout( () => {
        // console.log( "Now Promise is Fulfilled");
        // resolve(true);
        console.log( "Now Promise is rejected");
        reject(new Error("I am an Error"));
    }, 4000 );
    console.log( "Hello I am Promise" );
    console.log( "Promise is Pending..." );
    console.log( "Please wait..." );
} );
// console.log(a);
a.then((value)=>{
    console.log(value);
})
// a.catch((error)=>{
//     console.log("There are some remove an Error");
// })
