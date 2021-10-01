function validarForm(){
    var cep = form.cep.value;
    var nome = form.nome.value;
    var email = form.email.value;

    if(form.cep.value == "" && form.cep.value.length != 9){
        alert('Preencha o campo CEP corretamente!')
        return false;

    }

    
}






