//ejercicio numero 1
const imagen = document.querySelector('#img-ej-1')
imagen.addEventListener('click', function(){
    if (imagen.style.border === '2px solid red'){
        imagen.style.border = 'none';
    }else {
        imagen.style.border = '2px solid red';
    }
})

//ejercicio numero 2 

const inputUno = document.querySelector('.input-1')
const inputDos = document.querySelector('.input-2')
const inputTres = document.querySelector('.input-3')
const parrafo = document.querySelector('.div-parrafo p')
const boton = document.querySelector('.btn')

boton.addEventListener('click', () => {
    const totalStickers =
        Number(inputUno.value) +
        Number(inputDos.value) +
        Number(inputTres.value);

    if (totalStickers <= 10){
        parrafo.innerHTML = "llevas "+ totalStickers +" stickers";
    }else {
        parrafo.innerHTML = "llevas demasiados stickers";
    }
})

//ejercicio numero 3
const codigo1 = document.querySelector('#codigo1');
const codigo2 = document.querySelector('#codigo2');
const codigo3 = document.querySelector('#codigo3');
const btn = document.querySelector('.clave-secreta');
const mensaje = document.querySelector('.mensaje');
const imagen2 = document.querySelector('.imagen2')


btn.addEventListener('click', () =>{
    const password = codigo1.value + codigo2.value + codigo3.value;
if(password === '911'){
    mensaje.innerHTML = "Clave Secreta 1 correcta";
}else if(password === '714'){
    mensaje.innerHTML = "Clave Secreta 2 correcta";
}else{
    mensaje.innerHTML = "Clave Secreta incorrecta";
}
});