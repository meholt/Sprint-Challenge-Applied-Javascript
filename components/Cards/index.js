// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// Function to Create Card Component
function cardComponent(headline) {

    // Main "Card" Div
    let newCard = document.createElement('div');
    newCard.classList.add('card');

    // Headline Div
    let headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = headline;
    newCard.appendChild(headlineDiv);

    // Author Div
    let author = document.createElement('div');
    author.classList.add('author');
    
  
    return newCard;
  
  }