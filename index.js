function login() {
    if (document.form.user.value == "GNSB" && document.form.pass.value == "GNSB1110") {
        window.location("logged.html");
        console.log("LOGGED")
    } else {
        alert("USUARIO O CONTRASEÑA INCORRECTOS.")
    }


}