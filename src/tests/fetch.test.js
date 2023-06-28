import { getPath, fetchData } from '../scripts/fetchData';

const MOCK_CAT_OBJ = {type: 'category', value: 'jewelery'};
const MOCK_ID_OBJ = {type: 'id', value: 1};

const unmockedFetch = global.fetch;
beforeEach(() => {
    fetch.mockClear();
})
afterAll(() => {
    global.fetch = unmockedFetch;
})

describe('getPath script', () => {
    it('assigns correct path for category view', () => {
        const path = getPath(MOCK_CAT_OBJ);
        expect(path).toMatch('https://fakestoreapi.com/products/category/jewelery');
    });
    it('assigns correct path for item view', () => {
        const path = getPath(MOCK_ID_OBJ);
        expect(path).toMatch('https://fakestoreapi.com/products/1');
    });
});

describe('fetchData script', () => {
    const MOCK_CAT_DATA = [{id: 1}, {id: 2}, {id: 3}];
    global.fetch = jest.fn((MOCK_CAT_OBJ) => 
        Promise.resolve({
            json: () => Promise.resolve(MOCK_CAT_DATA),
        })
    );
    it('returns array of length 3 when passed CAT query', async () => {
        const data = await fetchData(MOCK_CAT_OBJ);
        expect(Array.isArray(data)).toEqual(true);
        expect(data.length).toEqual(3);
        expect(data).toEqual(MOCK_CAT_DATA);
    });
    const MOCK_ID_DATA = {id: 1, title: 'title', category: 'category'};
    global.fetch = jest.fn((MOCK_ID_OBJ) => 
        Promise.resolve({
            json: () => Promise.resolve(MOCK_ID_DATA),
        })
    );
    it('returns object when passed ID query', async () => {
        const data = await fetchData(MOCK_ID_OBJ);
        expect(typeof data).toBe('object');
        expect(data).toEqual(MOCK_ID_DATA);
    })
});
