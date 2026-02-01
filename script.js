document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const container = document.getElementById('container');
    const valentineQuestion = document.querySelector('.valentine-question');
    const celebration = document.querySelector('.celebration');
    const h1 = valentineQuestion.querySelector('h1');

    function moveButton() {
        const containerRect = container.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();
        const yesBtnRect = yesBtn.getBoundingClientRect();

        const containerPadding = 20;

        let randomX, randomY;

        // Ensure the button does not overlap with the "Yes" button
        do {
            randomX = Math.random() * (containerRect.width - noBtnRect.width - containerPadding * 2) + containerPadding;
            randomY = Math.random() * (containerRect.height - noBtnRect.height - containerPadding * 2) + containerPadding;
        } while (
            randomX < yesBtnRect.right &&
            randomX + noBtnRect.width > yesBtnRect.left &&
            randomY < yesBtnRect.bottom &&
            randomY + noBtnRect.height > yesBtnRect.top
        );

        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    }

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton); // Also move on click

    yesBtn.addEventListener('click', () => {
        valentineQuestion.style.display = 'none';
        celebration.style.display = 'block';
    });
});
