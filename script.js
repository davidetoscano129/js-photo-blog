// URL dell'API
const apiUrl = "https://jsonplaceholder.typicode.com/photos?_limit=6";

// Seleziona il contenitore delle foto
const photoContainer = document.querySelector(".photos");

// Seleziona l'overlay e l'immagine al suo interno
const overlay = document.getElementById("overlay");
const overlayImage = overlay.querySelector("img");

// Funzione per recuperare i dati dall'API
function fetchPhotos() {
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

        // Aggiungi un evento per aprire l'overlay cliccando sulla foto
        photoDiv.querySelector(".image").addEventListener("click", () => {
          openOverlay(photo.url);
        });

        photoContainer.appendChild(photoDiv);
      });
    })
    .catch(error => console.error("Errore:", error));
}

// Funzione per aprire l'overlay
function openOverlay(imageUrl) {
  overlayImage.src = imageUrl; 
  overlay.style.display = "flex"; 
}

// Funzione per chiudere l'overlay
function closeOverlay() {
  overlay.style.display = "none"; 
}

// Evento per chiudere l'overlay cliccando sul background
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) { 
        closeOverlay();
    }
});

// Chiama la funzione per recuperare le immagini
fetchPhotos();