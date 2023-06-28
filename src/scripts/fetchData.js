function getPath(obj) {
    if (obj.type === 'category') {
        return `https://fakestoreapi.com/products/category/${obj.value}`;
    } else {
        return `https://fakestoreapi.com/products/${obj.value}`;
    }
}

async function fetchData(fetchObj) {
    try {
        const path = getPath(fetchObj);
        const response = await fetch(path);
        const data = await response.json();
        return await data;
    } catch(e) {
        return e;
    }
}

// export { getPath, fetchData }; // TEST: exports for fetch testing
export default fetchData;
