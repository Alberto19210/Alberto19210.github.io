function validarEmail() {
    // Datos de entrada
    var emailField = document.getElementById('email');

    // Expresiones regulares
    var validEmail = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/;

    // Textos de Validación
    if (validEmail.test(emailField.value)) {
        alert('Email válido. ¡Bienvenido!');
    } else {
        alert('Email inválido. Email incorrecto.');
        return false;
    }

    // Obtener el valor del campo de contraseña
    var password = document.getElementById("password").value;

    // Verificar si la longitud de la contraseña es igual a 8
    if (password.length === 8) {
        alert("Contraseña válida");
    } else {
        alert("La contraseña debe tener exactamente 8 caracteres");
        return false;
    }

    // Ambas validaciones pasaron, devuelve true
    return true;
}
