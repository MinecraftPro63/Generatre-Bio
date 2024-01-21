function generateBio() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        const bio = `${name} is ${age} years old. ${generateRandomFact()}`;
        document.getElementById('bioOutput').textContent = bio;
    } else {
        alert('Please enter both name and age.');
    }
}

function generateRandomFact() {
    const facts = [
        'Enjoys playing musical instruments.',
        'Loves outdoor activities like hiking.',
        'Passionate about technology and coding.',
        'Avid reader of science fiction novels.',
        'Enthusiastic about learning new things.'
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

