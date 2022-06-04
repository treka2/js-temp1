const landing = document.querySelector(".landing");
let backgroundImgs = [
  "./imgs/m01.jpg",
  "./imgs/m02.jpg",
  "./imgs/m04.jpg",
  "./imgs/m05.jpg",
  "./imgs/m07.jpg",
  "./imgs/m09.jpg",
];

//show settting
const sitting = document.querySelector(".setting");
const sittingIcon = document.querySelector(".icon");

sittingIcon.onclick = () => {
  sitting.classList.toggle("show");
  if (sitting.classList.contains("show")) {
    sittingIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    sittingIcon.innerHTML = '<i class="fa-solid fa-gear"></i>';
  }
};
//hover icon

//put active class tolinks
let links = [...document.querySelectorAll(".links li a")];
links.forEach((e) => {
  e.addEventListener("click", () => {
    links.forEach((e) => {
      e.classList.remove("active");
      scrollY = e.offsettOP;
    });
    e.classList.add("active");
  });
});
//about us imgs
let aboutImgs = [
  "./imgs/a01.svg",
  "./imgs/a02.svg",
  "./imgs/a03.svg",
  "./imgs/a04.svg",
  "./imgs/a05.svg",
  "./imgs/a06.svg",
];
let aboutImg = document.querySelector(".about-us .about-img img");
aboutImg.src = aboutImgs[0];

// color setting
let root = document.documentElement;
let clrChoise = [...document.querySelectorAll(".color-set li")];
clrChoise.forEach((e) => {
  e.onclick = () => {
    clrChoise.forEach((el) => {
      el.classList.remove("chosen-clr");
    });
    e.classList.add("chosen-clr");
    root.style.setProperty("--main-color", e.dataset.clr);
    localStorage.mainClr = e.dataset.clr;
    aboutImg.src = aboutImgs[clrChoise.indexOf(e)];
  };
});
let mainClr = localStorage.mainClr;
if (mainClr != null) {
  root.style.setProperty("--main-color", localStorage.mainClr);
  clrChoise.forEach((el) => {
    el.classList.remove("chosen-clr");
    if (el.dataset.clr === mainClr) {
      el.classList.add("chosen-clr");
      aboutImg.src = aboutImgs[clrChoise.indexOf(el)];
    }
  });
}
//background seitting
let chekSwitch = document.querySelector(".setting-box .switch input");
chekSwitch.checked = true;
if (chekSwitch.checked == true) {
  autoChangeBackg();
}
chekSwitch.onclick = () => {
  autoChangeBackg();
};
function autoChangeBackg() {
  if (chekSwitch.checked == true) {
    changebackground = setInterval(function () {
      landing.style.backgroundImage = `url('${
        backgroundImgs[Math.floor(Math.random() * backgroundImgs.length)]
      }')`;
    }, 5000);
    document.querySelector(".background span:first-of-type").style.color =
      "#000";
  } else {
    clearInterval(changebackground);
    document.querySelector(".background span:first-of-type").style.color =
      "#777";
  }
}
let settingImgs = document.querySelectorAll(".setting .imgs-holder img");
settingImgs.forEach(
  (e) =>
    (e.onclick = () => {
      chekSwitch.checked = false;
      clearInterval(changebackground);
      landing.style.backgroundImage = `url('${e.src}')`;
      localStorage.chosenImg = `url('${e.src}')`;
    })
);
if (localStorage.chosenImg) {
  landing.style.backgroundImage = localStorage.chosenImg;
}
//skill prog
let goUpBtn = document.querySelector(".go-up");
let skillSection = document.querySelector("#skills");
let skillSpan = document.querySelectorAll(".skills .skills-holder .skill span");
window.onscroll = function () {
  if (
    window.pageYOffset >
    skillSection.offsetTop + skillSection.offsetHeight - window.innerHeight
  ) {
    skillSpan.forEach((e) => {
      e.style.width = e.dataset.prog;
      e.textContent = e.dataset.prog;
    });
  } else {
    skillSpan.forEach((e) => {
      e.style.width = "0";
    });
  }
  if (window.pageYOffset > 400) {
    goUpBtn.style.display = "block";
  } else {
    goUpBtn.style.display = "none";
  }

  if (window.pageYOffset < 10) {
    links.forEach((e) => {
      e.classList.remove("active");
    });
    links[0].classList.add("active");
  }
};
// go up btn

goUpBtn.onclick = () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
//burger
let burger = document.querySelector("nav .burger");
let liLinks = document.querySelector("nav .links");
burger.addEventListener("click", () => {
  liLinks.classList.toggle("show");
  if (liLinks.classList.contains("show")) {
    burger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
//gallery
let galleryImgs = document.querySelectorAll(".gallery img");
galleryImgs.forEach((e) => {
  e.onclick = () => {
    let overlay = document.createElement("div");
    overlay.classList.add("overlay-img");
    document.body.appendChild(overlay);
    //create popup
    let popup = document.createElement("div");
    popup.className = "popup-box";
    if (e.alt != null) {
      let popHed = document.createElement("h3");
      popHed.textContent = e.alt;
      popup.appendChild(popHed);
    }
    let popImg = document.createElement("img");

    popImg.src = e.src;
    popup.appendChild(popImg);
    document.body.appendChild(popup);
    //remove
    overlay.onclick = () => {
      popup.remove();
      overlay.remove();
    };
  };
});
//testi img
let testiImg = document.querySelectorAll(".testimonial .client-box img");
testiImg.forEach((e) => {
  e.onclick = () => {
    let overlay = document.createElement("div");
    overlay.classList.add("overlay-img");
    document.body.appendChild(overlay);
    //create popup
    let popup = document.createElement("div");
    popup.className = "popup-box";
    if (e.alt != null) {
      let popHed = document.createElement("h3");
      popHed.textContent = e.alt;
      popup.appendChild(popHed);
    }
    let popImg = document.createElement("img");

    popImg.src = e.src;
    popup.appendChild(popImg);
    document.body.appendChild(popup);
    //remove
    overlay.onclick = () => {
      popup.remove();
      overlay.remove();
    };
  };
});
//go right
let testiSlide = document.querySelectorAll(".testimonial .testi-slide");
let goRt = document.querySelector(".testimonial  span.go-right");
let goLft = document.querySelector(".testimonial  span.go-left");
let pollets = document.querySelectorAll(".testimonial .pollets i");

let slideCount = 1;
goLft.onclick = () => {
  testiSlide.forEach((e) => {
    if (slideCount >= testiSlide.length) {
      slideCount = 0;
      testiSlide[0].style.transition = "0s";
    }
    pollets.forEach((e) => {
      e.classList.remove("active");
    });
    pollets[slideCount].classList.add("active");
    let x = slideCount * -105;
    e.style.transform = `translateX(${x}%)`;
  });
  slideCount++;
};

goRt.onclick = () => {
  testiSlide.forEach((e) => {
    if (slideCount >= testiSlide.length) {
      slideCount = 0;
      testiSlide[slideCount].style.transition = "0.1s";
    }
    pollets.forEach((e) => {
      e.classList.remove("active");
    });
    pollets[slideCount].classList.add("active");
    let x = slideCount * -105;
    e.style.transform = `translateX(${x}%)`;
  });
  slideCount++;
};
//reset aal setting
let resetBtn = document.querySelector(".setting .reset-setting button");
resetBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
//close submit prevent
let contactForm = document.querySelector(".contact form");
contactForm.onsubmit = (e) => {
  e.preventDefault();
};
//social icon
let socialIcon = [...document.querySelectorAll("footer .social-icons i")];
socialIcon.forEach((e) => {
  e.onclick = () => {
    e.classList.contains("face")
      ? window.open("https://wa.me/01020149313", "_blank")
      : e.classList.contains("twitter")
      ? window.open("https://twitter.com/trekka__", "_blank")
      : e.classList.contains("insta")
      ? window.open(
          "https://instagram.com/trekka__?igshid=YmMyMTA2M2Y=",
          "_blank"
        )
      : e.classList.contains("githup")
      ? window.open("https://treka2.github.io/css3/", "_blank")
      : console.log("v");
  };
});

// ############
