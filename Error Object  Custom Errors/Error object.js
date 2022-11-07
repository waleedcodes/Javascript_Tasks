// try {
//         throw new ReferenceError( "Waleed is a good Developer" )
// } catch ( error ) {
//         alert( error.name + "=" + " This is a name object Error" );
//         alert( error.message + "=" + " This is a Message object Error" );
// };
// Error Object // End //
try {
        let age = prompt( "Enter Your Age ?" );
        age = Number.parseInt( age );
        if ( age > 150 ) {
                throw new ReferenceError( "this is not your age" );
        }
} catch ( error ) {
        console.log( error.name );
        console.log( error.message );
        console.log( error.stack );
}
console.log( "This Script is Running..." )
// Custom Error // End 