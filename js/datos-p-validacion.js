const emailP = document.getElementById("email");
const contra = document.getElementById("password");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const documento = document.getElementById("documento");
const edad = document.getElementById("fecha");
const telefono = document.getElementById("tel");
const emailAlt = document.getElementById("email-alt");

const errorEmailP = document.getElementById("error-email-p");
const errorContra = document.getElementById("error-contra");
const errorNombre = document.getElementById("error-nombre");
const errorApellido = document.getElementById("error-apellido");
const errorDocumento = document.getElementById("error-dni");
const errorEdad = document.getElementById("error-edad");
const errorTelefono = document.getElementById("error-telefono");
const errorEmailAlt = document.getElementById("error-email-alt");

const botonGuardarEmail = document.getElementById("guardar-email");
const botonCambiarContra = document.getElementById("cambiar-contra");
const botonGuardarCambios = document.getElementById("guardar-cambios");

botonGuardarEmail.disabled = true;
botonCambiarContra.disabled = true;
botonGuardarCambios.disabled = true;

function validarEmail(valor){
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|org|net)$/;
    return emailRegex.test(valor);
}

function validarContrasenia(valor){
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#!?%$])[A-Za-z\d#!?%$]{8,12}$/;
    return passwordRegex.test(valor);
}

function validarNombres(valor) {
    const nombreRegex = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]+$/;
    return nombreRegex.test(valor);
}

function validarDocumento(valor) {
    const dniRegex = /^[0-9]+$/; 
    return dniRegex.test(valor);
}

function validarEdad(valor) {
    const hoy = new Date();
    const fecha = new Date(valor);

    let edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();

    // Ajuste si aún no cumplió en el año actual
    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
        edad--;
    }

    return edad>=16;
}

function validarTelefono(valor) {
    const telRegex = /^[0-9+\-()]+$/;
    return telRegex.test(valor);
}




function validarCampoEmail(){
    const emailValido = validarEmail(emailP.value);
    
    if(email.value !== "" && !emailValido){
        errorEmailP.textContent = "Email inválido (debe tener @ y terminar en .com, .org o .net)";
    } else {
        errorEmailP.textContent = "";
    }
    
    if(emailValido){
        botonGuardarEmail.disabled = false;
    } else {
        botonGuardarEmail.disabled = true;
    }

}

function validarCampoContra(){
    const passwordValida = validarContrasenia(contra.value);
    
    if(contra.value !== "" && !passwordValida){
        errorContra.textContent = "La contraseña debe tener entre 8-12 caracteres, con mayúscula, minúscula, número y #?!%$";
    } else {
        errorContra.textContent = "";
    }
    
    if(passwordValida){
        botonCambiarContra.disabled = false;
    } else {
        botonCambiarContra.disabled = true;
    }

}

function validarCampos(){
    const nombreValido = validarNombres(nombre.value);
    const apellidoValido = validarNombres(apellido.value);
    const dniValido = validarDocumento(documento.value);
    const edadValida = validarEdad(edad.value);
    const telValido = validarTelefono(telefono.value);
    const emailAltValido = validarEmail(emailAlt.value);
    
    if(nombre.value !== "" && !nombreValido){
        errorNombre.textContent = "Caracteres inválidos";
    } else {
        errorNombre.textContent = "";
    }
    
    if(apellido.value !== "" && !apellidoValido){
        errorApellido.textContent = "Caracteres inválidos";
    } else {
        errorApellido.textContent = "";
    }

    if(documento.value !== "" && !dniValido){
        errorDocumento.textContent = "Solo se permiten caracteres numéricos";
    } else {
        errorDocumento.textContent = "";
    }

    if(edad.value !== "" && !edadValida){
        errorEdad.textContent = "Debe tener al menos 16 años";
    } else {
        errorEdad.textContent = "";
    }

    if(telefono.value !== "" && !telValido){
        errorTelefono.textContent = "Solo se permiten números, guiones, +, y paréntesis";
    } else {
        errorTelefono.textContent = "";
    }

    if(emailAlt.value !== "" && !emailAltValido){
        errorEmailAlt.textContent = "Email inválido (debe tener @ y terminar en .com, .org o .net)";
    } else {
        errorEmailAlt.textContent = "";
    }


    if(nombreValido && apellidoValido && dniValido && edadValida && telValido && emailAltValido){
        botonGuardarCambios.disabled = false;
    } else {
        botonGuardarCambios.disabled = true;
    }

}

emailP.addEventListener("input", validarCampoEmail);
contra.addEventListener("input", validarCampoContra);
nombre.addEventListener("input", validarCampos);
apellido.addEventListener("input", validarCampos);
documento.addEventListener("input", validarCampos);
edad.addEventListener("input", validarCampos);
telefono.addEventListener("input", validarCampos);
emailAlt.addEventListener("input", validarCampos);