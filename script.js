// Custom Cursor Animation
const cursor = document.querySelector('.cursor');

// Ensure cursor is visible
cursor.style.display = 'block';

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});

// Hide cursor when mouse leaves window
document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
});

// Show cursor when mouse enters window
document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
});

// Typewriter Effect
const typewriter = document.getElementById('typewriter');
const text = typewriter.textContent;
typewriter.textContent = '';

let i = 0;
function type() {
    if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(type, 50);
    }
}

// Start typing animation after a short delay
setTimeout(type, 1000);

// Particle Animation using anime.js
const particlesContainer = document.getElementById('particles');
const particleCount = 50;

// Create particles
for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
    `;
    particlesContainer.appendChild(particle);
}

// Animate particles
function animateParticles() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, i) => {
        anime({
            targets: particle,
            left: anime.random(0, window.innerWidth),
            top: anime.random(0, window.innerHeight),
            scale: [0, 1],
            opacity: [0, 0.8, 0],
            duration: anime.random(1000, 3000),
            delay: anime.random(0, 1000),
            easing: 'easeInOutQuad',
            complete: function() {
                animateParticle(particle);
            }
        });
    });
}

function animateParticle(particle) {
    anime({
        targets: particle,
        left: anime.random(0, window.innerWidth),
        top: anime.random(0, window.innerHeight),
        scale: [0, 1],
        opacity: [0, 0.8, 0],
        duration: anime.random(1000, 3000),
        easing: 'easeInOutQuad',
        complete: function() {
            animateParticle(particle);
        }
    });
}

// Start particle animation
animateParticles();

// Gallery functionality
function openGallery() {
    Fancybox.show([
        {
            src: "assets/IMG_2137.jpg",
            type: "image",
            caption: "Family photo on the porch"
        },
        {
            src: "assets/IMG_3092.JPG",
            type: "image",
            caption: "Child with tinfoil hat"
        },
        {
            src: "assets/IMG_3093.jpg",
            type: "image",
            caption: "Astronaut costume photo"
        }
    ], {
        animated: true,
        showClass: "fancybox-zoomIn",
        hideClass: "fancybox-zoomOut",
        dragToClose: false,
        Carousel: {
            friction: 0.96,
            Dots: true,
            Navigation: {
                prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',
                nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.59 6L12 7.41 17.17 12l-5.17 4.59L10.59 18l6-6z"/></svg>'
            }
        },
        Images: {
            zoom: true,
        },
        Toolbar: {
            display: {
                left: ["infobar"],
                middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY"],
                right: ["slideshow", "thumbs", "close"]
            }
        },
        l10n: {
            CLOSE: "Close Gallery",
            NEXT: "Next Image",
            PREV: "Previous Image",
            MODAL: "You can close this modal content with the ESC key",
            ERROR: "Something Went Wrong, Please Try Again Later",
            IMAGE_ERROR: "Image Not Found",
        }
    });
} 