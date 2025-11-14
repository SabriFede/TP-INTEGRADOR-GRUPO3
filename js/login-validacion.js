const email = document.getElementById("email");
const password = document.getElementById("password");
const buttonLogin = document.getElementById("button-login");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");

buttonLogin.disabled = true;

function validarEmail(valor){
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|org|net)$/;
    return emailRegex.test(valor);
}

function validarContrasenia(valor){
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#!?%$])[A-Za-z\d#!?%$]{8,12}$/;
    return passwordRegex.test(valor);
}

function validarCampos(){
    const emailValido = validarEmail(email.value);
    const passwordValida = validarContrasenia(password.value);

    if(email.value !== "" && !emailValido){
        errorEmail.textContent = "Email inválido (debe tener @ y terminar en .com, .org o .net)";
    } else {
        errorEmail.textContent = "";
    }
    
    if(password.value !== "" && !passwordValida){
        errorPassword.textContent = "La contraseña debe tener entre 8-12 caracteres, con mayúscula, minúscula, número y #?!%$";
    } else {
        errorPassword.textContent = "";
    }

    if(emailValido && passwordValida){
        buttonLogin.disabled = false;
    } else {
        buttonLogin.disabled = true;
    }

}

email.addEventListener("input", validarCampos);
password.addEventListener("input", validarCampos);