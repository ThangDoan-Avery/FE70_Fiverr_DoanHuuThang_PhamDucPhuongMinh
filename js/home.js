const menuPhoneItems = document.querySelectorAll(".menu-phone__item");
const menuToggle = document.querySelector(".header__toggle-menu");
const menuPhone = document.querySelector(".menu-phone");
const menuOverlay = document.querySelector(".menu-phone .overlay");

// Slick Carousel
// when click carousel, slide is not autoplay
// This is solution, slide is autoplay when click other window/tab
$("#latest-news-wrapper").on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
    $("#latest-news-wrapper .slick-dots li")
      .removeClass("slick-active")
      .attr("aria-hidden", "true");
    $("#latest-news-wrapper .slick-dots li button").focus(function () {
      this.blur();
    });
  }
);

$(document).ready(function () {
  $(".carousel__background").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
  });

  $(".service__list").slick({
    dots: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: true,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
        },
      },
      {
        breakpoint: 1059,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 799,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Popup Menu
menuPhoneItems.forEach((menuPhoneItem) => {
  menuPhoneItem.onclick = () => {
    let isOpen = menuPhoneItem.classList.contains("open");
    let ulTag = menuPhoneItem.querySelector("ul");
    if (isOpen) {
      menuPhoneItem.classList.remove("open");
      ulTag.style.height = `${ulTag.offsetHeight}px`;
      setTimeout(() => {
        ulTag.style.height = "0";
      }, 100);
    } else {
      menuPhoneItem.classList.add("open");
      ulTag.style.height = "150px";
      setTimeout(() => {
        ulTag.style.height = "fit-content";
      }, 100);
    }
  };
});

menuToggle.onclick = () => {
  menuPhone.style.opacity = "1";
  menuPhone.style.visibility = "visible";
  menuPhone.querySelector(".menu-phone__main").style.transform =
    "translateX(0)";
};

menuOverlay.onclick = () => {
  menuPhone.style.opacity = "0";
  menuPhone.style.visibility = "hidden";
  menuPhone.querySelector(".menu-phone__main").style.transform =
    "translateX(-100%)";
};
