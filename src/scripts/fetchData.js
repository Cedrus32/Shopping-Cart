function getPath(obj) {
    if (obj.type === 'category') {
        return `https://fakestoreapi.com/products/category/${obj.value}`;
    } else {
        return `https://fakestoreapi.com/products/${obj.value}`;
    }
}

async function fetchItems(fetchObj) {
    const path = getPath(fetchObj);
    const response = await fetch(path, {mode: 'cors'});
    let string = await response.json();
    let data = JSON.parse(string);
    console.log(data);
    // return data;
}

export default fetchItems;
