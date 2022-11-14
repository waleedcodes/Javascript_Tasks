// Prototypes Function //
let a = {
    name: "Waleed",
    language: "JavaScript",
    run: () => {
        alert( "Now run" );
    }
};
console.log( a );

let p = {
    run: () => {
        alert( "run" );
    }
};

p.__proto__ = {
    name: "Ishfaq"
};

a.__proto__ = p;
a.run();
console.log( a.name );
 // console.log( p.name ); //

//   ProtoTypes Function END //
