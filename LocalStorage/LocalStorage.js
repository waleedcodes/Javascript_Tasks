// let key = prompt("Enter key you want to set")
// let value = prompt("Enter value you want to set")

// localStorage.setItem(key, value)

// console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

// if (key == "red" || key == "blue") {
//         localStorage.removeItem(key)
// }

// if (key == 0) {
//         localStorage.clear()
// }

//   LocalStorage Method End //

// ***************************************** //

// sessionStorage Method Start //

// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "harry")
// sessionStorage.removeItem("name")


window.onstorage = (e) => {
        alert("changed")
        console.log(e)
}