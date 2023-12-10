document.addEventListener("DOMContentLoaded", async function() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(async counter => {
        counter.innerText='0';
        const updateCounter = async () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            const increment = target / 100;

            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                // Simulating an asynchronous delay
                await new Promise(resolve => setTimeout(resolve, 1));
                updateCounter();
            } else {
                counter.innerText = target;
            }
        };

        await updateCounter();
    });
});
