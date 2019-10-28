var konami = new Konami();

konami.init(function () {
  var image = document.querySelector(".image");

  image.style.transition = "transform 1.5s ease-out";
  image.style.transform = "translateX(2000px)";
});