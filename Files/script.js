document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById('loader');
    const percentageText = document.querySelector('.percentage');
    const progressBar = document.querySelector('.progress');
    const scrollToTopButton = document.getElementById('scrollToTop');

    let percentage = 0;

    loader.style.opacity = '1'; // Start fully visible
    percentageText.style.opacity = '1'; // Start fully visible

    const loadingInterval = setInterval(() => {
        if (percentage < 100) {
            percentage++;
            percentageText.textContent = `Loading ${percentage}%`;
            progressBar.style.width = percentage + '%';

            // Update opacity based on percentage
            loader.style.opacity = ((100 - percentage) / 100).toString(); // Fade out
            percentageText.style.opacity = ((100 - percentage) / 100).toString(); // Fade out
        } else {
            clearInterval(loadingInterval);
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 500);
        }
    }, 30);

    document.body.style.overflow = 'hidden';

    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    };

    scrollToTopButton.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
});