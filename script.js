// Signup Form Logic (from login.html)

const createContentForm = document.getElementById('createContentForm'); 
const contentContainer = document.getElementById('contentContainer');

createContentForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get the values from the input fields
    const title = document.getElementById('createTitle').value; // Use unique IDs for input fields
    const description = document.getElementById('createDescription').value; // Use unique IDs for input fields

    // Create a new card element
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;

    // Add shadow to the card
    card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';

    // Append the card to the content container
    contentContainer.appendChild(card);

    // Clear the input fields after adding the post
    document.getElementById('createTitle').value = ''; // Clear the unique ID input fields
    document.getElementById('createDescription').value = ''; // Clear the unique ID input fields
});
// Handle signup form submission
