function campoBlur(campo){
    if (!campo) return; 
    var valor = document.getElementById(campo).value;
    if (valor!==""){
        document.getElementById(`${campo}Label`).className = "filled"
    } else {
        document.getElementById(`${campo}Label`).className = "label"
    }
}

function singUp() {
    window.location = ("./singup")
}

function errorLogIn() {
    window.alert("No se ha encontrado ninguna cuenta con este nombre de usuario")
}