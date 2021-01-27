function login() {
    if (document.form.user.value == "GNSB" && document.form.pass.value == "GNSB1110") {
        location.href = "logged.html";
    } else {
        alert("USUARIO O CONTRASEÑA INCORRECTOS.")
    }

}