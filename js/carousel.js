document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const carouselSlides = document.querySelector('.carousel-slides');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Simulating poster data (in a real scenario, this would come from a server)
    const posters = [
        'data/papers/images/mm23_poster.png',
        'data/papers/images/acl24_poster.png',
        'data/papers/images/ijcnn24_poster.png'
    ];
    
    // Create slides and indicators
    posters.forEach((poster, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.style.backgroundImage = `url('${poster}')`;
        if (index === 0) slide.classList.add('active');
        carouselSlides.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.dataset.index = index;
        indicatorsContainer.appendChild(indicator);
    });
    
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    
    // Function to show slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        
        currentSlide = index;
    }
    
    // Next slide
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) nextIndex = 0;
        showSlide(nextIndex);
    }
    
    // Previous slide
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) prevIndex = slides.length - 1;
        showSlide(prevIndex);
    }
    
    // Button events
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Indicator events
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            showSlide(index);
        });
    });
    
    // Auto slide
    setInterval(nextSlide, 5000);
});
