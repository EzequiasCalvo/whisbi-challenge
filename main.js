addEventListener("DOMContentLoaded", () => {
  const images = [
    {
      big: "./assets/landscape4@3x.jpg",
      medium: "./assets/landscape4@2x.jpg",
      small: "./assets/landscape4@1x.jpg",
    },
    {
      big: "./assets/landscape3@3x.jpg",
      medium: "./assets/landscape3@2x.jpg",
      small: "./assets/landscape3@1x.jpg",
    },
    {
      big: "./assets/landscape2@3x.jpg",
      medium: "./assets/landscape2@2x.jpg",
      small: "./assets/landscape2@1x.jpg",
    },
    {
      big: "./assets/landscape1@3x.jpg",
      medium: "./assets/landscape1@2x.jpg",
      small: "./assets/landscape1@1x.jpg",
    },
  ];

  let currentImg = 1;
  const img1 = document.querySelector("#img1");
  const img2 = document.querySelector("#img2");
  const indicatorsDiv = document.querySelector("#indicators");

  for (let i = 0; i < images.length; i++) {
    const div = document.createElement("div");
    div.classList.add("circles");
    div.id = i;
    indicatorsDiv.appendChild(div);
  }

  img1.src = images[0].small;
  console.log(`${images[0].big}`);
  img1.srcset = `${images[0].small} 700w,
    ${images[0].medium} 1200w, ${images[0].big} 1700w`;
  const circles = document.querySelectorAll(".circles");
  circles[0].classList.add("highlited");

  const autoSlideshow = () => {
    img2.src = images[currentImg].small;
    img1.srcset = `${images[currentImg].small} 700w,
    ${images[currentImg].medium} 1200w, ${images[currentImg].big} 1700w`;
    const currentCircle = Array.from(circles).find((el) => el.id == currentImg);
    Array.from(circles).forEach((cir) => cir.classList.remove("highlited"));
    currentCircle.classList.add("highlited");

    img2.classList.add("active");
    currentImg++;

    if (currentImg == images.length) {
      currentImg = 0;
    }

    setTimeout(() => {
      img1.src = img2.src;
      img2.classList.remove("active");
    }, 1000);
  };

  setInterval(autoSlideshow, 4000);
});
