function calcular(){
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let calcular = Number(peso) / Number(altura) / Number(altura)
    let resultado = document.getElementById('resultado').value = `${calcular.toFixed(2)} kg/m²`


    if (resultado <17.99){
        resultado.innerHTML = `O seu IMC de ${resultado} está desnutrido`
    }
    else{
        
    }

  
}

