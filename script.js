function verificar() {
    var email = document.getElementsByName('iEmail')[0]
    var password = document.getElementsByName('iPassword')[0]
    var check = document.getElementsByName('terms')[0]
    if (email.value.length == 0) {
        email.placeholder = ('Insira um email') 
        email.classList.add('placeholder-error')
    } else if(password.value.length == 0){
        password.placeholder = ('Insira uma senha')
        password.classList.add('placeholder-error')
    }else if(check.checked) {
     window.alert('Tudo certo!'); 
}else{
    var verifyC = document.querySelector('#verify-check')
    verifyC.innerHTML = 'Você deve aceitar os termos para continuar!'
 }
}
