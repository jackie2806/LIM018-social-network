
export default () => {
    /* crear cuenta */
    const createAccount = `
    <img src='./img/Placematch__2_-removebg-preview 2.png' alt="logo"> <br>
    <a href='#/register' class="button">Crear Cuenta</a></button></label> <br>
    <a href='#/login' class="button">Iniciar Sesión</a></button></label>`
    const divElement = document.createElement ('div')
    divElement.innerHTML = createAccount;
    return divElement
}
