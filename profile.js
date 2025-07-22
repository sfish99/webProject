document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        document.getElementById("fname").textContent = user.fname;
        document.getElementById("lname").textContent = user.lname;
        document.getElementById("agree").textContent = user.agree ? "כן" : "לא";
        document.getElementById("email").textContent = user.email;
        document.getElementById("birthdate").textContent = user.birthdate;
        document.getElementById("gender").textContent = user.gender;
        document.getElementById("phone").textContent = user.phone;
        document.getElementById("age").textContent = calculateAge(user.birthdate);
   
        // שינוי כותרת לפי מין
        const welcome = document.getElementById("welcomeTitle");
        if (user.gender === "נקבה") {
            welcome.textContent = `ברוכה הבאה, ${user.fname}!`;
        } else if (user.gender === "זכר") {
            welcome.textContent = `ברוך הבא, ${user.fname}!`;
        } else {
            welcome.textContent = `ברוך/ה הבא/ה, ${user.fname}!`;
        }

        // הדגשת תמונה דינמית
        document.querySelector(".profileImg").classList.add("highlighted");

    } else {
        alert("אין נתוני משתמש זמינים");
    }
});

function goToOrders() {
    window.location.href = "orders.html";
}
