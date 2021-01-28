function login() {
    if (document.form.user.value == "GNSB" && document.form.pass.value == "GNSB1110") {
        location.href = "http://google.cl";
    } else {
        alert("USUARIO O CONTRASEÑA INCORRECTOS.")
    }

}