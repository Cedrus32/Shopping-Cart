async function fetchItems(values) {
    let response;
    if (values[1]) {
        response = await fetch(`${values[0]}${values[1]}`, {mode: 'cors'});
    } else {
        response = await fetch(`${values[0]}`, {mode: 'cors'});
    }
    let data = await response.json();

    return data;
}

export default fetchItems;
