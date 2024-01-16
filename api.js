const API_KEY = 'live_iAPY12bK3QSW0gOhfs5i24n3VWt5F5p5kJUuXhvijcbNa2RgAgaOfDm7dX7ZWrvN';
const BASE_URL = 'https://api.thedogapi.com/v1/breeds/';

export async function fetchData(breed) {
    try {
        const response = await fetch(`${BASE_URL}search?q=${breed}`, {
            headers: {
                'x-api-key': API_KEY,
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function postData(data) {
    const API_KEY = 'live_iAPY12bK3QSW0gOhfs5i24n3VWt5F5p5kJUuXhvijcbNa2RgAgaOfDm7dX7ZWrvN';
    const BASE_URL = 'https://api.thedogapi.com/v1/breeds/';

    try {
        const response = await fetch(`${BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
        } else {
            throw new Error('Failed to post data');
        }
    } catch (error) {
        console.error(error);
    }
}