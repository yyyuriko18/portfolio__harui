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
$(function(){
        $(".hamburger").click(function(){
            $(".hamburger").toggleClass("open");
            $(".header_nav-sp").fadeToggle();
        });
});

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
