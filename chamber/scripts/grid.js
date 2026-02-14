import {places} from '../data/places.mjs'
console.log(places);

// REFERENCE WHERE WE DISPLAY THE ITEMS
const showHere = document.querySelector("#allplaces")

//LOOP THROUGH THE ARRAY JSON ITEMS
function displayItems(places) {
    places.forEach(x=> {
        //build the card element
        const thecard = document.createElement('div')
        //built the photo element
        const thephoto = document.createElement('img')
        thephoto.src = `images/${x.imageurl}`
        thephoto.alt = x.name
        thecard.appendChild(thephoto)
        //build the title element
        const thetitle = document.createElement('h2')
        thetitle.innerText = x.name
        thecard.appendChild(thetitle)
        //build the address element
        const theaddress = document.createElement('address')
        theaddress.innerText = x.address
        thecard.appendChild(theaddress)
        //build the description element
        const thedesc = document.createElement('p')
        thedesc.innerText = x.description
        thecard.appendChild(thedesc)
        //build the button
        const thebutton = document.createElement('a')
        thebutton.innerText = "Learn More"
        thebutton.classList.add("learn-btn")
        thebutton.href = "#"
        thecard.appendChild(thebutton)

        showHere.appendChild(thecard)
    }) //end loop
} //end function

// START DISPLAYING ALL ITEMS IN THE JSON FILE
displayItems(places)


/*------------------------*/
//Store the selected elements that we are going to use.
const navbuttom = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

//Toggle the show class off and on
navbuttom.addEventListener('click', () => {
    navbuttom.classList.toggle('show');
    navlinks.classList.toggle('show');
});
/*------------------------*/
// Function to format date and time
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${month}/${day}/${year}, ${hours}:${minutes}:${seconds}`;
}
// Get the last modification date of the document
const lastModified = new Date(document.lastModified);

// Format the date and time
const formattedDate = formatDate(lastModified);

// Display the formatted date and time in the paragraph with id "lastModified"
document.getElementById('lastModified').innerText = `Last Modification: ${formattedDate}`;

const year = new Date().getFullYear();

document.getElementById('currentyear').textContent = year;