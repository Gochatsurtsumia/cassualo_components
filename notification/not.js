window.addEventListener("load", () => {
    const notification = document.getElementById("notification");
    const closeBtn = document.getElementById("close-btn");
  
    setTimeout(() => {
      notification.classList.add("show"); // Show after 500ms to allow page to load
    }, 500);
  
    closeBtn.addEventListener("click", () => {
      notification.classList.remove("show"); // Hide with transition
    });
  });
  