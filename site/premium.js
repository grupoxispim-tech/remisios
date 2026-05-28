// Menu toggle mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if(menuToggle && navLinks){
  menuToggle.addEventListener('click', function(){
    navLinks.classList.toggle('active');
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(){
      navLinks.classList.remove('active');
    });
  });
}

// Cardápio tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const pizzaItems = document.querySelectorAll('.pizza-item');

if(tabBtns && tabBtns.length){
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function(){
      const category = this.getAttribute('data-category');
      
      // Remove active class e mostra apenas a categoria selecionada
      tabBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      pizzaItems.forEach(item => {
        if(item.classList.contains(category)){
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior: 'smooth'});
      // Fechar menu mobile se estiver aberto
      if(navLinks) navLinks.classList.remove('active');
    }
  });
});

// Form submission (placeholder)
var contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Obrigado! Sua solicitação foi enviada. Iremos responder em breve via WhatsApp.');
    this.reset();
  });
}

// Sticky navbar background change on scroll
window.addEventListener('scroll', function(){
  const navbar = document.querySelector('.navbar');
  if(!navbar) return;
  if(window.scrollY > 50){
    navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
  } else {
    navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
  }
});

console.log('🍕 Remisio\'s Premium Site Loaded');
