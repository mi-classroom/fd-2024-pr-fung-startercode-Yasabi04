import { slideshow } from './modules/slideshow.js';

/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', function() {
  hljs.highlightAll();
  slideshow();
});

async function loadFinishedWorks() {
  try {
    // Hole die Daten aus der JSON-Datei im fd-2024 Ordner
    const response = await fetch('/fd-2024/works.json');
    
    // Verarbeite die Antwort und konvertiere sie in ein JavaScript-Objekt
    const data = await response.json();
    
    // Wähle die ul-Liste mit dem Attribut data-js-finished-works
    const workOverview = document.querySelector('[data-js-finished-works]');
    
    // Iteriere über die Daten und füge sie in die ul-Liste ein
    data.forEach(work => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <div class="finishedWorks">
          <img src="${work.image || './assets/uploads/nils.jpg'}" alt="Arbeit Bild" class="work-image">
          <div class="work-details">
            <h3>${work.title}</h3>
            <p>${work.author}, ${work.type}. ${new Date(work.date).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</p>
          </div>
        </div>
      `;
      workOverview.appendChild(listItem);
    });
  } catch (error) {
    console.error('Fehler beim Laden der abgeschlossenen Arbeiten:', error);
  }
}

// Lade die Daten, wenn die Seite geladen wird
document.addEventListener('DOMContentLoaded', loadFinishedWorks);