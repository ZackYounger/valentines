document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const container = document.getElementById('container');
    const valentineQuestion = document.querySelector('.valentine-question');
    const celebration = document.querySelector('.celebration');

    const moveButton = (event) => {
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;

        // On first move, create an invisible placeholder to keep Yes in place
        if (noBtn.style.position !== 'absolute') {
            const placeholder = document.createElement('div');
            placeholder.style.width = btnWidth + 'px';
            placeholder.style.height = btnHeight + 'px';
            placeholder.style.visibility = 'hidden';
            noBtn.parentNode.appendChild(placeholder);
            
            // Set position to absolute (relative to container which has position:relative)
            noBtn.style.position = 'absolute';
        }

        // Get the container's dimensions
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        
        // Padding from edges
        const padding = 20;

        // Calculate safe bounds (ensuring button stays fully inside)
        const maxLeft = containerWidth - btnWidth - padding;
        const maxTop = containerHeight - btnHeight - padding;

        // Generate random position, clamped to valid range
        let randomLeft = Math.floor(Math.random() * Math.max(1, maxLeft - padding)) + padding;
        let randomTop = Math.floor(Math.random() * Math.max(1, maxTop - padding)) + padding;

        // Extra safety: clamp values to ensure they're within bounds
        randomLeft = Math.max(padding, Math.min(randomLeft, maxLeft));
        randomTop = Math.max(padding, Math.min(randomTop, maxTop));

        noBtn.style.left = `${randomLeft}px`;
        noBtn.style.top = `${randomTop}px`;
    };

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton);

    yesBtn.addEventListener('click', () => {
        valentineQuestion.style.display = 'none';
        celebration.style.display = 'block';
    });
});
