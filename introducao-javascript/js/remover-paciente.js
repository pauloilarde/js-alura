var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(){
   var alvoDoClique = event.target;
   var paiDoAlvo = alvoDoClique.parentNode;

   paiDoAlvo.classList.add("fadeOut");


   setTimeout(function () {
      paiDoAlvo.remove();
   }, 500);
});

// pacientes.forEach(function (paciente) {
//    paciente.addEventListener("dblclick", function(){
//       console.log("Fui clicado com duplo clique");
//       this.remove();
//    });
// });
