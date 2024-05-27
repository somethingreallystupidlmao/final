function goToSecondPage() {
    window.location.href = "second-page.html";
}

function moveNoButton() {
    const noButton = document.querySelector('.no-button');
    const container = document.querySelector('.container');

    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    const maxTop = containerRect.height - noButtonRect.height;
    const maxLeft = containerRect.width - noButtonRect.width;

    const newTop = Math.random() * maxTop;
    const newLeft = Math.random() * maxLeft;

    noButton.style.top = `${newTop}px`;
    noButton.style.left = `${newLeft}px`;
}
