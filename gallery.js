function openGallery() {
  // Check if the modal already exists to avoid duplicates
  if (document.getElementById("gallery-modal")) return;

  const galleryHTML = `
    <div id="gallery-modal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeGallery()">&times;</span>

        <div class="gallery-slides">
          <img src="assets/kenzie-sparks/kenzie-sparks-1.png" alt="Screenshot 1" />
          <img src="assets/kenzie-sparks/kenzie-sparks-2.png" alt="Screenshot 2" />
        </div>

        <div class="template-description">
          <h2>🖥️ Kenzie Sparks – A Dreamy Website Template for Creative Visionaries</h2>
          <p>
            Step into a world of elegance, creativity, and soft minimalism with the Kenzie Sparks Template –
            a pre-designed website layout perfect for designers, artists, coaches, or any visionary ready to build a captivating online presence.
          </p>
          <p>
            ✨ What’s included:
            <ul>
              <li>Fully responsive homepage layout</li>
              <li>Creative hero section with floating elements</li>
              <li>Featured products grid</li>
              <li>About the Artist section</li>
              <li>Clean footer and navigation</li>
              <li>Styled to fit feminine, creative, or lifestyle brands</li>
            </ul>
          </p>
          <p>
            ⚡️Ready to Make This Template Yours?<br/>
            👉 <a href="https://www.notion.so/21972527d95c8004b6d1c520e03a0780?pvs=106" target="_blank">Fill out the Client Intake Form</a><br/>
            💻✨ <a href="https://holyblaze07.github.io/Kenzie-Sparks/" target="_blank">Click here to view the full website</a>
          </p>
        </div>
      </div>
    </div>
  `;

  // Append the modal only once
  document.body.insertAdjacentHTML("beforeend", galleryHTML);
}

function closeGallery() {
  const modal = document.getElementById("gallery-modal");
  if (modal) modal.remove();
}
