// Update year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const open = navList.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Handle nav links
  navList.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      const href = a.getAttribute("href");
      if (href.startsWith("#")) {
        // internal section link → close nav
        navList.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
      // external links will behave normally
    });
  });
}

// Scroll spy
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-list a")];

const onScroll = () => {
  const fromTop = window.scrollY + 90;
  let currentId = null;

  for (const sec of sections) {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    if (fromTop >= top && fromTop < top + height) {
      currentId = sec.id;
      break;
    }
  }

  navLinks.forEach(link => {
    if (currentId && link.getAttribute("href") === "#" + currentId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();