document.addEventListener('DOMContentLoaded', function () {
    const popupButtons = document.querySelectorAll('.popupButton');
    const popupContainer = document.getElementById('popupContainer');
    const closePopupButton = document.getElementById('closePopup');
    const popupText = document.getElementById('popupText');
    const mapContainer = document.querySelector('.map-container');

    function openPopup(text) {
        popupText.textContent = text;
        popupContainer.style.display = 'block';
    }

    function closePopup() {
        popupContainer.style.display = 'none';
    }

    function changeToCircularGradient() {
        document.body.classList.add('circular-gradient');
    }

    function changeToLinearGradient() {
        document.body.classList.remove('circular-gradient');
    }

    popupButtons.forEach(button => {
        button.addEventListener('click', function() {
            let buttonText = "";
            if (button.parentElement.classList.contains('nwsection1')) {
                buttonText = "Mild, but grey";
            } else if (button.parentElement.classList.contains('swsection1')) {
                buttonText = "Grey, just grey";
            } else if (button.parentElement.classList.contains('sesection1')) {
                buttonText = "Sunny & settled";
            } else if (button.parentElement.classList.contains('esection1')) {
                buttonText = "Mostly calm";
            }
            openPopup(buttonText);
            changeToCircularGradient();
        });
    });

    closePopupButton.addEventListener('click', function() {
        closePopup();
        changeToLinearGradient();
    });
});
