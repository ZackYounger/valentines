document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const container = document.getElementById('container');
    const valentineQuestion = document.querySelector('.valentine-question');
    const celebration = document.querySelector('.celebration');

    const moveButton = (event) => {
        // Set position to absolute on the first move.
        // This makes it jump out of the flex container.
        if (window.getComputedStyle(noBtn).position !== 'absolute') {
            noBtn.style.position = 'absolute';
        }

        const containerRect = container.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();

        // Calculate the maximum possible top and left positions
        const maxTop = containerRect.height - noBtnRect.height;
        const maxLeft = containerRect.width - noBtnRect.width;

        // Generate a random position within the container
        let randomTop = Math.floor(Math.random() * maxTop);
        let randomLeft = Math.floor(Math.random() * maxLeft);

        noBtn.style.top = `${randomTop}px`;
        noBtn.style.left = `${randomLeft}px`;
    };

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton);

    yesBtn.addEventListener('click', () => {
        valentineQuestion.style.display = 'none';
        celebration.style.display = 'block';
    });
});
