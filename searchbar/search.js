const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");

searchInput.addEventListener("input", () => {
  clearBtn.style.display = searchInput.value ? "inline" : "none";
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearBtn.style.display = "none";
  searchInput.focus();
});

function handleSearch(event) {
  event.preventDefault(); // stop actual form submission
  const query = searchInput.value.trim();
  if (query) {
    console.log("Searching for:", query);
  }
}
