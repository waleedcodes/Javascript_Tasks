// console.log('Hello Everyone');
// let a = prompt("Enter Your Age");
// // alert(" Are You Ready For Submitted Form!");
// if (a > 17) {
//     alert("You are Adult");
// }
// else {
//     alert("You are Not Adult");
// }
// console.log(a);

function function1() {
    let a = prompt("Enter Your Age");
    a = Number.parseInt(a);

    if (a > 1) {
        document.getElementById("p1").innerHTML = `<h1>Age is not define age!/h1>`;
        // document.write("Age is not define age!")
    }
    else if (a < 9) {
        document.getElementById("p1").innerHTML = `<h1>You Are not adult</h1>`;
        // document.write("You Are not adult")
    }
    else if (a < 18 && a >= 9) {
        document.getElementById("p1").innerHTML = `<h1>But You are a Medium </h1>`;
        // document.write("But You are a Medium")
    }
    else if (a < 25 && a >= 18) {
        // document.getElementById("p1").innerHTML = `<h1>You Are Adult</h1>`;
        document.getElementById("p1").innerHTML = "this is  waleed";
        // document.write("You Are Adult")
    }
    else if (a < 35 && a >= 25) {
        document.getElementById("p1").innerHTML = `<h1>Now You marriage now do it</h1>`;
        // document.write("Now You marriage now do it")
    }
    else if (a < 50 && a >= 35) {
        document.getElementById("p1").innerHTML = `<h1>Now your 2 Childern Here</h1>`;
        // document.write("Now your 2 Childern Here")
    }
    else if (a < 80 && a >= 50) {
        document.getElementById("p1").innerHTML = `<h1>You Are Old Now!</h1>`;
        // document.write("You Are Old Now!")
    }
    else if (a < 101 && a >= 80) {
        document.getElementById("p1").innerHTML = `<h1>You Are Old Now! 'Go To Bed'</h1>`;
        // document.write("You Are Old Now! 'Go To Bed'")
    }
    else {
        document.getElementById("p1").innerHTML = `<h1>Please Valid age!</h1>`;
        // document.write("Please Valid age!")
    }

}
