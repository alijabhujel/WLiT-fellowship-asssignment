// const DEMO_URL = "https://course-api.com/react-store-products"

// function fetchData(url, callBack){
//     fetch(url)
//     .then(response => response.json())
//     .then(data => callBack(data))
//     .catch(error => console.log("Error occurred", error))
// }

// function handleData(data){
//     console.log("Received data", data)
// }

// fetchData(DEMO_URL, handleData)


const DEMO_URL = "https://course-api.com/react-store-products";

function fetchData(url, callBack) {
    fetch(url)
        .then(response => response.json())
        .then(data => callBack(data))
        .catch(error => console.log("Error occurred", error));
}

function handleData(data) {
    console.log("Received data:");
    data.forEach(product => {
        console.log(`Product: ${product.name}, Price: ${product.price}`);
    });
}

fetchData(DEMO_URL, handleData);
