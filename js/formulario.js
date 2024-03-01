function misDatos(){
    let nombre = document.getElementById("nombre").value
    //querySelector es un metodo que nos devuelve solo un valor
    let edad = document.querySelector("#edad").value
    let tel = document.getElementById("tel").value
    let email = document.getElementById("email").value

    let frase = `Me has dicho que te llamas ${nombre}, tienes ${edad} años. Tu telefono es ${tel} y tu email es ${email}.`

    document.getElementById("frase").innerText = frase

}
