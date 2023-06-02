function submitForm(event) {
    event.preventDefault();
    alert("Mail Sent!");
}
///burasi moruk cookieler için
function acceptCookies() {

    hideCookieOverlay();
}

function rejectCookies() {

    hideCookieOverlay();
}

function hideCookieOverlay() {
    var cookieOverlay = document.getElementById("cookie-overlay");
    cookieOverlay.style.display = "none";
}

