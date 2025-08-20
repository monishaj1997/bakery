

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  // Function to show section from both nav & card clicks
  window.showSection = function (sectionId) {
    // Hide all sections
    sections.forEach(sec => sec.classList.remove("active"));

    // Show the requested section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add("active");
    }

    // Update nav active state
    navLinks.forEach(link => {
      const linkSection = link.getAttribute("href").replace("#", "");
      if (linkSection === sectionId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Nav link clicks
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // prevent default anchor jump
      const targetId = this.getAttribute("href").replace("#", "");
      showSection(targetId);
    });
  });

  // Show first section initially
  if (sections.length > 0) {
    sections[0].classList.add("active");
  }
});




