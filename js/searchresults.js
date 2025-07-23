const term = localStorage.getItem("searchTerm") || "שמלה";
document.getElementById("searchTerm").innerText = term;

const results = [
  {
    name: "שמלה אדומה",
    price: "₪120",
    img: "/images/floar_dress.jpeg",
    owner: "הילה"
  },
  {
    name: "שמלה פרחונית",
    price: "₪140",
    img: "/images/black_mini_dress.jpeg",
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