const modal = document.getElementById('myModal');

        // Delay the modal by 10 seconds
        setTimeout(function() {
            modal.style.display = 'block';
        }, 10000);

        function closeModal() {
            modal.style.display = 'none';
        }

        function revealDeal() {
            alert('Special Deal: 10% Off on your next purchase!');
            closeModal();
        }