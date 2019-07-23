// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    // Header Div
    const header = document.createElement('div');
    header.className = 'header';

    // Date - Span
    const date = document.createElement('span');
    date.className = 'date';
    date.textContent = 'SMARCH 28, 2019';
    header.appendChild(date);

    // Title
    const title = document.createElement('h1');
    title.textContent = 'Lambda Times';
    header.appendChild(title);

    // Temp - Span
    const temp = document.createElement('span');
    temp.className = 'temp';
    temp.textContent = '98°';
    header.appendChild(temp);

    return header;

}

const header = Header();
const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(header);