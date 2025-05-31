document.addEventListener('DOMContentLoaded', function() {
    // 从data/papers.js加载论文数据
    const paperListContainer = document.querySelector('.paper-list-container');
    
    // 显示加载状态
    paperListContainer.innerHTML = `
        <div class="loading-papers">
            <div class="loading-spinner"></div>
            <p>Loading publications...</p>
        </div>
    `;
    
    // 动态加载论文数据
    setTimeout(() => {
        // 从全局变量获取论文数据
        const papers = window.papersData || [];
        renderPapers(papers);
    }, 1000); // 模拟加载延迟
    
    function renderPapers(papers) {
        paperListContainer.innerHTML = '';
        
        if (!papers || papers.length === 0) {
            paperListContainer.innerHTML = `
                <div class="no-papers">
                    <i class="fas fa-file-alt"></i>
                    <p>No publications available at the moment</p>
                </div>
            `;
            return;
        }
        
        papers.forEach((paper, index) => {
            const paperItem = document.createElement('div');
            paperItem.className = 'paper-item';
            paperItem.style.animationDelay = `${index * 0.1}s`;
            
            let linksHTML = `
                <a href="${paper.paperLink}" class="paper-link" target="_blank">
                    <i class="fas fa-file-pdf"></i> Paper
                </a>
            `;
            
            if (paper.github) {
                linksHTML += `
                    <a href="${paper.github}" class="paper-link" target="_blank">
                        <i class="fab fa-github"></i> Code
                    </a>
                `;
            }
            
            if (paper.huggingface) {
                linksHTML += `
                    <a href="${paper.huggingface}" class="paper-link" target="_blank">
                        <i class="fas fa-robot"></i> Model
                    </a>
                `;
            }
            
            if (paper.posterPdf) {
                linksHTML += `
                    <a href="${paper.posterPdf}" class="paper-link" target="_blank">
                        <i class="fas fa-image"></i> Poster
                    </a>
                `;
            }
            
            paperItem.innerHTML = `
                <div class="paper-header">
                    <span class="paper-badge">${paper.conference}</span>
                    <span class="paper-year">${paper.year}</span>
                </div>
                <h4 class="paper-title">${paper.title}</h4>
                <p class="paper-authors">${paper.authors}</p>
                <div class="paper-links">
                    ${linksHTML}
                </div>
            `;
            
            paperListContainer.appendChild(paperItem);
        });
    }
});
