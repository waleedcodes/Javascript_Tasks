

function function1() {
    let sum = 0;
    let n = prompt("Enter the value of n");
    n = Number.parseInt(n);
    for (let i = 0; i < n; i++) {
        sum += (i + 1);

    }
    console.log("Sum all Number " + n + " Show 1+2+3....n are  Sum " + sum);
    return true;
}
function function2() {
    document.getElementById("p2").innerHTML = "Hey Waleed how are you ?";
}
function function3() {
    document.getElementById("p2").innerHTML = "Javascript From CodeWithHarry";
}

