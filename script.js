//1. Capturar entradas e armazenar em variáveis

const novaTarefa = document.querySelector('#input_id');
const botaoAdd = document.getElementById('botao_add_id');
const formulario = document.getElementById(form_id);
const listaDeTarefas = document.getElementById(lista_id);
const botaoMarca = document.getElementById(botao_marca_id);
const botaoLimpa = document.getElementById(botao_limpa_id);

//2. Processamento attraves de eventos e funçoes

//funçao de adicionar a partir do click da usuária, um evento
botapAdd.addEventlistener("click", (event)=>{
    event.preventDefault();

    const elementolista = document.createElement('li');
    const textoTarefa = document.createElement('p');
    const iconeDEleta = document.createElement('span')

    textoTarefa.innerText = novaTarefa.value;
    inconeDeleta.innerText = ' ';

    if (textoTarefa.innerText.trim()==='') {
        alert('Você precisa digitar alguma coisa!');

    } else {
      listaDeTarefas.appendChild(elementolista);
      elementolista.appendChild(textoTarefa);
      elementolista.appendChild(iconeDEleta);
         formulario.reset();
    }
    novaTarefa.focus();
 
    //função para marcar individualmente uma tarefa 
    textoTarefa.addEventListener("click", () => {

        textoTarefa.classList.toggle("checked");
        verificarMarcados(); // chama a função do DESAFIO 2 para mudar o texto
    });
        
   
     iconeDeleta.addEventListener("click", () => {
        
       elementoLista.remove();   
    });       
    verificarMarcados(); 
});

    // função para marcar todas as tarefas:

   botaoMarca.addEventlistener("click", () => {
    let todasAsTarefas = document.querySelectorAll("p");

    if (botaoMarca.innerText === "Marcar todos") {   
      todasAsTarefas.forEach((tarefa) => {
       tarefa.classList.add("checked");
      });
      botaoMarca.innerText = "Desmarcar todos";
    } else {
    todasAsTarefas.forEach((tarefa) => { 
        tarefa.classList.remove("checked");   
    });
       botaoMarca.innerText = "Marcar todos";    
    } 
    });
    
    // função para limpar todas as tarefas:

    botaoLimpa.addEventListener("click", () => { 
        listaDeTarefas.innerHTML = "";
 });
    
    // ### DESAFIO 2 ###  
    // função que verifica se se todos estão marcados
    
    function verificarMarcados() {  
    let todasAsTarefas = document.querySelectorAll("p");   
    let verificacao = []; //array vazia que recebe as tarefas que estão d
    
    todasAsTarefas.forEach((tarefa) => { 
    //forEach pra verificar cada tarefa da array todasAsTarefas
    if (!tarefa.classList.contains("checked")) {
  //comdiçao que verifica se a tarefa nao possui a classe checked
  verificacao.push(tarefa);
    }
});

//verificação se alguma tarefa estava desmarcada e foi adicion 
if (verificacao.length === 0 && todasAsTarefas) {
//se a array tiver vazia e existir uma lista de tarefas ele 
botaoMarca.innerText = "Desmarcar todos";
} else {
    //se a array verificacao tiver algum item, ele vai mudar o t
     botaoMarca.innerText = "Marcar todos";
     }
 }
    
    // console.log(novaTarefa);
    // console.log(botaoAdd); 
    // console.log(formulario);
