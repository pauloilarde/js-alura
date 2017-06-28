var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

   var paciente = pacientes[i];

   var tdPeso = paciente.querySelector(".info-peso");
   var peso = tdPeso.textContent;

   var tdAltura = paciente.querySelector(".info-altura");
   var altura = tdAltura.textContent;

   var tdImc = paciente.querySelector(".info-imc");

   var pesoEhValido = validaPeso(peso);
   var alturaEhValida = validaAltura(altura);

   if(!alturaEhValida){
      tdAltura.textContent = "Altura inválida!";
      alturaEhValida = false;
      tdImc.textContent = "Verifique a altura!";
      paciente.classList.add("paciente-invalido");
   }

   if(!pesoEhValido){
      tdPeso.textContent = "Peso inválido!";
      pesoEhValido = false;
      tdImc.textContent = "Verifique o peso!"
      paciente.classList.add("paciente-invalido");
   }

   if(pesoEhValido && alturaEhValida){
      var imc = calculaImc(peso, altura);
      tdImc.textContent = imc;
   }
}

titulo.addEventListener("click", function(){
   console.log("Olha que legal, posso chamar uma função anônima!");
});

function mostraMensagem(){
   console.log("Olá, eu fui clicado!");
}

function validaPeso(peso){
   if (peso > 0 && peso < 1000){
      return true;
   }else{
      return false;
   }
}

function validaAltura(altura){
   if(altura < 3.5 && altura > 0){
      return true;
   }else{
      return false;
   }
}

function calculaImc(peso, altura){
   var imc = 0;

   imc  = peso / (altura * altura);
   return imc.toFixed(2);
}
