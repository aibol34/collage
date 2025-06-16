document.addEventListener('DOMContentLoaded', function () {
  // ★ Фоновая анимация частиц
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      const size = Math.random() * 6 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100 + 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      const delay = Math.random() * 10;
      const duration = Math.random() * 10 + 15;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      const colors = [
        'rgba(37, 99, 235, 0.5)',
        'rgba(139, 92, 246, 0.5)',
        'rgba(101, 163, 255, 0.4)'
      ];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particlesContainer.appendChild(particle);
    }
  }

  // ★ Hover-анимация карточек статистики и направлений
  const cards = document.querySelectorAll('.stat-card, .feature-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-15px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  // ★ Плавная прокрутка по якорям
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ★ Слайдер "Неге біз?" с анимацией сдвига влево
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  function showSlide(index, direction = 'right') {
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'slide-in-left', 'slide-in-right', 'slide-out-left', 'slide-out-right');

    if (i === index) {
      slide.classList.add('active', direction === 'left' ? 'slide-in-left' : 'slide-in-right');
    } else if (i === currentSlide) {
      const outClass = direction === 'left' ? 'slide-out-right' : 'slide-out-left';
      slide.classList.add(outClass);

      // Удаляем слайд после анимации
      slide.addEventListener('animationend', () => {
        slide.classList.remove(outClass);
      }, { once: true });
    }
  });

  currentSlide = index;
}


  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next, 'right');
  }

  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev, 'left');
  }

  if (slides.length > 0) {
    showSlide(currentSlide);
    if (leftArrow && rightArrow) {
      leftArrow.addEventListener('click', prevSlide);
      rightArrow.addEventListener('click', nextSlide);
    }

    setInterval(nextSlide, 5000); // авто смена
  }
});













// News cards functionality
document.addEventListener('DOMContentLoaded', function() {
    const newsCards = document.querySelectorAll('.news-card');

    newsCards.forEach(card => {
        const readMoreBtn = card.querySelector('.read-more');

        readMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            card.classList.toggle('active');

            if (card.classList.contains('active')) {
                readMoreBtn.textContent = 'Свернуть';
                card.style.height = 'auto';
            } else {
                readMoreBtn.textContent = 'Читать далее';
                card.style.height = '500px';
            }
        });
    });
});
