const footer = document.createElement('footer');

// Create the paragraph for the current year
const currentYear = document.createElement('p');
const year = new Date().getFullYear(); // Get current year
currentYear.textContent = `© Doug Butler ${year} - Last Modified: ${document.lastModified}`;
footer.appendChild(currentYear);

// Create the suggestions link
const suggestionsLink = document.createElement('a');
suggestionsLink.id = 'contact';
suggestionsLink.href = 'suggestions.html';
suggestionsLink.textContent = 'Suggestions';
footer.appendChild(suggestionsLink);

// Append the footer to the body
document.body.appendChild(footer);