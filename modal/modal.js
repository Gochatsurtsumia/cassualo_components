window.addEventListener("load", () => {
    const modal = document.getElementById("modal");
    const modalButtons = modal.querySelectorAll("button");
  
    modal.style.display = "flex";
  
    modalButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.style.display = "none";
      });
    });
  });
  