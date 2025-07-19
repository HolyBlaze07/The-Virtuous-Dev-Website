// Define closeGallery globally so it's available for inline handlers
window.closeGallery = function () {
  const modal = document.getElementById("gallery-modal");
  if (modal) modal.remove();
};

function openGallery() {
  if (document.getElementById("gallery-modal")) return;

  const images = [
    "assets/img/Screenshot5.png",
    "assets/img/Screenshot1.png",
    "assets/img/Screenshot2.png",
    "assets/img/Screenshot3.png",
    "assets/img/Screenshot4.png",
    
  ];

  let currentSlide = 0;

  // Define changeSlide globally before modalHTML is inserted
  window.changeSlide = function (dir) {
    currentSlide = (currentSlide + dir + images.length) % images.length;
    const imgElement = document.getElementById("slide-img");
    if (imgElement) {
      imgElement.src = images[currentSlide];
    }
  };

  const modalHTML = `
  <div id="gallery-modal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeGallery()">&times;</span>
      <div class="gallery-slides" id="slider-container">
        <img id="slide-img" src="${images[currentSlide]}" alt="Screenshot" />
        <button class="gallery-btn prev" onclick="changeSlide(-1)">← </button>
        <button class="gallery-btn next" onclick="changeSlide(1)"> →</button>
      </div>
      <div class="template-description">
        <h2>🖥️ Kenzie Sparks – A Dreamy Website Template for Creative Visionaries</h2>
        <p>
          Step into a world of elegance, creativity, and soft minimalism with the Kenzie Sparks Template – 
          a pre-designed website layout perfect for designers, artists, coaches, or any visionary ready to build a captivating online presence.
        </p>
        <ul>
          <li>Fully responsive homepage layout</li>
          <li>Creative hero section with floating elements</li>
          <li>Featured products grid</li>
          <li>About the Artist section</li>
          <li>Clean footer and navigation</li>
          <li>Styled to fit feminine, creative, or lifestyle brands</li>
        </ul>
        <p>
          ⚡️Ready to Make This Template Yours?<br/>
          👉 <a href="https://www.notion.so/21972527d95c8004b6d1c520e03a0780?pvs=106" target="_blank">Fill out the Client Intake Form</a><br/>
          💻✨ <a href="https://holyblaze07.github.io/Kenzie-Sparks//" target="_blank">View Full Website</a>
        </p>
      </div>
    </div>
  </div>
`;


  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const slider = document.getElementById("slider-container");

  // Swipe functionality
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  slider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  });

  function handleGesture() {
    if (touchEndX < touchStartX - 50) {
      window.changeSlide(1); // Swipe Left
    }
    if (touchEndX > touchStartX + 50) {
      window.changeSlide(-1); // Swipe Right
    }
  }
}
