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


const articles = axios.get('https://lambda-times-backend.herokuapp.com/articles');

    articles.then( obj => {

      const articlesObj = obj.data.articles;

        // deal with the response data in here
        Object.keys(articlesObj).forEach(info => {
          return new cardComponent(articlesObj[info]);
        });
    })

    .catch( err => {
       // deal with the error in here
        console.log("Error:", err);
    })

const cardContainer = document.querySelector('.cards-container');

// Create Card Component
const cardComponent = articleData => {

    // Main "Card" Div
    let newCard = document.createElement('div');
    newCard.classList.add('card');
    cardContainer.appendChild(newCard);

    // Headline Div
    let headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = headline;
    newCard.appendChild(headlineDiv);

    // Author Div
    let author = document.createElement('div');
    author.classList.add('author');
    newCard.appendChild(author);

    // Image Div
    let imageDiv = document.createElement('div');
    imageDiv.classList.add('img-container');
    newCard.appendChild(imageDiv);

    // Image
    let image = document.createElement('img');
    image.src = articleData.authorPhoto;
    imageDiv.appendChild(image);

    // Author
    let author = document.createElement('span');
    author.textContent = `By ${articleData.authorName}`;
    newCard.appendChild(author);
  
    return newCard;
  
  }