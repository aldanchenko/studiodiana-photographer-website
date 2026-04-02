// =============================================
//   Studio Diana — main.js
// =============================================

// ---------- Navbar scroll effect ----------
const navbar = document.getElementById('navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ---------- Active nav link on scroll ----------
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ---------- Gallery filter ----------
const filterBtns  = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    galleryItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.classList.remove('hidden-item');
      } else {
        item.classList.add('hidden-item');
      }
    });
  });
});

// ---------- Lightbox ----------
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const btnClose    = document.querySelector('.lightbox-close');
const btnPrev     = document.querySelector('.lightbox-prev');
const btnNext     = document.querySelector('.lightbox-next');

let currentIndex = 0;
let visibleItems = [];

function openLightbox(index) {
  visibleItems = [...document.querySelectorAll('.gallery-item:not(.hidden-item)')];
  currentIndex = index;
  lightboxImg.src = visibleItems[currentIndex].dataset.src;
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.add('hidden');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

function showImage(index) {
  currentIndex = (index + visibleItems.length) % visibleItems.length;
  lightboxImg.src = visibleItems[currentIndex].dataset.src;
}

galleryItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    const allItems = [...galleryItems];
    const visible  = allItems.filter(el => !el.classList.contains('hidden-item'));
    const visIdx   = visible.indexOf(item);
    openLightbox(visIdx);
  });
});

btnClose.addEventListener('click', closeLightbox);
btnPrev.addEventListener('click', () => showImage(currentIndex - 1));
btnNext.addEventListener('click', () => showImage(currentIndex + 1));

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (lightbox.classList.contains('hidden')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   showImage(currentIndex - 1);
  if (e.key === 'ArrowRight')  showImage(currentIndex + 1);
});

// ---------- Testimonials slider ----------
const testimonials = document.querySelectorAll('.testimonial');
const dots         = document.querySelectorAll('.dot');
let autoSlide;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(autoSlide);
    showTestimonial(+dot.dataset.index);
    startAutoSlide();
  });
});

function startAutoSlide() {
  let current = [...testimonials].findIndex(t => t.classList.contains('active'));
  autoSlide = setInterval(() => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }, 5000);
}
startAutoSlide();

// ---------- Contact form ----------
const form       = document.getElementById('contact-form');
const formNotice = document.getElementById('form-notice');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name    = form.name.value.trim();
  const email   = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formNotice.textContent = 'Please fill in all required fields.';
    formNotice.style.color = '#c0392b';
    return;
  }

  // GitHub Pages is static — show a friendly message instead of a real submit
  formNotice.textContent = 'Thank you! I\'ll be in touch within 48 hours.';
  formNotice.style.color = '#c8a97e';
  form.reset();
});

// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Scroll-reveal animations ----------
const revealEls = document.querySelectorAll(
  '.about-grid, .service-card, .gallery-item, .contact-grid'
);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});
