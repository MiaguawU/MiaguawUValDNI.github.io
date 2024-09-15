function validar(form){

    var letras= ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

    let digitos=form.digitos.value.trim()
    let letra=form.letra.value.trim()
    
    if(isNaN(digitos)){
        alert("Ingrese solo números")
        return false
    }
    if(digitos<0||digitos>99999999){
        alert("Número proporcionado no es válido")
        return false
    }

    if(letra===""||digitos===""){
        alert("Por favor ingrese los datos solicitados")
        return false
    }
    if(letra.length>1){
        alert("Letra no válida")
        return false
    }

    let resto= digitos%23
    let le=letras[resto]

    if(le.toLowerCase() === letra.toLowerCase()){
        alert("DNI correcto")
        return true
    }
    else{
        alert("DNI incorrecto")
        return false
    }

    
}
