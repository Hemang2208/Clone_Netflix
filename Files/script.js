"use strict"; // Enforce strict mode

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById('loader');
    const percentageText = document.querySelector('.percentage');
    const progressBar = document.querySelector('.progress');
    const scrollToTopButton = document.getElementById('scrollToTop');

    let percentage = 0;

    loader.style.opacity = '1';
    percentageText.style.opacity = '1';

    const loadingInterval = setInterval(() => {
        if (percentage < 100) {
            percentage++;
            updateLoaderUI(percentage);
        } else {
            clearInterval(loadingInterval);
            hideLoader();
        }
    }, 30);

    document.body.style.overflow = 'hidden';

    window.onscroll = () => {
        scrollToTopButton.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
    };

    scrollToTopButton.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    function updateLoaderUI(percentage) {
        percentageText.textContent = `Loading ${percentage}%`;
        progressBar.style.width = `${percentage}%`;
        
        const opacityValue = ((100 - percentage) / 100).toString();
        loader.style.opacity = opacityValue;
        percentageText.style.opacity = opacityValue;
    }

    function hideLoader() {
        setTimeout(() => {
            loader.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500);
    }
});