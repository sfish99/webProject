const owner = localStorage.getItem("closetOwner") || "לא ידוע";
document.getElementById("closetTitle").innerText = `הארון של ${owner}`;

‎// דירוג פיקטיבי + הדגשה עם class
const rating = Math.floor(Math.random() * 100 + 1);
const ratingArea = document.getElementById("ratingArea");
ratingArea.innerHTML = `# ${rating} דירוגים`;
if (rating > 50) {
  ratingArea.classList.add("high-rating");
}

‎// הצגת פריטים מתוך הארון (נתונים לדוגמה)
const closetItems = [
  { name: "שמלה ירוקה", img: "../images/dress1.jpg", price: "110" },
  { name: "ג׳קט ג׳ינס", img: "../images/dress2.jpg", price: "90" }
];

const container = document.getElementById("closetItems");

closetItems.forEach((item) => {
  const div = document.createElement("div");
  div.className = "item product";
  div.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h4>${item.name}</h4>
    <p>${item.price} ₪</p>
    <button class="btn viewBtn">לצפייה</button>
  `;
  container.appendChild(div);
});

‎// שימוש ב-jQuery לאירוע על כל הכפתורים
$(document).ready(function() {
  $(".viewBtn").click(function() {
    alert("פרטים נוספים בקרוב...");
    $(this).addClass("btn-clicked");
  });
});

