
const readMoreButton = document.getElementById("read-more-button");
const aboutDetails = document.getElementById("about-details");

readMoreButton.addEventListener("click", function () {
  aboutDetails.hidden = !aboutDetails.hidden;

  if (aboutDetails.hidden) {
    readMoreButton.textContent = "Read More";
  } else {
    readMoreButton.textContent = "Read Less";
  }

  readMoreButton.setAttribute("aria-expanded", String(!aboutDetails.hidden));
});
