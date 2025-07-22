const term = localStorage.getItem("searchTerm") || "שמלה";
document.getElementById("searchTerm").innerText = term;

const results = [
  {
    name: "שמלה אדומה",
    price: "₪120",
    img: "../images/dress1.jpg",
    owner: "הילה"
  },
  {
    name: "שמלה שחורה",
    price: "₪140",
    img: "images/dress2.jpg",
    owner: "שירה"
  }
];

const container = document.getElementById("resultsContainer");

results.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "item product";
  div.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h4>${item.name}</h4>
    <p>${item.price}</p>
    <button class="btn" onclick="viewProduct(${index})">לצפייה בפריט</button>
  `;
  container.appendChild(div);
});

function viewProduct(i) {
  localStorage.setItem("product", JSON.stringify(results[i]));
  window.location.href = "product.html";
}
    