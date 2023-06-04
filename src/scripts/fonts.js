// cache fonts
let fontQuery = require.context('../fonts', false, /\.(woff|woff2|eot|ttf|otf)$/i);
let fonts = importFonts(fontQuery);
console.log(fonts);

// bundle font
function importFonts(r) {
    let queryKeys = r.keys();
    let fonts = [];
    for (let i = 0; i < queryKeys.length; i++) {
        let newKey = queryKeys[i].split('./')[1];
        let newValue = `./fonts/${newKey}`;

        fonts[newKey] = newValue;
    }

    return fonts;
}

export default fonts;
