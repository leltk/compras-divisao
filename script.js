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

    

   
        if ((qtdMacarrao >=0) && (qtdMacarrao <=999)&& (qtdRefrigerante >=0 && qtdRefrigerante<=999) &&(qtdErvilha >=0 && qtdErvilha <=999)&& (qtdArroz >=0 && qtdArroz <=999)&& (qtdFeijao >=0 && qtdFeijao<=999)&& (qtdVinho >=0 && qtdVinho<=999)){
        
        
        criarVariavel((resultadoTotal),(pVinho*qtdVinho))
        }
        
        else {
          
         let  modal=  document.getElementById("modal")
         modal.style.display="flex"
         setTimeout(()=> {
            modal.style.display="none"
         },3000)
        }
        }




function criarVariavel (compraFinal,resultadoVinho){
    let eu = document.getElementById("eu")
    let amigo= document.getElementById("amigo")
    let totalSpan= document.getElementById("compraFinal")
    
    if  ( (compraFinal.toFixed(2)*100)% 2== 0){
        console.log (compraFinal.toFixed(2)*100)
        const pagarEu= (compraFinal - resultadoVinho)/2
       
        eu.innerText= `Devo pagar ${pagarEu.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} `

        
       amigo.innerText=  `Meu amigo deve pagar ${(compraFinal-pagarEu).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
       
       totalSpan.innerText= `Valor total ${compraFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`

    }
    
    else{
        const pagarEu= compraFinal/2
        console.log (`else ${compraFinal.toFixed(2)*100}`)
        eu.innerText= `Devo pagar ${pagarEu.toLocaleString("pt-br",{style:"currency", currency:"BRL" })} `
        amigo.innerText=`Meu amigo deve pagar ${(compraFinal-pagarEu).toLocaleString("pt-br",{style:"currency", currency:"BRL" })}`

        totalSpan.innerText= `Valor total ${compraFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
       
    }
}