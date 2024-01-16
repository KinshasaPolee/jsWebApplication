export function displayBreeds(breedData) {
    const dogGallery = document.getElementById('dogGallery');
    dogGallery.innerHTML = '';

    breedData.forEach((breed) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = breed.image.url;
        img.alt = breed.name;

        const name = document.createElement('h2');
        name.textContent = breed.name;

        card.appendChild(img);
        card.appendChild(name);
        dogGallery.appendChild(card);
    });
}