function openModal(imageSrc) {
    let modal = document.getElementById("myModal");
    let modalImage = document.getElementById("modal-image");

    modal.style.display = "block";
    modalImage.src = imageSrc;
}

let closeBtn = document.querySelector(".close");
closeBtn.onclick = function () {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    let modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


