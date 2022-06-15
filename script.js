const pRefrigerante = 11.99
const pMacarrao = 6.99
const pErvilha =  6.99 
const pArroz = 22.99
const pFeijao = 11.89
const pVinho= 70.00


let confirma = document.getElementById("confirma")
confirma.addEventListener("click",calculaTotal)

function calculaTotal(evt) {
    evt.preventDefault()
    let qtdRefrigerante = document.getElementById("qtdRefrigerante").value

    let qtdMacarrao = document.getElementById("qtdMacarrao").value

    let qtdErvilha = document.getElementById("qtdErvilha").value

    let qtdArroz = document.getElementById("qtdArroz").value

    let qtdFeijao = document.getElementById("qtdFeijao").value

    let qtdVinho = document.getElementById("qtdVinho").value

    let resultadoTotal = (pRefrigerante* qtdRefrigerante)+ (pMacarrao* qtdMacarrao)+ (pErvilha*qtdErvilha)+ (pArroz*qtdArroz)+(pFeijao*qtdFeijao)+(pVinho*qtdVinho)

    
    criarVariavel(resultadoTotal,(pVinho*qtdVinho) )
}


function criarVariavel (compraFinal,resultadoVinho){
    let eu = document.getElementById("eu")
    let amigo= document.getElementById("amigo")
    let totalSpan= document.getElementById("compraFinal")
    
    if  (( compraFinal% 2)== 0){
        const pagarEu= (compraFinal - resultadoVinho)/2
       
        eu.innerText= `Devo pagar ${pagarEu.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} `

        
       amigo.innerText=  `Meu amigo deve pagar ${(compraFinal-pagarEu).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
       
       totalSpan.innerText= `Valor total ${compraFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`

    }
    
    else{
        const pagarEu= compraFinal/2
        eu.innerText= `Devo pagar ${pagarEu.toLocaleString("pt-br",{style:"currency", currency:"BRL" })} `
        amigo.innerText=`Meu amigo deve pagar ${(compraFinal-pagarEu).toLocaleString("pt-br",{style:"currency", currency:"BRL" })}`

        totalSpan.innerText= `Valor total ${compraFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
       
    }
}