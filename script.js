const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const customCursor = document.getElementById("customCursor");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  const navItems = navLinks.querySelectorAll("a");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

function setThemeIcon() {
  if (!themeToggle) return;

  const icon = themeToggle.querySelector("i");

  if (!icon) return;

  if (document.body.classList.contains("dark-mode")) {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
}

const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

setThemeIcon();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("portfolioTheme", "dark");
    } else {
      localStorage.setItem("portfolioTheme", "light");
    }

    setThemeIcon();
  });
}

if (customCursor) {
  document.addEventListener("mousemove", (event) => {
    customCursor.style.left = `${event.clientX}px`;
    customCursor.style.top = `${event.clientY}px`;
  });

  document.addEventListener("mouseenter", () => {
    customCursor.classList.remove("cursor-hidden");
  });

  document.addEventListener("mouseleave", () => {
    customCursor.classList.add("cursor-hidden");
  });

  const hoverElements = document.querySelectorAll(
    "a, button, .btn, .overview-card, .hero-card, .skill-category, .certificate-card"
  );

  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      customCursor.classList.add("cursor-hover");
    });

    element.addEventListener("mouseleave", () => {
      customCursor.classList.remove("cursor-hover");
    });
  });
}