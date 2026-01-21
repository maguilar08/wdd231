//URL JSON DATA
const url= 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards= document.querySelector('#cards');

//FETCH DATA ASYNCHRONOUSLY
async function getProhetData(){
    const response= await fetch(url);
    const data= await response.json();
    //console.table(data.prophets); // temporary testing of data response
    displayProphets(data.prophets);
}

//FUNCTION TO BUILD CARDS DYNAMICALLY
const displayProphets= (prophets)=>{
    prophets.forEach((prophet)=>{
        //CREATE ELEMENTS TO ADD TO THE div.cards ELEMENT
        let card= document.createElement('section');
        let fullName= document.createElement('h2');
        let birthDate= document.createElement('p');
        let birthPlace= document.createElement('p');
        let portrait= document.createElement('img');
        //FILL IN CONTENT
        fullName.textContent= `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent= `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent= `Place of Birth: ${prophet.birthplace}`;
        //BUILD IMAGE ATRIBUTES
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        //APPEND THE SECTION (card) WITH THE CREATED ELEMENTS
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
};

//CALL THE ASYNC FUNCTION
getProhetData();



