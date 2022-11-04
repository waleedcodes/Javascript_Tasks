// Now using Async Function //
async function waleed() {
    let ATDWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("27 Deg")
            }, 2000)
    })

    let ISLWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("21 Deg")
            }, 5000)
    })

    console.log("Fetching Abbottabad Weather Please wait ...")
    let ATD = await ATDWeather;
    console.log("Fetching Abbottabad Weather: " + ATD)
    console.log("Fetching Islamabad Weather Please wait ...")
    let ISL = await ISLWeather
    console.log("Fetched Islamabad Weather: " + ISL)
    return [ATD,ISL]
}

const ishfaq = async () => {
    console.log("Hey I am waleed ishfaq and I am waiting ")
}

const main1 = async () => {
    console.log("Welcome to weather control room")
    let a = await waleed()
    let b = await ishfaq()

}
main1()