
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

// solar system
$(window).load(function(){

    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system");
  
    var init = function() {
      body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
        $(this).removeClass('hide-UI').addClass("set-speed");
        $(this).dequeue();
      });
    };
  
    var setView = function(view) { universe.removeClass().addClass(view); };
  
    $("#toggle-data").click(function(e) {
      body.toggleClass("data-open data-close");
      e.preventDefault();
    });
  
    $("#toggle-controls").click(function(e) {
      body.toggleClass("controls-open controls-close");
      e.preventDefault();
    });
  
    $("#data a").click(function(e) {
      var ref = $(this).attr("class");
      solarsys.removeClass().addClass(ref);
      $(this).parent().find('a').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
  
    $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
    $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
    $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
    $(".set-size").click(function() { setView("scale-s set-size"); });
    $(".set-distance").click(function() { setView("scale-d set-distance"); });
  
    init();
  
  });