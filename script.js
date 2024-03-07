document.addEventListener('DOMContentLoaded', function () {
    // Get the buttons and popup elements
    const popupButtons = document.querySelectorAll('.popupButton');
    const popupContainer = document.getElementById('popupContainer');
    const closePopupButton = document.getElementById('closePopup');
    const popupText = document.getElementById('popupText');

    // Function to open the popup window
    function openPopup(text) {
        popupText.textContent = text; // Set the text content dynamically
        popupContainer.style.display = 'block';
    }

    // Function to close the popup window
    function closePopup() {
        popupContainer.style.display = 'none';
    }

    // Add event listener to each popup button
    popupButtons.forEach(button => {
        button.addEventListener('click', function() {
            let buttonText = "Your text content here"; // Default text
            // Check which button was clicked and set text accordingly
            if (button.parentElement.classList.contains('nwsection1')) {
                buttonText = "Mild, but grey";
            } else if (button.parentElement.classList.contains('swsection1')) {
                buttonText = "Grey, just grey";
            } else if (button.parentElement.classList.contains('sesection1')) {
                buttonText = "Sunny & settled";
            } else if (button.parentElement.classList.contains('esection1')) {
                buttonText = "Mostly calm";
            }
            openPopup(buttonText); // Open popup with the corresponding text
        });
    });

    // Add event listener to close popup button
    closePopupButton.addEventListener('click', closePopup);
});