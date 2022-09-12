const email = document.getElementById("email-input");
const btn = document.getElementById("btn");
const error = document.querySelector(".error");

btn.addEventListener("click", () => {
  if (/^\S+@\S+\.\S+$/.test(email.value) == false) {
    error.style.display = "block";
    email.style.border = "2px solid rgba(255, 0, 0, 0.5)";
  } else {
    error.style.display = "none";
    email.style.border = "2px solid rgba(128, 128, 128, 0.2)";
    email.value = "";
  }
});
