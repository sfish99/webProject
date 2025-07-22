/*עדן שקרוב */

const owner = localStorage.getItem("closetOwner") || "לא ידוע";
document.getElementById("closetTitle").innerText = `הארון של ${owner}`;

‎// דירוג פיקטיבי + הדגשה עם class
const rating = Math.floor(Math.random() * 100 + 1);
const ratingArea = document.getElementById("ratingArea");
ratingArea.innerHTML = `# ${rating} דירוגים`;
if (rating > 50) {
  ratingArea.classList.add("high-rating");
}

const closetItems = [
  { name: "שמלה שחורה", img: "images/black_mini_dress.jpeg", price: "140" },
  
  { name: "חליפה פסים", img: "images/striped_suit.jpeg", price: "90" }
  { name: "גחליפה פסים", img: "images/striped_suit.jpeg", price: "90" }
  
  { name: "גחליפה פסים", img: "images/striped_suit.jpeg", price: "90" }
];

const container = document.getElementById("closetItems");

closetItems.forEach((item) => {
  const div = document.createElement("div");
  div.className = "item product";
  div.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h4>${item.name}</h4>
    <p>${item.price} ₪</p>
    <button class="btn viewBtn">לצפייה בפריט</button>
  `;
  container.appendChild(div);
});


$(document).ready(function() {
  $(".viewBtn").click(function() {
    alert("פריטים נוספים בקרוב...");
    $(this).addClass("btn-clicked");
  });
});

