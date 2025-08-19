// Criando um componente
const BotaoConclui = () => {
    const criarBotao = document.createElement("button"); // esse aki acessa o documento(html) e cria o componente
    criarBotao.classList.add("check-button"); // isso acessa ou se não existir adiciona a classe no css
    criarBotao.innerText = 'Concluir';

    // seria basicamente isso que está sendo feito
    // <button class="check-button"></button>

    criarBotao.addEventListener('click', concluirTarefa) // isso aki faz com que aconteça algo quando clicar no botao

    return criarBotao;
}

const concluirTarefa = (evento) => {
    const finalizar = evento.target // button => button
    const tarefaCompleta = finalizar.parentElement
    tarefaCompleta.classList.toggle('done'); //devolve um True ou False
}

export default BotaoConclui; // isso é para exportar para outros arquivos