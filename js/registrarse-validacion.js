const email = document.getElementById('email');
const password = document.getElementById('password');
const formulario = document.getElementById('form');
const boton = document.getElementById('boton-registrate');
const error = document.getElementById('error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

boton.disabled = true;

function validarEmail(valorEmail){
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|org|net)$/
    return emailRegex.test(valorEmail);
}

function validarPassword(valorPassword){
    const passwordRegex = /^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[#?!%$]).+$/
    return passwordRegex.test(valorPassword);
}

function validarLargoPassword(valorPassword){
    const passwordRegex = /^.{8,12}$/
    return passwordRegex.test(valorPassword);
}

function verificarCampos(){
    if(email.value.trim() !== '' && password.value.trim() !== ''){
        boton.disabled = false;
    } else{
        boton.disabled = true;
    }
}

email.addEventListener('input', verificarCampos);
password.addEventListener('input', verificarCampos);

formulario.addEventListener('submit', (e) => {
    let esValido = true;

   emailError.textContent = '';
   passwordError.textContent = '';

   if(!validarEmail(email.value)){
    emailError.textContent = 'El email debe terminar un formato válido y terminar en .com, .org o .net';
    esValido = false;
   }

   if(!validarPassword(password.value)){
    passwordError.textContent = 'La contraseña debe contener al menos una mayúscula, una minúscula y un caracter especial';
    esValido = false;
   }

   if(!validarLargoPassword(password.value)){
    passwordError.textContent = 'La contraseña debe tener 8 caracteres como mínimo y 12 caracteres como máximo';
    esValido = false;
   }

   if(!esValido){
    e.preventDefault();
   }
});