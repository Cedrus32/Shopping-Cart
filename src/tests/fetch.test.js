import { getPath, fetchData } from '../src/scripts/fetchData';
console.log(getPath);

describe('getPath script', () => {
    it('assigns correct path for category view', () => {
        const fetchObj = {type: 'category', value: 'jewelery'};
        const path = getPath(fetchObj);
        expect(path).toMatch('https://fakestoreapi.com/products/category/jewelery');
    })
    it('assigns correct path for item view', () => {
        const fetchObj = {type: 'id', value: 1};
        const path = getPath(fetchObj);
        expect(path).toMatch('https://fakestoreapi.com/products/1');
    })
})
