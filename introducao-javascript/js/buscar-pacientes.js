var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
   console.log("Fui buscar pacientes..");

   var xhr = new XMLHttpRequest();

   xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

   xhr.addEventListener("load", function () {
      var resposta = xhr.responseText;
      var pacientes = JSON.parseres(resposta);
   });

   xhr.send();
});