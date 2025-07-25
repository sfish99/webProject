$(function () {

  $("#header").load("../Includes/header.html", function () {
    const form = document.getElementById("searchForm");
    const input = document.getElementById("searchInput");

    if (form && input) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const searchTerm = input.value.trim();
        if (searchTerm) {
          localStorage.setItem("searchTerm", searchTerm);
          window.location.href = "../Includes/searchresults.html";
        }
      });
    }
  });

  $("#footer").load("../Includes/footer.html");
});
