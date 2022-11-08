// let p = fetch("https://goweather.herokuapp.com/weather/ATD");
// p.then( ( response ) => {
//     console.log( response.status );
//     console.log( response.ok );
//     console.log( response.headers );
//     return response.json();
// } ).then( ( value2 ) => {
//     console.log( value2 );
// } );


// let p = fetch( "https://goweather.herokuapp.com/weather/ATD" )
// p.then( ( response ) => {
//         return response.json()
// } ).then( ( response ) => {
//         console.log( response )
// } )



// Post request Method JavaScript  //


const createTodo = async ( todo ) => {
        let options = {
                method: "POST",
                headers: {
                        "Content-type": "application/json"
                },
                body: JSON.stringify( todo ),
        }
        let p = await fetch( 'https://jsonplaceholder.typicode.com/posts', options )
        let response = await p.json()
        return response
}

const getTodo = async ( id ) => {
        let response = await fetch( 'https://jsonplaceholder.typicode.com/posts/' + id )
        let r = await response.json()
        return r
}

const mainFunc = async () => {
        let todo = {
                title: 'Heloo2',
                body: 'bello',
                userId: 1100,
        }
        let todor = await createTodo( todo )
        console.log( todor )
        console.log( await getTodo( 101 ) )
}

mainFunc()
