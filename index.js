window.onload = function () {
  var menuButton = document.getElementById("menuButton");
  var menuList = document.querySelector(".nav-links");

  menuButton.addEventListener("click", function () {
    menuList.classList.toggle("nav-links-visible");
  });
};

const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

let activated = false;

window.addEventListener("scroll", () => {
  if (
    pageYOffset > container.offsetTop - container.offsetHeight - 50 &&
    activated === false
  ) {
    counters.forEach((counter) => {
      counter.innerText = 0;
      let count = 0;

      function updateCount() {
        const target = parseInt(counter.dataset.count);

        if (count < target) {
          count++;
          counter.innerText = count;

          setTimeout(updateCount, 450);
        } else {
          counter.innerText = target;
        }
      }
      updateCount();

      activated = true;
    });
  } else if (
    pageYOffset < container.offsetTop - container.offsetHeight - 50 ||
    (pageYOffset === 0 && activated === true)
  ) {
    counters.forEach((counter) => {
      counter.innerText = 0;
    });
    activated = false;
  }
});
