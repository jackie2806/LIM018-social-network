
export default () => {
    /* crear cuenta */
    const createAccount = `
    <img src='./img/Placematch__2_-removebg-preview 2.png' alt="logo"> <br>
    <div class='contentLoging'>
        <input id='name' placeholder='Nombre' /> <br>
        <input id='email-loging' placeholder="ejemplo@example.com"/> <br>
        <input id='password-loging' placeholder='Password'/> <br>
        <input id='iniciar-sesion' type="submit"/> <br>
        <input id='iniciar-sesion' type="submit"/>
    </div>`
    const divElement = document.createElement ('div')
    divElement.innerHTML = createAccount;
    return divElement
}
