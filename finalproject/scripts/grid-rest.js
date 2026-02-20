import {restaurants} from '../data/restaurants.mjs'
console.log(restaurants);

// REFERENCE WHERE WE DISPLAY THE ITEMS
const showHere = document.querySelector("#allplaces")

//REFENCE POPUP *************
const mydialog = document.querySelector('#mydialog')
const mytitle = document.querySelector('#mydialog h2')
const myinfo = document.querySelector('#mydialog p')
const myclose = document.querySelector('#mydialog button')
myclose.addEventListener("click", () => mydialog.close())
//POPULATE THE DIALOG WITH INFORMATION WHEN IMAGE IS CLICKED************
function showStuff(x) {
    mytitle.innerHTML = x.name
    myinfo.innerHTML = `${x.description} <strong>Some specialties include:</strong> ${x.activities}.`
    mydialog.showModal()
}// end of function

//LOOP THROUGH THE ARRAY JSON ITEMS
function displayItems(restaurants) {
    restaurants.forEach(x=> {
        //build the card element
        const thecard = document.createElement('div')
        //built the photo element
        const thephoto = document.createElement('img')
        thephoto.src = `images/${x.imageUrl}`
        thephoto.alt = x.name
        thephoto.loading = "lazy"
        thephoto.height = 200
        thephoto.width = 300
        thecard.appendChild(thephoto)
        //build the title element
        const thetitle = document.createElement('h2')
        thetitle.innerText = x.name
        thecard.appendChild(thetitle)
        //build the address element
        const theaddress = document.createElement('address')
        theaddress.innerText = x.location
        thecard.appendChild(theaddress)
        //build the description element
        //const thedesc = document.createElement('p')
        //thedesc.innerText = x.description
        //thecard.appendChild(thedesc)
        //build the visit time element
        const rate = document.createElement('p')
        rate.innerHTML = `<strong>Rating</strong>: ${x.rating}`
        thecard.appendChild(rate)
        //build the button
        const thebutton = document.createElement('a')
        thebutton.innerText = "Learn More"
        thebutton.classList.add("learn-btn")
        
        //Add an event listerner to each division on the page.*********
        thebutton.addEventListener("click", () => showStuff(x));
        
        thecard.appendChild(thebutton)

        

        showHere.appendChild(thecard)
    }) //end loop
} //end function

// START DISPLAYING ALL ITEMS IN THE JSON FILE
displayItems(restaurants)
