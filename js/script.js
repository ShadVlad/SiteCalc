let total = 5000,
  time = 1,
  hourRate,
  tabLand = document.querySelector(".tab-landing"),
  tabPage = document.querySelector(".tab-polypage"),
  blocksBlock = document.getElementById("blocks-block"),
  pagesBlock = document.getElementById("pages-block"),
  counterBlock = document.getElementById("counter-block"),
  counterPages = document.getElementById("counter-pages"),
  counterHours = document.getElementById("counter-hours"),
  counterRate = document.getElementById("counter-rate"),
  changesCheck = document.getElementById("changes-check"),
  cmsCheck = document.getElementById("changes-cms"),
  totalValue = document.getElementsByClassName("total-count")[0],
  input = document.getElementsByTagName("input");

const land = 5000,
  corp = 12000,
  cms = 4000,
  changes = 1000,
  blocks = 500,
  pages = 2500;

window.addEventListener("DOMContentLoaded", function () {
  tabLand.addEventListener("click", () => {
    for (let i = 0; i < input.length; i++) {
      input[i].value = "";
    }

    blocksBlock.style.display = "flex";
    pagesBlock.style.display = "none";

    tabLand.classList.add("active");
    tabPage.classList.remove("active");

    if (changesCheck.checked) {
      changesCheck.checked = false;
    }

    if (cmsCheck.checked) {
      cmsCheck.checked = false;
    }

    total = land;
    totalValue.value = total;
  });

  tabPage.addEventListener("click", () => {
    for (let i = 0; i < input.length; i++) {
      input[i].value = "";
    }

    blocksBlock.style.display = "none";
    pagesBlock.style.display = "flex";

    tabPage.classList.add("active");
    tabLand.classList.remove("active");

    if (changesCheck.checked) {
      changesCheck.checked = false;
    }

    if (cmsCheck.checked) {
      cmsCheck.checked = false;
    }

    total = corp;
    totalValue.value = total;
  });

  counterBlock.addEventListener("change", () => {
    counterHours.value = "";
    counterRate.value = "";
    total = counterBlock.value * blocks;
    totalValue.value = total;
  });

  counterPages.addEventListener("change", () => {
    counterHours.value = "";
    counterRate.value = "";
    total = counterPages.value * pages;
    totalValue.value = total;
  });

  counterHours.addEventListener("change", () => {
    counterBlock.value = "";
    counterPages.value = "";
    total = 0;
    time = counterHours.value;
    hourRate = counterRate.value * time;
    totalValue.value = hourRate;
    total = hourRate;
  });

  counterRate.addEventListener("change", () => {
    counterBlock.value = "";
    counterPages.value = "";
    total = 0;
    hourRate = counterRate.value * time;
    totalValue.value = hourRate;
    total = hourRate;
  });

  changesCheck.addEventListener("change", () => {
    if (changesCheck.checked) {
      total += changes;
      totalValue.value = total;
    } else {
      total -= changes;
      totalValue.value = total;
    }
  });

  cmsCheck.addEventListener("change", () => {
    if (cmsCheck.checked) {
      total += changes;
      totalValue.value = total;
    } else {
      total -= changes;
      totalValue.value = total;
    }
  });
});
