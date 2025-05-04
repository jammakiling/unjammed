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
    <div class="post-images">
      <img src="mock1.png" alt="Image 1" class="post-image" />
      <img src="mock2.png" alt="Image 2" class="post-image" />
    </div>
    <div class="post-text">
      <h2>Post Title</h2>
      <p> Collaborated with the product and engineering team to translate design briefs into functional user interfaces under an Agile cycle.
Presented design solutions and prototypes to stakeholders.
Assisted in developing and maintaining documentation regarding design system guidelines.
Provided Quality Assurance for launched features
.</p>
    </div>
  `;

  // Add the post content to the main element
  document.querySelector("main").innerHTML = "";
  document.querySelector("main").appendChild(mainContent);
});

// Get the contact list item and the contact-info section
const contactListItem = document.querySelector(".contact");
const contactInfo = document.querySelector(".contact-info");

contactListItem.addEventListener("click", function () {
  // Toggle the active class to change the background color
  contactListItem.classList.toggle("active");

  // Toggle visibility of the contact info
  if (contactListItem.classList.contains("active")) {
    contactInfo.style.display = "block";
  } else {
    contactInfo.style.display = "none";
  }
});
