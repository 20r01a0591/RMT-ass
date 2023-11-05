document.addEventListener("DOMContentLoaded", function () {
    const imageBoxes = document.querySelectorAll('.fplan-col');
    const displayedImage = document.getElementById('displayed-image');
    const imageContainer = document.getElementById('floorplan-col1');

    imageBoxes.forEach(box => {
        box.addEventListener('click', function () {
            const imageSource = this.getAttribute('data-image');
            displayedImage.src = imageSource;
            imageContainer.style.display = 'block';
        });
    });

    imageContainer.addEventListener('click', function () {
        imageContainer.style.display = 'none';
    });
});

    const upArrows = document.querySelectorAll('.hk img');

    upArrows.forEach((upArrow, index) => {
        upArrow.addEventListener('click', () => {
            // Find the corresponding .pm2 content element
            const pm2 = document.querySelectorAll('.pm2')[index];
            // Toggle the visibility of .pm2 content
            if (pm2.style.display === 'none' || pm2.style.display === '') {
                pm2.style.display = 'block';
                upArrow.src = 'uparrow.png'; // Replace with the path to your down arrow image
            } else {
                pm2.style.display = 'none';
                upArrow.src = 'downarrow.png'; // Replace with the path to your up arrow image
            }
        });
    });
