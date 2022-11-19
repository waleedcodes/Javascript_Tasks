function newFunc () {
    let name = "Hy, its Waleed here";
    function displayName () {
        console.log( name );
        console.log("hello everyone")
    }
    return displayName;
}

let myFunc = newFunc();
myFunc();