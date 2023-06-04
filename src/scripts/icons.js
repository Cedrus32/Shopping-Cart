// cache images
let imgQuery = require.context('../icons', false, /\.(png|svg|jpg|jpeg|gif)$/i);
let icons = importIcons(imgQuery);
console.log(icons);

// bundle images
function importIcons(r) {
    let queryKeys = r.keys();
    let icons = [];
    for (let i = 0; i < queryKeys.length; i++) {
        let newKey = queryKeys[i].split('./')[1];
        let newValue = `./icons/${newKey}`;
        
        icons[newKey] = newValue;
    };

    return icons;
}

export default icons;
