async function fetchItems(category, item) {
    let response;
    if (item === null) {
        response = await fetch(`${category}`, {mode: 'cors'});
    } else {
        response = await fetch(`${category}${item}`, {mode: 'cors'});
    }
    let data = await response.json();

    return data;
}

export default fetchItems;
