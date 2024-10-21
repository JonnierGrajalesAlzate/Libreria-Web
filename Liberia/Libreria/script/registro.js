let correo , username , contraseña , c_contraseña

let formulario = document.getElementById('form_sign-up')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    leerDatos()
})

function leerDatos(){

    correo =document.getElementById('email_sign-up').value
    username =document.getElementById('user_sign-up').value
    contraseña =document.getElementById('password_sign-up').value
    c_contraseña =document.getElementById('confirm_password_sign-up').value

    validarDatos( correo,username,contraseña,c_contraseña)
    guardarlocalStorage(correo,username,contraseña,c_contraseña)
}


function validarDatos(correo,username,contraseña,c_contraseña){

    if (correo.length==0 || username.length==0 ||contraseña.length==0 || c_contraseña.length==0  ){
        swal("Error", "Espacios en blanco", "error");

    }else{
        swal("!Hecho¡", "Se guardo la información", "success")
    }
}

function guardarlocalStorage(correo,username,contraseña,c_contraseña){

    localStorage.setItem('Correo',correo)
    localStorage.setItem('Username',username)
    localStorage.setItem('Contraseña',contraseña)
    localStorage.setItem('Confirmación de contraseña', c_contraseña)
}

