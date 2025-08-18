const criarTarefa = (evento) => {
    evento.preventDefault();

    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;

    const tarefa = document.createElement("li");
    tarefa.classList.add("task");
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo; //<li class="task"><p class="content">${valor}</p></li>

    lista.appendChild(tarefa);
    tarefa.appendChild(BotaoConclui());
    input.value = "";
};

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener('click', criarTarefa); //Referência de função

// Criando um componente
const BotaoConclui = () => {
    const criarBotao = document.createElement("button");
    criarBotao.classList.add("check-button");
    criarBotao.innerText = 'Concluir';

    criarBotao.addEventListener('click', concluirTarefa)

    return criarBotao;
}

const concluirTarefa = (evento) => {
    const finalizar = evento.target // button => button
    const tarefaCompleta = finalizar.parentElement
    tarefaCompleta.classList.toggle('done'); //devolve um True ou False
}

//criarTarefa - vai ser feito uma referência, e só acontecerá em um evento
//criarTarefa() - vai ser executado assim que colocar

// Criação de Elementos
{/* <li><p></p></li> */}
// createElement(); -> cria um elemento.
// appendChild(); -> insere um elemento dentro da tag anterior
// innerHTML(); -> insere html através do js


// EVENTO: possui 3 partes
// Onde vai acontecer - botão (ex: um evento acontece quando eu clico no botão)
// Qual evento vai acontecer - click
// O que vai acontecer - fui clickado - ação => Função

// novaTarefa.addEventListener(qual o evento que deve ocorrer, o que vai acontecer);
// novaTarefa.addEventListener('click', () => {console.log("Fui clickado.")});

// Função
// function somar(num1, num2) {
//     console.log(num1 + num2); //caso queira usar o resultado da função para outra coisa, usar return
// }

// somar(10, 10);


// Arrow Function
// const multiplicar = (num1, num2) => console.log(num1*num2);

// multiplicar(10, 10);