let currentPage = 17;
let pagesPerGroup = 10;
let isMinimized = false;

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const pageNumbersContainer = document.getElementById("page-numbers-container");
const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownContent = document.getElementById("dropdown-content");

prevBtn.addEventListener("click", () => changePage(currentPage - 1));
nextBtn.addEventListener("click", () => changePage(currentPage + 1));
dropdownBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});

window.addEventListener("click", function (e) {
  if (!e.target.matches(".dropdown-btn")) {
    dropdownContent.classList.remove("show");
  }
});

const dropdownOptions = document.querySelectorAll(".dropdown-content a");
dropdownOptions.forEach((option) => {
  option.addEventListener("click", function (e) {
    e.preventDefault();
    const selected = parseInt(this.getAttribute("data-value"));
    if (selected !== pagesPerGroup) {
      pagesPerGroup = selected;
      updateGroup();
    }
    dropdownBtn.textContent = this.textContent;
    dropdownContent.classList.remove("show");
  });
});

function updateGroup() {
  const groupStart = Math.floor((currentPage - 1) / pagesPerGroup) * pagesPerGroup + 1;
  renderPageNumbers(groupStart);
}

function changePage(page) {
  currentPage = page;
  updateGroup();
}

function renderPageNumbers(start) {
  pageNumbersContainer.innerHTML = "";
  let end = start + pagesPerGroup - 1;
  for (let i = start; i <= end; i++) {
    if (isMinimized && pagesPerGroup > 7) {
      if (i <= start + 2 || i > end - 3 || i === currentPage) {
        createPageButton(i);
      } else if (i === start + 3 && currentPage > start + 3) {
        const dots = document.createElement("span");
        dots.textContent = "...";
        pageNumbersContainer.appendChild(dots);
      } else if (i === end - 3 && currentPage < end - 3) {
        const dots = document.createElement("span");
        dots.textContent = "...";
        pageNumbersContainer.appendChild(dots);
      }
    } else {
      createPageButton(i);
    }
  }
}

function createPageButton(num) {
  const btn = document.createElement("button");
  btn.textContent = num;
  btn.classList.add("page-number");
  if (num === currentPage) btn.classList.add("active");
  btn.addEventListener("click", () => changePage(num));
  pageNumbersContainer.appendChild(btn);
}

function checkViewportWidth() {
  isMinimized = window.innerWidth < 768;
  updateGroup();
}

checkViewportWidth();
window.addEventListener("resize", checkViewportWidth);
updateGroup();
