document.getElementById("year").innerHTML = new Date().getFullYear();

// Code reference: https://www.w3schools.com/howto/howto_js_filter_elements.asp

// filter buttons
const filterButtons = document.querySelectorAll('.filter');
const smoothieCards = document.querySelectorAll('.smoothie-card');
const resetButton = document.querySelector('.reset');
const body = document.body;


filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const fruit = button.dataset.fruit;
        const color = button.dataset.color;
        changeBackgroundColor(color);
        filterSmoothies(fruit);
    });
});


function filterSmoothies(fruit) {
    smoothieCards.forEach(card => {
        const fruits = card.dataset.fruits || card.dataset.fruit;
        if (fruits && fruits.split(',').map(f => f.trim()).includes(fruit)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

if (resetButton) {
    resetButton.addEventListener('click', () => {
        smoothieCards.forEach(card => {
            card.style.display = 'block';
        });
        const resetColor = resetButton.dataset.color;
        changeBackgroundColor(resetColor);
    });
}

function changeBackgroundColor(color) {
    body.style.backgroundColor = color;
}


const buttons = document.querySelectorAll('.filter');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        buttons.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');

        document.body.style.backgroundColor = button.dataset.color;
    });
});

// Notification after submit
const form = document.getElementById('recipeForm');
const successMessage = document.getElementById('successMessage');


if (form && successMessage) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        successMessage.classList.remove('hidden');

        form.reset();
    });
}


// pop up card 
const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalIngredients = document.getElementById('modal-ingredients');
const closeButton = document.querySelector('.close-btn');


function showModal(card) {
    const imageSrc = card.querySelector('img').src;
    const title = card.querySelector('h3').textContent;
    const ingredientsList = card.querySelectorAll('ul li');


    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalIngredients.innerHTML = '';
    ingredientsList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.textContent;
        modalIngredients.appendChild(li);
    });


    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}
// only for desktop
smoothieCards.forEach(card => {
    card.addEventListener('click', () => {
        if (window.innerWidth >= 800) {
            showModal(card);
        }
    });
});

if (closeButton) {
    closeButton.addEventListener('click', closeModal);
}

if (modal) {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}
