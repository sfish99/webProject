const product = JSON.parse(localStorage.getItem("product"));

if (product) {
  const container = document.getElementById("productDetails");

  container.innerHTML = `
    <img src="${product.img}" alt="${product.name}" width="200"><br>
    <h2>${product.name}</h2>
    <p><strong>מחיר:</strong> ${product.price}</p>
    <p><strong>בעלת הארון:</strong> ${product.owner}</p>
    <button class="btn" onclick="goToCloset()">לעוד פריטים מהארון של ${product.owner}</button>
  `;
}

function goToCloset() {
  localStorage.setItem("closetOwner", product.owner);
  window.location.href = "closet.html";
}