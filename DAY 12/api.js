//.then.catch.finaally

// url: https://dummyjson.com/products for the backend

async function fetchData() {
    const response = await fetch('https://dummyjson.com/products');// for the backend


    //promise checking

    if(!response.ok){
        throw new error("failed to fetch data");
    }

    const data = await response.json();
    console.log(data);
}

fetchData()

// try and catch




try{
    const response = await fetch('https://dummyjson.com/products');
    if(!response.ok){
        throw new error("http error: " + response.status: ${response.statusText});   
    }
    const data = await response.json();
    console.log(data);
    catch(error){
        console.error("error fetching data: ", error);
}

console.log(response); 








