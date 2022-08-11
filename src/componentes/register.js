
export default () => {
    /* crear cuenta */
    const createAccount = `
    <img src='./img/Placematch__2_-removebg-preview 2.png' alt="logo"> <br>
    <div clas = 'contentRegister'>    
        <input id='name' placeholder='Nombre' /> <br>
        <input id='email' placeholder="Email"/> <br>
        <input id='phone' placeholder='Phone'/> <br>
        <input id='password' placeholder='Password'/> <br>
        <input id='confirmPassword' placeholder='Confirm Password'/> <br>
        <input id='confirmar' type="submit"/>
    </div>`
    const divElement = document.createElement ('div')
    divElement.innerHTML = createAccount;
    return divElement
}
