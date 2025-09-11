const avanca = document.querySelectorA11('.btn-proximo');
const reiniciarBtn = document.getElementById('.btn-reiniciar');

avanca.forEach(button => {
button.addEventListener('click',function(){
    const atual = ducument.querySelector('.ativo');
    const proximoPasso='passo-'+this.getAttribute('data-procimo');
    atual.classList.remove('ativo');
    const proximoElemento=document.getElementById(proximoPasso);










if(proximoElemento){
    proximoElemento.classList.add('ativo');
} else{
    console.error(`Elemento com id "${proximoPasso}" não en

    )
}






})
}


)