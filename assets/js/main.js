import { slideshow } from './modules/slideshow.js';

/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', function() {
  hljs.highlightAll();
  slideshow();
});

async function loadFinishedWorks() {
  try {
    const response = await fetch('/fd-2024/works.json');
    const data = await response.json();
    
    // Wähle die ul-Liste mit dem Attribut data-js-finished-works und den Button aus
    const workOverview = document.querySelector('[data-js-finished-works]');
    const showMoreButton = document.getElementById('show-more-works');
    
    // Zeige nur die ersten fünf Arbeiten an
    const initialWorks = data.slice(0, 5);
    initialWorks.forEach(work => {
      const listItem = createListItem(work);
      workOverview.appendChild(listItem);
    });
    
    // Wenn es mehr als fünf Arbeiten gibt, zeige den Button an
    if (data.length > 5) {
      showMoreButton.style.display = 'block';
    }
    
    // Füge einen Klick-Event-Listener zum Button hinzu
    showMoreButton.addEventListener('click', () => {
      const remainingWorks = data.slice(5);
      remainingWorks.forEach(work => {
        const listItem = createListItem(work);
        workOverview.appendChild(listItem);
      });
      // Verstecke den Button, nachdem die restlichen Arbeiten angezeigt wurden
      showMoreButton.style.display = 'none';
    });
  } catch (error) {
    console.error('Fehler beim Laden der abgeschlossenen Arbeiten:', error);
  }
}

function createListItem(work) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <a href="/fd-2024/works/works/n-pola-can-i-cai.html">
      <div class="finishedWorks">
        <img src="${work.image || './assets/uploads/nils.jpg'}" alt="Arbeit Bild" class="work-image">
        <div class="work-details">
          <h3>${work.title}</h3>
          <p>${work.author}, ${work.type}. ${new Date(work.date).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</p>
        </div>
      </div>
    </a>
  `;
  return listItem;
}



/*

Einmal alles anzeigen

async function loadFinishedWorks() {
  try {
    const response = await fetch('/fd-2024/works.json');
    const data = await response.json();
    
    // Wähle die ul-Liste mit dem Attribut data-js-finished-works
    const workOverview = document.querySelector('[data-js-finished-works]');
    
    data.forEach(work => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <a href = "/fd-2024/works/works/n-pola-can-i-cai.html">
          <div class="finishedWorks">
            <img src="${work.image || './assets/uploads/nils.jpg'}" alt="Arbeit Bild" class="work-image">
            <div class="work-details">
              <h3>${work.title}</h3>
              <p>${work.author}, ${work.type}. ${new Date(work.date).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</p>
            </div>
          </div>
        </a>
      `;
      workOverview.appendChild(listItem);
    });
  } catch (error) {
    console.error('Fehler beim Laden der abgeschlossenen Arbeiten:', error);
  }
}
*/
// Lade die Daten, wenn die Seite geladen wird
document.addEventListener('DOMContentLoaded', loadFinishedWorks);




async function loadPictures() {
  try {
    const response = await fetch('/fd-2024/works/works/n-pola/04-results/images/metadata.json');
    console.log(response);
    const data = await response.json();
    
    // Wähle die ul-Liste mit dem Attribut data-js-finished-works
    const workOverview = document.querySelector('[data-js-pictures]');
    
    //erstelle die bilder

    data.forEach(picture => {
      const listItem = document.createElement('div');
      listItem.innerHTML = `
        <a href = "/fd-2024/works/works/n-pola/04-results/${picture.src}" id="clickedPicture">
          <div class="finishedWorks">
            <img src="${picture.src || './assets/uploads/nils.jpg'}" alt="Arbeit Bild" class="work-image">
            <div class="work-details">
              <h3>${picture.src}</h3>
            </div>
          </div>
          </a>
      `;
      workOverview.appendChild(listItem);
    });
  } catch (error) {
    console.error('Fehler beim Laden der abgeschlossenen Fotos:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadPictures);

document.getElementById('clickedPicture').addEventListener('click', function() {
  /*Bild wird hier in der Höhe des gesamten Bildschirms angezeigt*/
  document.getElementById('clickedPicture').style.height = "100vh";

});