const params = new URLSearchParams(window.location.search);

document.querySelector("#results").innerHTML = `

<p><strong>Name:</strong> ${params.get("first")} ${params.get("last")}</p>

<p><strong>Email:</strong> ${params.get("email")}</p>

<p><strong>Place:</strong> ${params.get("place")}</p>

<p><strong>City:</strong> ${params.get("city")}</p>

<p><strong>Category:</strong> ${params.get("category")}</p>

<p><strong>Description:</strong> ${params.get("description")}</p>

<p>Thank you for helping Weekend Explorer grow! 🌎</p>

`
