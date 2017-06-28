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

   var pesoEhValido = true;
   var alturaEhValida = true;

   if(altura < 0 || altura > 3.5){
      tdAltura.textContent = "Altura inválida!";
      alturaEhValida = false;
      tdImc.textContent = "Verifique a altura!";
   }

   if(peso < 0 || peso > 999){
      tdPeso.textContent = "Peso inválido!";
      pesoEhValido = false;
      tdImc.textContent = "Verifique o peso!"
   }

   if(pesoEhValido && alturaEhValida){
      var imc = peso / (altura * altura);
      tdImc.textContent = imc.toFixed(2);
   }
}
