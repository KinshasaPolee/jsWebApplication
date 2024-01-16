import { fetchData, postData } from './api.js';
import { displayBreeds } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', async () => {
        const breedName = searchInput.value.trim();
        const breedData = await fetchData(breedName);

        if (breedData) {
            displayBreeds(breedData);
        } else {
            alert('Breed not found!');
        }
    });
});