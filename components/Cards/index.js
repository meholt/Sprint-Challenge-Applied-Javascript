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

    articles.then(articleObj => {

      const articleInfo = articleObj.data.articles;

        // deal with the response data in here
        Object.keys(articleInfo).forEach(articleTopic => {
          articleInfo[articleTopic].forEach(article => {
            const newArticle = cardComponent(article);
            const cardContainer = document.querySelector('.cards-container');

            cardContainer.appendChild(newArticle);

          });

        });
    })

    .catch( err => {
       // deal with the error in here
        console.log("Error:", err);
    })

// Create Card Component
const cardComponent = articlesObj => {

    // Main "Card" Div
    let newCard = document.createElement('div');
    newCard.classList.add('card');

    // Headline Div
    let headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = articlesObj.headline;
    newCard.appendChild(headlineDiv);

    // Author Div
    let authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    newCard.appendChild(authorDiv);

    // Image Div
    let imageDiv = document.createElement('div');
    imageDiv.classList.add('img-container');
    newCard.appendChild(imageDiv);

    // Image
    let image = document.createElement('img');
    image.src = articlesObj.authorPhoto;
    imageDiv.appendChild(image);

    // Author
    let author = document.createElement('span');
    author.textContent = `By ${articlesObj.authorName}`;
    authorDiv.appendChild(author);
  
    return newCard;
  
  }