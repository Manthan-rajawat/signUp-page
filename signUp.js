const password = document.getElementById("password");
const username = document.getElementById("username");
const email = document.getElementById("email");
const form = document.getElementById("signup_form");

form.addEventListener("submit", () => {
  if (password.value.length < 8) {
    alert("password is too short! atleast 8 character is required");
    event.preventDefault();
  }
});
