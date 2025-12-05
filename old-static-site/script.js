// QIC Website Clone - Interactive JavaScript

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Carousel Functionality
class Carousel {
    constructor(element) {
        this.carousel = element;
        this.track = element.querySelector('.carousel-track');
        this.slides = element.querySelectorAll('.carousel-slide');
        this.dots = element.querySelectorAll('.dot');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.autoPlayInterval = null;
        
        this.init();
    }
    
    init() {
        // Dot click handlers
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
        
        // Start autoplay
        this.startAutoPlay();
        
        // Pause on hover
        this.carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        const offset = -100 * index;
        this.track.style.transform = `translateX(${offset}%)`;
        
        // Update dots
        this.dots.forEach(dot => dot.classList.remove('active'));
        this.dots[index].classList.add('active');
        
        // Update slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.slides[index].classList.add('active');
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(next);
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// Initialize carousel
const carouselElement = document.querySelector('.carousel');
if (carouselElement) {
    new Carousel(carouselElement);
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add scroll-based animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateOnScroll = document.querySelectorAll('.product-card, .stat-card, .award-card, .contact-card');
animateOnScroll.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// Language Switcher
const languageSwitcher = document.querySelector('.language-switcher');
if (languageSwitcher) {
    const spans = languageSwitcher.querySelectorAll('span');
    spans.forEach(span => {
        span.addEventListener('click', () => {
            spans.forEach(s => s.classList.remove('active'));
            span.classList.add('active');
        });
    });
}

// Add hover effect to cards
const cards = document.querySelectorAll('.product-card, .award-card, .contact-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Console message
console.log('QIC Website Clone - Loaded Successfully');
console.log('All interactive features are ready!');
