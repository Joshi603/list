
/*
let button = document.querySelector("#button")

button.addEventListener("click", () => {

    fetch("./server.js", {
        method: "POST"
    });
});

fetch("http://192.168.188.34:2000/", {
    method: 'POST',
    body: JSON.stringify({ data: 'Ihre Daten' }),
  }).then(response => {
    // ...
});

  fetch('/users').then(response => {
    if (response.status === 200) {
      response.json().then(users => {
        // Die Liste der Benutzer wird in der Variable "users" gespeichert.
        // ...
      });
    } else {
      // Fehlermeldung anzeigen
    }
});
*/

fetch("192.168.188.34:2000")
    .then(res => {
        if(res.ok) {
            console.log("Good")
        } else {
            console.log("Not Okay")
        }
        console.log(res)
    }) 
    .catch(error => console.log(error))