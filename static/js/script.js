document.getElementById('generate-btn').addEventListener('click', function() {
    const prompt = document.getElementById('prompt-input').value;
    fetch('/generate-image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt }),
    })
    .then(response => response.json())
    .then(data => {
        const imageContainer = document.getElementById('image-container');
        if (data.image_url) {
            imageContainer.innerHTML = `<img src="${data.image_url}" alt="Generated Image">`;
        } else {
            imageContainer.innerHTML = `<p>Error: ${data.error}</p>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
