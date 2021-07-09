// Close the Modal (by clicking the rest of the screen, or the modal_close icon)
let loginModal = document.getElementById("login_modal");
let closeLoginModal = document.getElementById("login_modal_close");
// When the user clicks on <span> (x), close the modal
closeLoginModal.onclick = function() {
    loginModal.style.display = "none";
}

// Close the Modal (by clicking the rest of the screen, or the modal_close icon)
let registerModal = document.getElementById("register_modal");
let closeRegisterModal = document.getElementById("register_modal_close");
// When the user clicks on <span> (x), close the modal
closeRegisterModal.onclick = function() {
    registerModal.style.display = "none";
}
  
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == loginModal ) {
        loginModal.style.display = "none";
    }
    if (event.target == registerModal ) {
        registerModal.style.display = "none";
    }
}

// Show appropriate modals on click
document.getElementById("login_button").addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "block";
});

document.getElementById("register_button").addEventListener("click", (e) => {
    e.preventDefault();
    registerModal.style.display = "block";
});

function closeForm(form) {
    if (form === 1) {
        loginModal.style.display = "none";
    }
    if (form === 2) {
        registerModal.style.display = "none";
    }
}

function navSwap(status, name) {
    if (status === true) {
        document.getElementById("username_display").innerText = name;
        document.getElementById("login_button_group").style.display = "none";
        document.getElementById("user_button_group").style.display = "block";
    }
    else {
        document.getElementById("username_display").innerText = "";
        document.getElementById("login_button_group").style.display = "block";
        document.getElementById("user_button_group").style.display = "none";
    }
}