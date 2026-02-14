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