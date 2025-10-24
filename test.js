let btns = document.querySelectorAll(".btn1");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    window.alert("Added to cart");
  });
});
document.querySelector(".sd4").addEventListener("click", function () {
  if (!document.querySelector("#subscribe-msg")) {
    const msg = document.createElement("p");
    msg.textContent = "تم الاشتراك بنجاح!";
    msg.id = "subscribe-msg";
    msg.style.color = "green";
    msg.style.fontSize = "18px";
    msg.style.marginTop = "10px";
    this.disabled = true;
    this.textContent = "تم الاشتراك ✔️";
    this.style.backgroundColor = "#4CAF50";
    this.style.color = "white";
  }
});

let btn = document.querySelector(".btn2");

btn.addEventListener("click", function () {
  let offers = document.querySelectorAll(".offer");

  offers.forEach(function (offer) {
    offer.style.display = "block";
  });
  this.textContent = "تم عرض جميع العروض ✔️";
  this.disabled = true;
});

btn.style.backgroundColor = "#77b62a";
btn.style.color = "#ffffff";
btn.style.padding = "20px 100px";
btn.style.border = "none";
btn.style.borderRadius = "15px";
btn.style.fontSize = "16px";
btn.style.cursor = "pointer";
btn.style.transition = "background-color 0.3s ease";
