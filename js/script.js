const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener('click', () => {
    const tarefa = document.querySelector("[data-form-input]")
    const valor = tarefa.value;

    console.log(valor);
});


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