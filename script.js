document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const submitButton = document.getElementById("cta");
  const errorMessage = document.getElementById("errorMessage");

  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const emailValue = emailInput.value.trim();

    if (!emailValue || !isValidEmail(emailValue)) {
      emailInput.classList.add(
        "bg-red-50",
        "text-red-400",
        "placeholder-red-400",
        "border-red-400",
      );
      errorMessage.classList.remove("hidden");
      errorMessage.classList.add("block");
    } else {
      emailInput.classList.remove(
        "bg-red-200",
        "text-red-500",
        "placeholder-red-500",
        "border-red-400",
      );
      errorMessage.classList.remove("block");
      errorMessage.classList.add("hidden");
      window.location.href = "success.html";
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
const dismissBtn = document.querySelector("#dismiss");
dismissBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});
