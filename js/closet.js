/*עדן שקרוב */

const owner = localStorage.getItem("closetOwner") || "לא צויין";
document.getElementById("closetTitle").innerText = `הארון של ${owner}`;


const rating = Math.floor(Math.random() * 100 + 1);
const ratingArea = document.getElementById("ratingArea");
ratingArea.innerHTML = `# ${rating} ׳דירוג;
if (rating > 50) {
  ratingArea.classList.add("high-rating");
}

const numOfItems = document.querySelectorAll(".product").length;
const itemsCountBox = document.createElement("div");
itemsCountBox.id = "itemsCount";
itemsCountBox.innerText = `פריטים זמינים להשכרה ${numOfItems} ׳קיימים 
document.querySelector("main").prepend(itemsCountBox);


const closetItems = [
  { name: "שמלה שחורה", img: "images/black_mini_dress.jpeg", price: "140" },
  { name: "חליפה פסים", img: "images/striped_suit.jpeg", price: "100" }
  { name: " מכנס מנומר", img: "images/img4-sale-pants.jpeg", price: "99" }
  { name: " חולצת צווארון", img: "images/img8-sale-shirt.jpeg", price: "70" }
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

