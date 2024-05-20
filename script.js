document.getElementById('fetch-dog').addEventListener('click', fetchDogImage);

async function fetchDogImage() {
    try {
        document.getElementById('loader').style.display = 'block';

        document.getElementById('dog-image').src = '';

        const response = await fetch('https://api.thedogapi.com/v1/images/search');
        const data = await response.json();
        const dogImageUrl = data[0].url;
        document.getElementById('dog-image').src = dogImageUrl;

        document.getElementById('loader').style.display = 'none';
    } catch (error) {
        console.error('Error fetching dog image:', error);
        document.getElementById('loader').style.display = 'none';
    }
}

fetchDogImage();
