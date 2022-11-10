console.log(document.cookie);
document.cookie = "name=Waleed ishfaq user";
document.cookie = "name2=Waleed Ishfaq new";
// document.cookie = "name=Hello"
let key = prompt("enter your key");
let value = prompt("enter your value");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

// console.log(document.cookie);
// Ham Component Do Decode Is thara kar sakhta ha "decodeURIComponent("34#$#hh")"