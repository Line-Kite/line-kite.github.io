document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动效果
    const scrollIndicator = document.getElementById('scrollIndicator');
    scrollIndicator.addEventListener('click', function() {
        const targetSection = document.querySelector('.info-research-section');
        targetSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // 添加视觉反馈
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 1000);
    });

    // 悬停效果增强
    scrollIndicator.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(5px)';
    });
    
    scrollIndicator.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
    
    // Research Details 悬停效果
    const detailSections = document.querySelectorAll('.detail-section');
    detailSections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 206, 209, 0.2)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // 添加动画类
    const animatedElements = document.querySelectorAll('.header-info, .personal-info, .research-areas, .publications');
    animatedElements.forEach((el, index) => {
        el.classList.add('animate-fade-in');
        el.classList.add(`animate-delay-${index}`);
    });
    
    // 头像动画
    const avatar = document.querySelector('.avatar-container');
    avatar.classList.add('pulse');
    
    // 研究领域卡片提示
    const areaCards = document.querySelectorAll('.area-card');
    areaCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const tooltip = this.getAttribute('data-tooltip');
            if (tooltip) {
                this.setAttribute('title', tooltip);
            }
        });
    });
});
