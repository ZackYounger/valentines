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
        const h1Rect = h1.getBoundingClientRect();

        const containerPadding = 40;

        // The button should be below the h1
        const minY = h1Rect.bottom - containerRect.top + 20; // 20px gap
        const maxY = containerRect.height - noBtnRect.height - containerPadding;
        
        const maxX = containerRect.width - noBtnRect.width - containerPadding * 2;

        let randomX = Math.random() * maxX;
        let randomY = Math.random() * (maxY - minY) + minY;

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
