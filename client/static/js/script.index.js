let qryAll = document.querySelector('#qryAll')
let formulario = document.querySelector('#formulario')

qryAll.addEventListener('click', function() {
    formulario.action='/qryAll';
    formulario.method="post"
    formulario.submit()
    // window.location.href = '/qryAll';
})