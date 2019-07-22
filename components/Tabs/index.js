// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabComponent(topic) {
  let newTab = document.createElement('div');
  newTab.textContent = topic;
  newTab.classList.add('tab');

  return newTab;

}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response => {
        // deal with the response data in here
        for (i = 0; i <= response.length; i++)  {
          let tab = tabComponent(topic)
          let topics = document.querySelector('.topics');

          topics.appendChild(tab);
        }
    })
    .catch( err => {
       // deal with the error in here
        console.log("Error:", err);
    })

    
  // loop through the topics

//   menuArray.forEach(item => {

//     const link = document.createElement('li');
//     link.textContent = item;
//     menuUL.appendChild(link);

//   });

// }

