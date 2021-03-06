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

  $(".testimonial__list").slick({
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  });

  $(".project__list").slick({
    dots: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    responsive: [
      {
        breakpoint: 1059,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Event header when window scroll
const header = document.querySelector(".header");
const headerInputSearch = document.querySelector(".header__search-input");
const headerBottom = document.querySelector(".header-bottom");
window.onscroll = () => {
  let heightScroll = window.scrollY;
  if (heightScroll > 0) {
    header.classList.remove("header--transparent");
    if (heightScroll > 200) {
      headerBottom.classList.remove("close");
      headerInputSearch.classList.remove("close");
    } else {
      headerBottom.classList.add("close");
      headerInputSearch.classList.add("close");
    }
  } else {
    header.classList.add("header--transparent");
  }
};

// Popup Menu
const menuPhoneItems = document.querySelectorAll(".menu-phone__item");
const menuToggle = document.querySelector(".header__toggle-menu");
const menuPhone = document.querySelector(".menu-phone");
const menuOverlay = document.querySelector(".menu-phone .overlay");

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

// popup video
const thumbnailVideoBenefit = document.querySelector(
  ".benefit__thumnail-video"
);
const thumbnailVideoTestimonial = document.querySelectorAll(
  ".testimonial__thumbnail-video"
);
const popupVideo = document.querySelector(".popup-video");
const videoTag = document.querySelector(".popup-video .popup-video__video");
const popupVideoOverlay = document.querySelector(
  ".popup-video .popup-video__overlay"
);

const openPopupVideo = (srcVideo) => {
  popupVideo.style.opacity = "1";
  popupVideo.style.visibility = "visible";
  videoTag.setAttribute("src", srcVideo);
  document.querySelector("body").classList.add("noscroll");
};

thumbnailVideoBenefit.onclick = (e) => {
  let srcVideo = thumbnailVideoBenefit.getAttribute("data-srcVideo");
  openPopupVideo(srcVideo);
};

thumbnailVideoTestimonial.forEach((thumbnail) => {
  thumbnail.onclick = () => {
    let srcVideo = thumbnail.getAttribute("data-srcVideo");
    openPopupVideo(srcVideo);
  };
});

popupVideoOverlay.onclick = () => {
  popupVideo.style.opacity = "0";
  popupVideo.style.visibility = "hidden";
  videoTag.setAttribute("src", "");
  document.querySelector("body").classList.remove("noscroll");
};

// popup Q&A
const menuPhoneItemsQA = document.querySelectorAll(".qanda__item");

menuPhoneItemsQA.forEach((menuPhoneItemQA) => {
  menuPhoneItemQA.onclick = () => {
    let isOpen = menuPhoneItemQA.classList.contains("open");
    let ulTag = menuPhoneItemQA.querySelector("ul");
    if (isOpen) {
      menuPhoneItemQA.classList.remove("open");
      // ulTag.style.height = `${ulTag.offsetHeight}px`;
      setTimeout(() => {
        ulTag.style.height = "0";
      }, 100);
    } else {
      menuPhoneItemQA.classList.add("open");
      setTimeout(() => {
        ulTag.style.height = "fit-content";
      }, 100);
    }
  };
});

// Event of menu footer in mobile
const eventMenuFooterMobile = (option) => {
  const MenuListElements = document.querySelectorAll(".footer__list");
  let clickFunc;
  if (option == "add") {
    MenuListElements.forEach((MenuListElement) => {
      const ulElement = MenuListElement.querySelector("ul");
      const h6Element = MenuListElement.querySelector("h6");

      ulElement.classList.add("close");
      const openMenuFunc = () => {
        ulElement.classList.remove("close");
        MenuListElement.classList.add("open");
      };
      const closeMenuFunc = () => {
        ulElement.classList.add("close");
        MenuListElement.classList.remove("open");
      };
      clickFunc = () => {
        if (MenuListElement.classList.contains("open")) {
          closeMenuFunc();
        } else {
          openMenuFunc();
        }
      };

      h6Element.addEventListener("click", clickFunc);
    });
  } else {
    MenuListElements.forEach((MenuListElement) => {
      const ulElement = MenuListElement.querySelector("ul");
      const h6Element = MenuListElement.querySelector("h6");
      h6Element.replaceWith(h6Element.cloneNode(true));
      ulElement.classList.remove("close");
      MenuListElement.classList.remove("open");
    });
  }
};

if (document.querySelector("body").clientWidth < 576) {
  eventMenuFooterMobile("add");
}
window.onresize = () => {
  if (document.querySelector("body").clientWidth < 576) {
    eventMenuFooterMobile("add");
  } else {
    eventMenuFooterMobile("remove");
  }
};
