// Listado de usuarios posibles
const usuarios = [
    { username: 'pgalaz', password: 'pgalaz' },
    { username: 'pablo.galaz', password: 'pablo.galaz' },
    { username: 'useusuario3', password: '123' }
];

// Referencias a los elementos del DOM
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');
const clearBtn = document.getElementById('clear-btn');
const loginMessage = document.getElementById('login-message');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');

// Función validar el formulario
function validarFormulario() {
    let isValid = true;
    if (usernameInput.value === '') {
        usernameInput.style.borderColor = 'red';
        usernameError.textContent = 'El campo de usuario no puede estar vacío';
        isValid = false;
    } else {
        usernameInput.style.borderColor = '';
        usernameError.textContent = '';
    }

    if (passwordInput.value === '') {
        passwordInput.style.borderColor = 'red';
        passwordError.textContent = 'El campo de contraseña no puede estar vacío';
        isValid = false;
    } else {
        passwordInput.style.borderColor = '';
        passwordError.textContent = '';
    }
    return isValid;
}

// Función evento de enviar
function handleEnviar() {
    if (validarFormulario()) {
        const username = usernameInput.value;
        const password = passwordInput.value;
        const usuario = usuarios.find(user => user.username === username && user.password === password);

        if (usuario) {
            loginMessage.textContent = `Sesión iniciada para ${usuario.username}`;
        } else {
            loginMessage.textContent = 'Credenciales incorrectas';
        }
    }
}

// Función evento de limpiar
function handleLimpiar() {
    usernameInput.value = '';
    passwordInput.value = '';
    usernameInput.style.borderColor = '';
    passwordInput.style.borderColor = '';
    usernameError.textContent = '';
    passwordError.textContent = '';
    loginMessage.textContent = '';
}

// Listeners de eventos a los botones
submitBtn.addEventListener('click', handleEnviar);
clearBtn.addEventListener('click', handleLimpiar);
