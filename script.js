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
        }

        // Get container's inner dimensions
        const containerRect = container.getBoundingClientRect();
        const containerPadding = 40; // matches CSS padding
        
        // Available space inside the container (accounting for padding)
        const availableWidth = container.clientWidth;
        const availableHeight = container.clientHeight;

        // Set position to absolute (relative to container which has position:relative)
        noBtn.style.position = 'absolute';
        
        // Calculate random position that keeps button fully visible inside the white box
        const minPos = 10;
        const maxLeft = availableWidth - btnWidth - minPos;
        const maxTop = availableHeight - btnHeight - minPos;

        let randomLeft = Math.floor(Math.random() * (maxLeft - minPos)) + minPos;
        let randomTop = Math.floor(Math.random() * (maxTop - minPos)) + minPos;

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
