// URL dell'API
const apiUrl = "https://jsonplaceholder.typicode.com/photos?_limit=6";

// Seleziona il contenitore delle foto
const photoContainer = document.querySelector(".photos");

// Funzione per recuperare i dati dall'API
function fetchPhotos() {
  // Chiamata AJAX all'API
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Errore nella chiamata all'API");
      }
      return response.json();
    })
    .then(data => {
      data.forEach(photo => {
        const photoDiv = document.createElement("div");
        photoDiv.classList.add("photo");

        photoDiv.innerHTML = `
          <div class="pin"></div>
          <div class="image" style="background-image: url('${photo.url}')"></div>
          <p>${photo.title}</p>
        `;

        photoContainer.appendChild(photoDiv);
      });
    })
    .catch(error => {
        console.error("Errore nel recupero dei dati:", error);
      });
}

// Chiamata funzione
fetchPhotos();