const heading = document.getElementById('heading');
const items = document.querySelectorAll('.header_list a');
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.header_list');

// Add an event listener to each list item
items.forEach(item => {
    // Explicitly pass the event parameter
    item.addEventListener('click', (event) => {
      // Prevent any default action (like form submission or link navigation)
      event.preventDefault();
  
      // Update the heading text to the clicked item's text
      heading.textContent = event.target.textContent;
    });
  });

hamButton.addEventListener('click', () => {
      navigation.classList.toggle('open');
      hamButton.classList.toggle('open');
});

function