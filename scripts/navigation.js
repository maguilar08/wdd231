//Store the selected elements that we are going to use.
const navbuttom = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

//Toggle the show class off and on
navbuttom.addEventListener('click', () => {
    navbuttom.classList.toggle('show');
    navlinks.classList.toggle('show');
});

//-------------------------------------------------------------------------------------------------
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