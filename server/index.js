const animalListContainer = document.querySelector('.animal-list');
const animalDetailsContainer = document.querySelector('.animal-details');
const animalForm = document.querySelector('#animal-form');

// To fetch animals data from the local server
function fetchAnimals() {
    return fetch('http://localhost:3000/characters')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch animals data');
            }
            return response.json();
        })
        .catch(error => {
            console.error(error);
            return [];
        });
}

// Display animal cards in the list
function displayAnimalList() {
    fetchAnimals()
        .then(animals => {
            animalListContainer.innerHTML = '';
            
            animals.forEach(animal => {
                const card = document.createElement('div');
                card.className = 'animal-card';
                card.textContent = animal.name;
                
                card.addEventListener('click', () => {
                    displayAnimalDetails(animal);
                });
                
                animalListContainer.appendChild(card);
            });
        });
}

// To display details of a selected animal
function displayAnimalDetails(animal) {
    animalDetailsContainer.innerHTML = `
        <h2>${animal.name}</h2>
        <img src="${animal.image}" alt="${animal.name}">
        <p>Votes: ${animal.votes}</p>
        <button class="reset-btn">Reset Votes</button>
        <button class="vote-btn">Vote</button>
    `;
    
    // To update the vote count
    const voteBtn = animalDetailsContainer.querySelector('.vote-btn');
    voteBtn.addEventListener('click', () => {
        animal.votes++;
        updateAnimalVotes(animal.id, animal.votes)
            .then(() => {
                displayAnimalDetails(animal); 
            });
    });


    // To reset the vote count
    const resetBtn = animalDetailsContainer.querySelector('.reset-btn');
    resetBtn.addEventListener('click', () => {
        animal.votes = 0;
        updateAnimalVotes(animal.id, 0)
            .then(() => {
                displayAnimalDetails(animal); 
            });
    });
    
    animalDetailsContainer.style.display = 'block';
}

// To update animal votes on the server
function updateAnimalVotes(animalId, votes) {
    return fetch(`http://localhost:3000/characters/${animalId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ votes })
    })
    .then(response => {
        if (!response.ok) {
            console.log('Failed to update animal votes');
        }
    })
    .catch(error => {
        console.log(error);
    });
}

// Add event handling for the form submission
animalForm.addEventListener('submit', event => {
    event.preventDefault();
    const nameInput = document.querySelector('#animal-name');
    const imageInput = document.querySelector('#animal-image');

    const newAnimal = {
        name: nameInput.value,
        image: imageInput.value,
        votes: 0
    };  

    addAnimal(newAnimal)
        .then(() => {
            nameInput.value = '';
            imageInput.value = '';
            displayAnimalList(); // Refresh the list after adding an animal
        });
});

// ... existing code ...

// Add a new animal to the server
function addAnimal(animal) {
    return fetch('http://localhost:3000/characters', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(animal)
    })
    .then(response => {
        if (!response.ok) {
            console.log('Failed to add animal');
        }
    })
    .catch(error => {
        console.log(error);
    });
}

// ... existing code ...


// To start the app
displayAnimalList();
