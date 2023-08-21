function calcular(){
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let resultado = Number(peso) / Number(altura) / Number(altura)
    let resultado_formatado = `${resultado.toFixed(2)} kg/m²`
    document.getElementById('resultado').value = resultado_formatado

    if (resultado < 18.5){
        document.getElementById('estado-nutricional').innerHTML = 'O seu estado nutricional deu: Desnutrido (a). Atenção! Vamos cuidar da alimentação?'
        document.getElementById('resultado').style.backgroundColor = 'red'
    } else if (resultado >= 18.5 && resultado < 25) {
        document.getElementById('estado-nutricional').innerHTML = 'O seu estado nutricional deu: Eutrófico (a). Você está num bom caminho! Continue cuidando da sua alimentação.'
        document.getElementById('resultado').style.backgroundColor = 'green'
    }
    else if (resultado >= 25 && resultado < 30) { 
        document.getElementById('estado-nutricional').innerHTML = 'O seu estado nutricional deu: Sobrepeso. Atenção! Posso te ajudar a fazer uma reeducação alimentar.'
        document.getElementById('resultado').style.backgroundColor = 'orange'
    }
    else {
        document.getElementById('estado-nutricional').innerHTML = 'O seu estado nutricional deu: Obesidade. Atenção! Posso te ajudar a fazer uma reeducação alimentar.'
        document.getElementById('resultado').style.backgroundColor = 'red'
    }

  
}

