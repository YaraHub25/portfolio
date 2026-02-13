// =================================
// YARA VASQUEZ PORTFOLIO - JAVASCRIPT
// =================================

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Active navigation link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(function(section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
  
  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe all sections except hero
  document.querySelectorAll('section:not(.hero)').forEach(function(section) {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
  });
  
  // Cursor effect for decorative elements
  const decorations = document.querySelectorAll('.hero-decoration');
  document.addEventListener('mousemove', function(e) {
    const clientX = e.clientX;
    const clientY = e.clientY;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    decorations.forEach(function(decoration, index) {
      const speed = (index + 1) * 0.02;
      const x = (clientX - centerX) * speed;
      const y = (clientY - centerY) * speed;
      decoration.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    });
  });
});

// Preload Google Fonts for better performance
(function() {
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500;600&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);
})();