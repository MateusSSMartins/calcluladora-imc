
let calculo = document.getElementById('calculo');


function evento(){
   let nome = document.getElementById('nome').value;
   let peso = document.getElementById('peso').value;
   let altura = document.getElementById('altura').value;
   let resposta = document.getElementById('resposta');
   
   if(nome !== '' && altura !== '' && peso !== ''){
      let valorImc = (peso / (altura * altura)).toFixed(2);
      let classificacao = '';
      if(valorImc < 18.5){
         classificacao = 'abaixo do peso.';

      }else if(valorImc < 25){
         classificacao = 'com peso ideal, parabéns.';
      }else if(valorImc < 30){
         classificacao = 'levemente acima do peso.';
      }else if(valorImc < 35){
         classificacao = 'com grau de obsediade I.';
      }else if(valorImc < 40){
         classificacao = 'com grau de obsediade II.';
      }else {
         classificacao = 'com grau de obsediade III, tome cuidado.';
      }
      
     resposta.textContent = `${nome} seu imc é de ${valorImc} e você está ${classificacao}`;

      /*resposta.textContent = nome + 'seu imc é de ' + valorImc + ' e você está' + classificacao;*/
    
      

   }else{
      resposta.textContent = 'PREENCHA TODOS OS CAMPOS'
    
   }
}
calculo.addEventListener('click', evento);