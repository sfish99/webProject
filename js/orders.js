document.addEventListener("DOMContentLoaded", () => {
    const email = prompt("רוצה לקבל קוד קופון של 10% הנחה לקנייה הבאה? השאירי את כתובת המייל שלך 😊");

    if (email) {
        alert(`מעולה! קוד הקופון נשלח ל־${email} 🎁`);
    } else {
        alert("אולי בפעם הבאה 😉");
    }
});

function showThanks(button) {
    const msg = document.createElement("p");
    msg.textContent = "תודה על האישור!";
    msg.classList.add("thank-message");
    button.parentElement.appendChild(msg);
    button.disabled = true;
}

$(document).ready(function() {
    $(".order-card").on("mouseenter", function () {
        $(this).addClass("hovered");
    });
    $(".order-card").on("mouseleave", function () {
        $(this).removeClass("hovered");
    });
});
