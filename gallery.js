function openGallery() {
  if (document.getElementById("gallery-modal")) return;

  const images = [
    "assets/kenzie-sparks/Screenshot 2025-07-05 093047.png",
    "assets/kenzie-sparks/Screenshot 2025-07-08 200055.png",
    "assets/kenzie-sparks/Screenshot 2025-07-08 200245.png",
    "assets/kenzie-sparks/Screenshot 2025-07-08 200325.png",
    "assets/kenzie-sparks/Screenshot 2025-07-08 200412.png"
  ];

  let currentSlide = 0;

  const modalHTML = `
    <div id="gallery-modal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeGallery()">&times;</span>
        <div class="gallery-slides" id="slider-container">
          <img id="slide-img" src="${images[currentSlide]}" alt="Screenshot" />
        </div>
        <div class="gallery-nav">
          <button class="gallery-btn" onclick="changeSlide(-1)">← Prev</button>
          <button class="gallery-btn" onclick="changeSlide(1)">Next →</button>
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

  const imgElement = document.getElementById("slide-img");
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
      changeSlide(1); // Swipe Left
    }
    if (touchEndX > touchStartX + 50) {
      changeSlide(-1); // Swipe Right
    }
  }

  // Define changeSlide function globally
  window.changeSlide = function (dir) {
    currentSlide = (currentSlide + dir + images.length) % images.length;
    imgElement.src = images[currentSlide];
  };
}

function closeGallery() {
  const modal = document.getElementById("gallery-modal");
  if (modal) modal.remove();
}
