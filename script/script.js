// Seleção dos botões e formulários
const btnLogin = document.getElementById("btn-login");
const btnRegister = document.getElementById("btn-register");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

// Alternar entre Login e Cadastro
btnLogin.addEventListener("click", () => {
  btnLogin.classList.add("active");
  btnRegister.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});

btnRegister.addEventListener("click", () => {
  btnRegister.classList.add("active");
  btnLogin.classList.remove("active");
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
});

// Mostrar / ocultar senha
document.querySelectorAll(".toggle-password").forEach(icon => {
  icon.addEventListener("click", () => {
    const input = icon.previousElementSibling;
    const isHidden = input.type === "password";

    if (isHidden) {
      input.type = "text";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    }
  });
});
