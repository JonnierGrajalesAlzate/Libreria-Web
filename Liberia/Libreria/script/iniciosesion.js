let email, contraseña


let formulario = document.getElementById('form_sign-in')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    leerDatos()
})

function leerDatos(){

    correo =document.getElementById('Email_sign-in').value
    contraseña =document.getElementById('password_sign-in').value
    validarDatos( correo,contraseña)
    listarDatos(correo,contraseña)
}


function validarDatos(correo,contraseña){

    if (correo.length==0 || contraseña.length==0 ){
        swal("Error", "Espacios en blanco", "error");
    }
}


function listarDatos(correo,contraseña){
    let correousu = localStorage.getItem('Correo')
    let contrasenausu = localStorage.getItem('Contraseña')

    if(correousu==correo && contrasenausu==contraseña){
        swal("!Hecho¡", "Se guardo la información", "success")
        window.location.href='perfil.html'
    }

}