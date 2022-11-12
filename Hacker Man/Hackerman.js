// let a = [
//     "Initializing Hack tool...",
//     "Connecting to Facebook...",
//     "Connecting to server 1...",
//     "Connection failed. Retrying...",
//     "Connecting to server 2",
//     "Connected Successfully...",
//     "Username iamharry...",
//     "Trying Brute Force...",
//     "200K passwords tried...",
//     "Match not found",
//     "Another 200K passwords tried...",
//     "Match not found...",
//     "Another 200K passwords tried...",
//     "Match not found...",
//     "Another 200K passwords tried...",
//     "Match found...",
//     "Accessing Account...",
//     "Hack Successful..."
// ]

// const sleep = async (seconds) => {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => { resolve(true) }, seconds * 1000)
//     })
// }

// const showHack = async (message) => {
//     await sleep(2)
//     // console.log(message)
//     text.innerHTML = text.innerHTML + message + "<br>"
// }

// (async () => {
//     for (let i = 0; i < a.length; i++) {
//             await showHack(a[i])
//     }
// })()
// ************************************ //

let name = prompt("Enter username of facebook account")


let main = () => {

  let text1 = document.getElementById("first-text");
  let text2 = document.getElementById("second-text");
  let text3 = document.getElementById("third-text");
  let text4 = document.getElementById("fourth-text");

  let text6 = document.getElementById("sixth-text");
  let text7 = document.getElementById("seventh-text");
  let text8 = document.getElementById("eighthtext");
  let RND = Math.floor(Math.random() * 125418);


  setInterval(() => {
    text1.innerHTML = "<span>$</span> Innitializing Hack Program...";
  }, 2000);

  setInterval(() => {
    text2.innerHTML = `<span>$</span> Hacking <span class="username">"${name}'s"</span> device...`;
  }, 5000);

  setInterval(() => {
    text3.innerHTML = `<span>$</span>  Password found! <span class="username">  "${name}${RND}"</span>...`;
  }, 8000);

  setInterval(() => {
    text4.innerHTML = `<span>$</span> Connecting to Facebook...`;
  },10000);



  setInterval(() => {
    text6.innerHTML = `<span>$</span> Logging in...`;
  },12000);

  setInterval(() => {
    text7.innerHTML = `<span>$</span> Successfully <span class="username">logged in! Collecting all Data...</span>`;
  },14000);

    setInterval(() => {
      text8.innerHTML = `<span>$</span> Successfull!`;
    },16000);
   
}

main();
