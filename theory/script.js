// // Mobile menu toggle
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');
// const dropdown = document.querySelector('li.dropdown');

// // Toggle main nav on hamburger click
// hamburger.addEventListener('click', () => {
//   const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
//   hamburger.setAttribute('aria-expanded', !expanded);
//   navLinks.classList.toggle('open');
// });

// // Toggle dropdown on mobile tap
// function isMobile() {
//   return window.matchMedia("(max-width: 768px)").matches;
// }

// // For accessibility, allow keyboard toggle on dropdown for mobile
// dropdown.addEventListener('click', (e) => {
//   if (isMobile()) {
//     e.preventDefault();
//     const submenu = dropdown.querySelector('.dropdown-menu');
//     const isOpen = submenu.classList.contains('open');
//     submenu.classList.toggle('open');
//     dropdown.classList.toggle('open');
//     dropdown.children[0].setAttribute('aria-expanded', !isOpen);
//   }
// });

// // Keyboard accessibility for hamburger menu
// hamburger.addEventListener('keydown', (e) => {
//   if(e.key === "Enter" || e.key === " "){
//     e.preventDefault();
//     hamburger.click();
//   }
// });

// // Keyboard accessibility for dropdown toggle on mobile
// dropdown.addEventListener('keydown', (e) => {
//   if (isMobile() && (e.key === "Enter" || e.key === " ")) {
//     e.preventDefault();
//     dropdown.click();
//   }
// });

// // Optional: close dropdown and menu on window resize to prevent stuck states
// window.addEventListener('resize', () => {
//   if(!isMobile()) {
//     navLinks.classList.remove('open');
//     hamburger.setAttribute('aria-expanded', false);
//     const submenu = dropdown.querySelector('.dropdown-menu');
//     submenu.classList.remove('open');
//     dropdown.classList.remove('open');
//     dropdown.children[0].setAttribute('aria-expanded', false);
//   }
// });

 document.addEventListener('DOMContentLoaded', () => {
      const hamburger = document.querySelector('.hamburger');
      const navLinks = document.querySelector('.nav-links');
      const dropdowns = document.querySelectorAll('.dropdown');
      // Toggle nav menu on hamburger click
      hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !expanded);
        navLinks.classList.toggle('active');
      });
      // Dropdown toggling on mobile
      dropdowns.forEach(dropdown => {
        const toggleLink = dropdown.querySelector('a');
        const submenu = dropdown.querySelector('.dropdown-menu');
        toggleLink.addEventListener('click', (event) => {
          event.preventDefault();
          if(window.innerWidth <= 768) {
             const isShown = submenu.classList.contains('show');
            // Hide all dropdowns first
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
              if(menu !== submenu) menu.classList.remove('show');
            });
            if (!isShown) {
              submenu.classList.add('show');
              toggleLink.setAttribute('aria-expanded', 'true');
            } else {
              submenu.classList.remove('show');
              toggleLink.setAttribute('aria-expanded', 'false');
            }
          }
        });
      });
      // Close dropdowns if clicking outside on mobile
      document.addEventListener('click', (event) => {
        if(window.innerWidth <= 768) {
          if (!event.target.closest('.dropdown')) {
             document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
              menu.classList.remove('show');
            });
            document.querySelectorAll('.dropdown > a').forEach(link => {
              link.setAttribute('aria-expanded', 'false');
            });
          }
        }
      });
      // Close mobile menu if resizing from mobile to desktop
      window.addEventListener('resize', () => {
        if(window.innerWidth > 768) {
          navLinks.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
          document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
            menu.classList.remove('show');
          });
          document.querySelectorAll('.dropdown > a').forEach(link => {
            link.setAttribute('aria-expanded', 'false'); });
        }
      });
    });