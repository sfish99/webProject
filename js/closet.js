document.addEventListener("DOMContentLoaded", function () {
  const closet = JSON.parse(localStorage.getItem("closetOwner"));

  document.getElementById("closetTitle").innerHTML = "הארון של " + closet.owner;

  const container = document.getElementById("itemsContainer");
  closet.items.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item;
    p.className = "itemBox";
    container.appendChild(p);
  });

  const ratingElement = document.getElementById("rating");
  ratingElement.innerHTML = "דירוג הארון: " + "⭐".repeat(closet.rating);
  if (closet.rating >= 4) {
    ratingElement.classList.add("highlight");
  }
});


$(document).ready(function () {
  $("#greetBtn").click(function () {
    const name = $("#username").val();
    $("#greeting").text("היי " + name + "ברוכה הבאה לארון").removeClass("hidden");
  });
});