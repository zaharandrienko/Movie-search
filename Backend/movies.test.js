
const axios = require('axios');

const url = "http://localhost:4000/movies?search=Green"

test('shoult return 20 elements', async () => {

    const response = await axios.get(url)
    // console.log(response)
    expect(response.data.length).toBe(20);
});

test('shoult contain title', async () => {

    const response = await axios.get(url)
    const data = response.data;

    for (let cur of data) {
        expect(cur.Title.includes("Green")).toBe(true);
    }
});