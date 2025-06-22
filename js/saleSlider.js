$(document).ready(function(){
  // הפעלת הסליידר
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 2,
    dots: true,
    infinite: true
  });

  // עצירה והפעלה בהובר
  $('.slider').on('mouseenter', function () {
    $(this).slick('slickPause');
  });

  $('.slider').on('mouseleave', function () {
    $(this).slick('slickPlay');
  });
//שינוי הצבע, הטקסט והאייקון של הכפתור בלחיצה
  const btn = document.getElementById("signUpBtn");
  const icon = document.getElementById("signUpIcon");
  const message = document.getElementById("thankYouMessage");

    btn.onclick = function(e) {
    btn.style.backgroundColor = "#80a3af";
    btn.style.color = "#f5f6fc";
    icon.src = "/images/icons8-done-24.png";
    btn.textContent = "ההרשמה בוצעה בהצלחה";
    btn.prepend(icon);

      message.innerText = " נוספת לרשימת התפוצה שלנו";
      message.style.color = "black";
      message.style.display = "block";

  };
});
