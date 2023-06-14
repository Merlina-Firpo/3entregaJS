
const emailType=['@gmail.com','@hotmail.com','@outlook.com','@icloud.com','@yahoo.com.ar'];

const selectEmail= document.querySelector('Seleccionar tipo email') 
emailType.forEach (selectEmail => {
    let option=document.createElement ('Opcion')
    option.value= email
    option.innerText= email
    select.appendchild(option)
})
console.log(selectEmail)
document.getElementsByClassName('email')


function validateUser(){
    let emailField = document.getElementById('user-email');
    emailField?'Email correcto':'Email incorrecto, seleccione nuevamente';
	}

function ingreso(){
    btnSearch.addEventListener('Ingreso creado', ()=> {validateUser.innerHTML= '<h3>Usuario creado correctamente</h3>'})
    }

console.log(ingreso)

const inputUser=document.querySelector('#user');
    inputPass=document.querySelector('#pass');
    check=document.querySelector('#check');
    formulario=document.querySelector('#form');
    message=document.querySelector('#message');


function guardar(datos){
    const user={usuario:inputUser.value, contrasena:inputPass.value};
    if(datos === "session Storage"){
        sessionStorage.setItem("user", JSON.stringify(user))
    }
    if (datos==="local Storage"){
        localStorage.setItem("user",JSON.stringify(user))
    }
    return user;
}

function recuperarDatos(datos){
    if(datos){
        inputUser.value= datos.usuario;
        inputPass.value= datos.pass;
    }
}
recuperarDatos(JSON.parse (localStorage.getItem("user")))

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    (check.checked)? guardar("local storage") : guardar("session storage");
});

