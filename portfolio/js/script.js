// コンタクト
// const form = document.querySelector(".contact-page-inner");

// form.addEventListener("submit", function(e){
//     e.preventDefault();

const form = document.querySelector("form");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();

        const formData = new FormData();

    formData.append(
        "entry.2005620554",
        document.querySelector("#user-name").value
    );

    formData.append(
        "entry.494408386",
        document.querySelector("#user-kana").value
    );

    formData.append(
        "entry.1045781291",
        document.querySelector("#user-mail").value
    );

    formData.append(
        "entry.839337160",
        document.querySelector("#message").value
    );
    console.log(formData);
    

    fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSckLEBo74pk5czulVfdnB5BT-Nxqwgm6BjKyvC7yVHX-QQpQw/formResponse",
        {
            method: "POST",
            mode: "no-cors",
            body: formData
        }
    );

    document.body.classList.add("fade-out");

setTimeout(() => {
    location.href="./thanks.html";
}, 500);document.body.classList.add("fade-out");

setTimeout(() => {
    location.href="./thanks.html";
}, 500);
    });
}

// ハンバーガー

$(function () {
  const $hamburger = $(".hamburger");
  const $navSp = $(".header_nav-sp");

  function closeMenu() {
    $hamburger.removeClass("open");
    $navSp.stop(true, true).fadeOut();
  }

  $hamburger.on("click", function () {
    $hamburger.toggleClass("open");
    $navSp.stop(true, true).fadeToggle();
  });

  // メニュー内（リンクや余白）を押したら閉じる
  $navSp.on("click", function () {
    closeMenu();
  });
  

  // メニュー・ハンバーガー以外（body側）を押したら閉じる
  $(document).on("click", function (e) {
    if (!$hamburger.hasClass("open")) return;
    if ($(e.target).closest(".header_nav-sp, .hamburger").length) return;
    closeMenu();
  });
});

const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('.menu-overlay');


// モーダル
const opens = document.querySelectorAll(".open-button");
const dialogs = document.querySelectorAll(".dialog");
const closes = document.querySelectorAll(".close-button");

opens.forEach((open, index) => {
  open.addEventListener("click", () => {
    dialogs[index].showModal();
  });

  closes[index].addEventListener("click", () => {
    dialogs[index].close();
  });
});



$(function () {
  $(window).on("scroll", function () {
    $(".fadeIn_up").each(function () {
      const target = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll > target - windowHeight + 200) {
        $(this).addClass("is-show");
      }
    });
  });

  // ページを開いた時にも判定
  $(window).trigger("scroll");
});
