document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popupContainer');
    const popupText = document.getElementById('popupText');
    const mapContainer = document.querySelector('.map-container');

    // Define messages for each path
    const pathMessages = {
        path1: "Mild, but grey",
        path2: "Grey, just grey",
        path3: "Sunny and Settled",
        path4: "Mostly Calm",
        path5: "Marvelous",
        path6: "Dreadfully Dull",
        path7: "Overcast"
        // Add messages for more paths here
    };

    // Function to open the pop-up with specified text
    function openPopup(text) {
        popupText.textContent = text;
        popupContainer.style.display = 'block';
    }
    function changeToCircularGradient() {
        document.body.classList.add('circular-gradient');
    }
    function changeToLinearGradient() {
        document.body.classList.remove('circular-gradient');
    }

    // Function to close the pop-up
    function closePopup() {
        popupContainer.style.display = 'none';
    }

    // Add click event listeners to each path
    const paths = document.querySelectorAll('.map-path');
    paths.forEach(path => {
        path.addEventListener('click', function() {
            const pathId = this.getAttribute('id');
            const message = pathMessages[pathId];
            openPopup(message);
            changeToCircularGradient();
        });
    });

    // Close pop-up when close button is clicked
    const closePopupButton = document.getElementById('closePopup');
    closePopupButton.addEventListener('click', function() {
        closePopup();
        changeToLinearGradient();
    });

    // Optionally, you can add code here to handle closing the pop-up when clicking outside of it or any other desired functionality.
});
