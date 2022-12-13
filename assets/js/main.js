(function () {
  //===== Prealoder

  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
  }

  /*=====================================
    Sticky
    ======================================= */
  window.onscroll = function () {
    const header_navbar = document.querySelector(".navbar-area");
    const sticky = header_navbar.offsetTop;
    const logo = document.querySelector(".navbar-brand img");

    // show or hide the back-top-top button
    const backToTo = document.querySelector(".scroll-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = "flex";
    } else {
      backToTo.style.display = "none";
    }
  };

  // for menu scroll
  const pageLink = document.querySelectorAll(".page-scroll");

  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(elem.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        offsetTop: 1 - 60,
      });
    });
  });

  // section menu active
  function onScroll(event) {
    const sections = document.querySelectorAll(".page-scroll");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i];
      const val = currLink.getAttribute("href");
      const refElement = document.querySelector(val);
      const scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector(".page-scroll").classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }

  window.document.addEventListener("scroll", onScroll);

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".page-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
  });

  // WOW active
  new WOW().init();

  /* On DOM load... */
  document.addEventListener("DOMContentLoaded", function() {

  /* Set the height of all elements with partial id servicesCardCol to the max height of all elements of partial ids servicesCardBack and servicesCardFront (including padding & border). */
    var servicesCols = document.querySelectorAll('[id^="servicesCardCol"]');

    /* Set px spacing between cards */
    var offset = 20

    /* Dynamically update the size of elements with partial id servicesCardCol on click of the respective element with partial serviceExampleButton */
    for (let i = 0; i < servicesCols.length; i++) {

      /* Index card column, back, button, and example */
      let idx = i + 1;
      let servicesCol = document.getElementById('servicesCardCol' + idx)
      let cardBack = document.getElementById('servicesCardBack' + idx)
      let collapsedHeight = cardBack.offsetHeight
      let button = document.getElementById('servicesExampleButton' + idx);
      let example = document.getElementById('servicesExample' + idx);
      let timesShown = 0
      let uncollapsedHeight = 0

      /* Define func to adjust height */
      function adjustHeight(height_dif) {
        /* Update col height with new height of card back, but smoothly */
        height_dif += offset
        sign = Math.sign(height_dif)
        delay = .7
        for (let j=0; j < Math.ceil(Math.abs(height_dif)); j++){
           /* Add a delay */
           setTimeout(function() {
           servicesCol.style.height = servicesCol.offsetHeight + sign + 'px';
           }, delay * j);
        }
      }

      /* Create collapsible instance */
      let bsCollapse = new bootstrap.Collapse(example)

      example.addEventListener('shown.bs.collapse', function() {
        /* if first time shown, calculate height */
        if (timesShown == 0) {
            uncollapsedHeight = cardBack.offsetHeight;
            timesShown += 1
            bsCollapse.toggle()
        }
       });

      example.addEventListener('hide.bs.collapse', function() {
        button.innerHTML = "See an example";
        adjustHeight(collapsedHeight - servicesCol.offsetHeight)
      });

      /* Expand and collapse collapsible to calculate height */
      bsCollapse.toggle()

      /* On click... */
      example.addEventListener('show.bs.collapse', function() {
        button.innerHTML = "Hide example";
        adjustHeight(uncollapsedHeight - servicesCol.offsetHeight)
       });

      /* After mouse leaves column... */
      servicesCol.addEventListener('mouseleave', function() {
        if (button.innerHTML == "Hide example") {
            bsCollapse.toggle()
            }
        });

    }

  });

})();