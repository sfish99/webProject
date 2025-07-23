document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".rForm");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const agree = document.getElementById("agree");
    const feedback = document.getElementById("feedback");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let valid = true;
        feedback.style.display = "none";

        // איפוס עיצוב קודם
        [fname, lname, phone, email, password].forEach(field => {
            field.classList.remove("error-highlight");
        });

        // ולידציה: שם פרטי ומשפחה באורך תקין
        if (fname.value.trim().length < 2) {
            fname.classList.add("error-highlight");
            valid = false;
        }

        if (lname.value.trim().length < 2) {
            lname.classList.add("error-highlight");
            valid = false;
        }

        // טלפון: בדיוק 10 ספרות
        if (!/^\d{10}$/.test(phone.value)) {
            phone.classList.add("error-highlight");
            valid = false;
        }

        // אימייל חובה
        if (!email.value.includes("@")) {
            email.classList.add("error-highlight");
            valid = false;
        }

        // סיסמה: לפחות 6 תווים
        if (password.value.length < 6) {
            password.classList.add("error-highlight");
            valid = false;
        }

        // אישור קבלת עדכונים
        if (!agree.checked) {
            feedback.textContent = "נא לאשר קבלת עדכונים";
            feedback.style.display = "block";
            feedback.style.color = "red";
            valid = false;
        }
        
        if (!valid) {
            feedback.textContent = "נא למלא את כל השדות החובה";
            feedback.style.display = "block";
            feedback.style.color = "red";
        } else {
            const userProfile = {
                fname: fname.value.trim(),
                lname: lname.value.trim(),
                phone: phone.value.trim(),
                email: email.value.trim(),
                password: password.value, // לא מאובטח, רק לצורך הדגמה
                agree: agree.checked
            };
            localStorage.setItem("userProfile", JSON.stringify(userProfile));
            
            feedback.textContent = "הטופס נשלח בהצלחה!";
            feedback.style.display = "block";
            feedback.style.color = "green";
            form.submit();
        }
    });
});