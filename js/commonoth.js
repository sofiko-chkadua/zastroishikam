// общая функция 
function togglePopup(modal) {
    modal.classList.toggle("popup_open");
    if (!modal.classList.contains("popup_open")) {
        document.removeEventListener("keyup", keyupHandler);
    }
}


// функция закр по еск
const keyupHandler = function (e) {
    console.log(123);
    if (e.keyCode == 27) {
        const openModal = document.querySelector(".popup_open");
        togglePopup(openModal);
    }
};

function handleOverlayClick(popup, e) {
    if (!e.target.closest(".popup__container")) {
      togglePopup(popup);
    }
    document.removeEventListener("keyup", keyupHandler);
  }