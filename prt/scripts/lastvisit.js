// milliseconds to days constant (1000 ms * 60 s * 60 m * 24 h)
const msToDays = 86400000;

// display element
const visitMessage = document.querySelector("#visitMessage");

// get last visit from localStorage
const lastVisit = localStorage.getItem("lastVisit");

// get current time in milliseconds
const now = Date.now();

// FIRST VISIT
if (!lastVisit) {

    visitMessage.textContent = "Welcome! Let us know if you have any questions.";

} else {

    // convert last visit to number
    const lastVisitTime = Number(lastVisit);

    // difference in milliseconds
    const timeDifference = now - lastVisitTime;

    // convert to days
    const daysBetween = Math.floor(timeDifference / msToDays);

    // LESS THAN A DAY
    if (daysBetween < 1) {

        visitMessage.textContent = "Back so soon! Awesome!";

    } else {

        // singular vs plural
        if (daysBetween === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
        }

    }
}

// store current visit time for next visit
localStorage.setItem("lastVisit", now);
