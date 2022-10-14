// Variables
const openBtn =  document.getElementById("open-btn");
const modalContainer = document.getElementById("modal-container");
const closeBtn = document.getElementById("close-btn");

// Event Listeners
openBtn.addEventListener('click', displayModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', windowCloseModal);

function displayModal() {
    modalContainer.style.display = "block";
}

function closeModal() {
    modalContainer.style.display = "none";
}

function windowCloseModal(e) {
    if(e.target === modalContainer) {
        modalContainer.style.display = "none";
    }
}