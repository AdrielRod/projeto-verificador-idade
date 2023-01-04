function verificar()
{
    var anoNasc = document.getElementById("inasc")
    var sexoMasc = document.getElementById("imasc")
    var sexoFem = document.getElementById("ifem")
    var imagem = document.getElementById("iImagem")
    var idade = Number(2023) - Number(anoNasc.value)
    var digitou = false

    if(document.getElementById("imasc").checked){
        if(idade > 0 && idade < 13){
            imagem.src = "imagens/criancaMasc.jpg"
            document.getElementById("container").style.height = "78vh"
            document.getElementById("iRes").innerText = `Você tem ${idade} anos de idade`
        }
        if(idade > 12 && idade < 18){
            imagem.src = "imagens/adolMasc.jpg"
            document.getElementById("container").style.height = "75vh"
            document.getElementById("iRes").innerText = `Você tem ${idade} anos de idade`
        }
        if(idade > 17){
            imagem.src = "imagens/adultoMasc.jpg"
            document.getElementById("container").style.height = "80vh"
            document.getElementById("iRes").innerText = `Você tem ${idade} anos de idade`
        }
    }
    else
    {
        if(idade < 12){
            imagem.src = "imagens/criancaFem.jpg"
            document.getElementById("container").style.height = "75vh"
            document.getElementById("iRes").innerText = `Você tem ${idade} anos de idade`
        }
        if(idade > 12 && idade < 18){
            imagem.src = "imagens/adolFem.jpg"
            document.getElementById("container").style.height = "75vh"
            document.getElementById("iRes").innerText = `Você tem ${idade} anos de idade`
        }
        if(idade > 17){
            imagem.src = "imagens/adultaFem.jpg"
            document.getElementById("container").style.height = "80vh"
            imagem.style.height = "55vh"
            document.getElementById("iRes").innerText = `Você tem ${idade} anos de idade`
        }
    }
}
