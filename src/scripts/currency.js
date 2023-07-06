const usd = new Intl.NumberFormat('en-us', {
    currency: 'USD',
    style: 'currency'
});

const formatCurrency = (price) => {
    return usd.format(price);
};

export default formatCurrency;
