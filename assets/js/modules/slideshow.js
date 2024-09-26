
const slideshow = () => {
    // Variablen
    const images = document.querySelectorAll('.slideshow');
    const maxIndex = images.length - 1;
    let currentImageIndex = 0;
    const intervalTime = 1000;
  
    // Funktionen
    const showImage = (index) => {
      images.forEach((image, i) => {
        if (i === index) {
          image.classList.add('visible');
        } else {
          image.classList.remove('visible');
        }
      });
    };
  
    const nextImage = () => {
      currentImageIndex++;
      if (currentImageIndex > maxIndex) {
        currentImageIndex = 0;
      }
      showImage(currentImageIndex);
    };
  
    // Start der automatischen Slideshow
    setInterval(nextImage, intervalTime);
  
    // Initiale Anzeige des ersten Bildes
    showImage(currentImageIndex);
  };
  
  // Exportiere die Funktion, falls notwendig
  
  // Rufe die Funktion auf, sobald das DOM geladen ist
  document.addEventListener('DOMContentLoaded', (event) => {
    slideshow();
});


export { slideshow };
