//Store the selected elements that we are going to use.
const navbuttom = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

//Toggle the show class off and on
navbuttom.addEventListener('click', () => {
    navbuttom.classList.toggle('show');
    navlinks.classList.toggle('show');
});

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

//-------------------------------------------------------------
// Path to your local JSON file
const url = 'data/members.json';
const cards = document.querySelector('#cards');

// Fetch member data
async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data);
}

// Function to build cards dynamically
const displayMembers = (members) => {
  members.forEach((member) => {
    // Create elements
    let card = document.createElement('section');
    let name = document.createElement('h4');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let logo = document.createElement('img');

    // Fill in content
    name.textContent = member.name;
    address.textContent = member.address;
    phone.textContent = `Phone: ${member.phone}`;
    website.textContent = "Visit Website";
    website.setAttribute('href', member.website);
    website.setAttribute('target', '_blank');

    // Build image
    logo.setAttribute('src', `images/${member.image}`);
    logo.setAttribute('alt', `${member.name} logo`);
    logo.setAttribute('loading', 'lazy');

    // Highlight by membership level
    //if (member.membershipLevel === 3) {
    //  card.style.border = "2px solid gold";
    //} else if (member.membershipLevel === 2) {
    //  card.style.border = "2px solid silver";
    //} else {
    //  card.style.border = "1px solid gray";
    //}

    // Append elements
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(logo);

    // Add to container
    cards.appendChild(card);
  });
};

// === GRID/LIST BUTTONS ===
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
  cards.classList.add("grid");
  cards.classList.remove("list");
});

listButton.addEventListener("click", () => {
  cards.classList.add("list");
  cards.classList.remove("grid");
});

// Call the function
getMemberData();
