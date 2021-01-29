function login() {
    if (document.form.user.value == "GNSB" && document.form.pass.value == "GNSB1110") {
        //location.href = "logged.html";
        delay();
        console.log("hola, han pasado 5 segundos.")

    } else {
        alert("USUARIO O CONTRASEÑA INCORRECTOS.")
    }

}

function delay() {
    setTimeout(5000);
}