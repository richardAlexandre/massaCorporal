let containerPrincipal  = document.querySelector('#principal')
let container2 = document.querySelector('#principal2')
let h1 = document.querySelector('#containerH1')

let cxnome = document.querySelector('#nome')
let cxidade = document.querySelector('#idade')
let cxpeso = document.querySelector('#peso')
let cxaltura = document.querySelector('#altura')
let cximc = document.querySelector('#imc')

let btn1 = document.querySelector('#botao1')
let btn2 = document.querySelector('#botao2')

let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')




btn1.addEventListener('click',  function (e){
 let nome = cxnome.value;
 let idade = cxidade.value;
 let peso = cxpeso.value;
 let altura = cxaltura.value;
 let imc =(peso/ (altura * altura)).toFixed(1)

 console.log (nome)
 console.log (idade)
 console.log (peso)
 console.log (altura)
 console.log (nome)

 

 cximc.value = imc
 let sit = situacaodoPeso(imc);
aviso.textContent = sit

 let pessoa = {
   nome  : nome,
   idade : idade,
   peso  : peso,
  altura : altura,
   imc   : imc,
   sit   : sit,
 }
 console.log(pessoa)
 dados[1].textContent= pessoa.nome
 dados[2].textContent = pessoa.idade + 'anos'
 dados[3].textContent = pessoa.peso + 'kg'
 dados[4].textContent = pessoa.altura + 'm'
 dados[5].textContent = pessoa.imc + ' '+ pessoa.sit
  

    e.preventDefault()
})


    function situacaodoPeso(imc) {
      let situacao = ''

      if (imc < 18.5){ situacao = 'peso baixo' 

      }else if(imc >=18.6 && imc <=  24.6 ){
         situacao= 'peso normal'    
      
      }else if(imc >=25 && imc <= 29.9){
         situacao = 'pré peso'
      }else if( imc >=30 &&  imc <= 34.9){
         situacao = 'obesidade I'
      }else if(imc >=35 && imc <= 39.9){
         situacao= 'obesidade II'
      }else if(imc >=40){
         situacao = 'obesidadeIII'
      }else{situacao = 'digite o valor correto'}

      return situacao
    }
 