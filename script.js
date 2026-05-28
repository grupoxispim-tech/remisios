// Toggle mobile nav
var navToggle = document.getElementById('navToggle');
var nav = document.getElementById('nav');
if(navToggle && nav){
  navToggle.addEventListener('click', function(){
    if(window.getComputedStyle(nav).display === 'none'){
      nav.style.display = 'flex';
    } else {
      nav.style.display = 'none';
    }
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
  anchor.addEventListener('click', function(e){
    var target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
      if(window.innerWidth <= 800 && nav) nav.style.display = 'none';
    }
  });
});

// Contact form (placeholder behavior)
var contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Obrigado! Sua mensagem foi enviada. Iremos responder em breve.');
    this.reset();
  });
}

