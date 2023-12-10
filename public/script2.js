document.addEventListener("DOMContentLoaded", async function() {
    const modal = document.getElementById('myModal');

    // Asynchronous delay using async/await
    async function delay(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }

    // Delay the modal by 10 seconds
    await delay(10000);
    modal.style.display = 'block';

    function closeModal() {
        modal.style.display = 'none';
    }

    function revealDeal() {
        alert('Special Deal: 10% Off on your next purchase!');
        closeModal();
    }
});
