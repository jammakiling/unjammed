const galleryscroll = document.querySelector(".gallery-scroll");
const elements = document.querySelectorAll(".gallery-element");

elements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    const elRect = el.getBoundingClientRect();
    const galleryRect = galleryscroll.getBoundingClientRect();

    const isOutOfViewLeft = elRect.left < galleryRect.left;
    const isOutOfViewRight = elRect.right > galleryRect.right;

    if (isOutOfViewLeft || isOutOfViewRight) {
      galleryscroll.scrollTo({
        left:
          el.offsetLeft - galleryscroll.clientWidth / 2 + el.clientWidth / 2,
        behavior: "smooth",
      });
    }
  });
});

// Get all the color buttons
document.querySelectorAll(".color-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Get the color from the data-color attribute
    const selectedColor = btn.dataset.color;

    // Change the font color of the header (h1 inside .main-header)
    const headerText = document.querySelector(".main-header ");
    headerText.style.color = selectedColor; // Apply the selected color
  });
});

document.querySelector(".el1").addEventListener("click", function () {
  // Hide the gallery and other content
  document.querySelector(".gallery").style.display = "none";

  // Display the post content in full screen
  const mainContent = document.createElement("div");
  mainContent.innerHTML = `
<div class="post">
  <div class="post-images">
    <img src="mock5.png" alt="Image 1" class="post-image" />
    <img src="mock6.png" alt="Image 2" class="post-image" />
  </div>
  
  <div class="post-text">
    <h2>SAAS Interface | Lexagle</h2>
    <p>
In my first internship with Lexagle, a Singaporean SAAS company, I collaborated with the product and engineering team to translate design briefs into functional user interfaces for their contract management platform. I was able to present design solutions and prototypes to stakeholders and I assisted in developing and maintaining documentation regarding design system guidelines. I was also able to provided quality assurance for launched features through close collaboration with a team of developers internationally.

    </p>
    </p>

    <a href="https://www.lexagle.com/" target="_blank" class="post-button">Read More</a>
  </div>
</div>
  `;
  // Add the post content to the main element
  document.querySelector("main").innerHTML = "";
  document.querySelector("main").appendChild(mainContent);
});

document.querySelector(".el2").addEventListener("click", function () {
  // Hide the gallery and other content
  document.querySelector(".gallery").style.display = "none";

  // Display the post content in full screen
  const mainContent = document.createElement("div");
  mainContent.innerHTML = `
<div class="post">
  <div class="post-images">
    <img src="mock2.png" alt="Image 1" class="post-image" />
    <img src="mock7.png" alt="Image 2" class="post-image" />
  </div>
  
  <div class="post-text">
    <h2>TGG | Javascript Game</h2>
    <p>
The Green God is a custom memory card flip game I built using javascript.
    </p>
    </p>

    <a href="https://thegreengod.netlify.app/" target="_blank" class="post-button">Try it out!</a>
  </div>
</div>
    `;

  // Add the post content to the main element
  document.querySelector("main").innerHTML = "";
  document.querySelector("main").appendChild(mainContent);
});

document.querySelector(".el3").addEventListener("click", function () {
  // Hide the gallery and other content
  document.querySelector(".gallery").style.display = "none";

  // Display the post content in full screen
  const mainContent = document.createElement("div");
  mainContent.innerHTML = `
<div class="post">
  <div class="post-images">
    <img src="mock8.png" alt="Image 1" class="post-image" />
    <img src="mock9.png" alt="Image 2" class="post-image" />
  </div>
  <div class="post-text">
    <h2>HCQ Marketing System</h2>
    <p>
HCQ Marketing System is a custom made all-in system for a local hardware company. Its integrated with features that support inventory reports, delivery scheduling, invoice printing and more. I worked alongside two other developers and used Python and the Django framework to implement the system for the HCQ group.
    </p>
  </div>
</div>
    `;

  // Add the post content to the main element
  document.querySelector("main").innerHTML = "";
  document.querySelector("main").appendChild(mainContent);
});

document.querySelector(".el4").addEventListener("click", function () {
  // Hide the gallery and other content
  document.querySelector(".gallery").style.display = "none";

  // Display the post content in full screen
  const mainContent = document.createElement("div");
  mainContent.innerHTML = `
<div class="post">
  <div class="post-images">
    <img src="mock10.png" alt="Image 1" class="post-image" />
    <img src="mock4.png" alt="Image 2" class="post-image" />
  </div>
  <div class="post-text">
    <h2>Booking Website</h2>
    <p>
      Sage is a beach resort booking website that allows users to browse available accommodations, view resort amenities, and easily book their stay online. Designed with a clean, coastal-inspired interface, the site offers a seamless user experience for both desktop and mobile visitors.
    </p>
  </div>
</div>
    `;

  // Add the post content to the main element
  document.querySelector("main").innerHTML = "";
  document.querySelector("main").appendChild(mainContent);
});

document.querySelector(".el5").addEventListener("click", function () {
  // Hide the gallery and other content
  document.querySelector(".gallery").style.display = "none";

  // Display the post content in full screen
  const mainContent = document.createElement("div");
  mainContent.innerHTML = `
<div class="post">
  <div class="post-images">
    <img src="mock1.png" alt="Image 1" class="post-image" />
    <img src="mock2.png" alt="Image 2" class="post-image" />
  </div>
  <div class="post-text">
    <h2>Post Title</h2>
    <p>
      Collaborated with the product and engineering team to translate design briefs into functional user interfaces under an Agile cycle.  
      Presented design solutions and prototypes to stakeholders.  
      Assisted in developing and maintaining documentation regarding design system guidelines.  
      Provided Quality Assurance for launched features.
    </p>
  </div>
</div>
    `;

  // Add the post content to the main element
  document.querySelector("main").innerHTML = "";
  document.querySelector("main").appendChild(mainContent);
});

document.querySelector(".contact").addEventListener("click", function () {
  const contactInfo = document.querySelector(".contact-info");
  // Toggle the 'active' class to show/hide contact info
  contactInfo.classList.toggle("active");
});
