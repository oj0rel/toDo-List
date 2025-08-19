// Criando um componente
const BotaoDeleta = () => {
    const criarBotao = document.createElement("button"); // esse aki acessa o documento(html) e cria o componente
    criarBotao.classList.add("delete-button"); // isso acessa ou se não existir adiciona a classe no css
    criarBotao.innerText = 'Deletar';

    // seria basicamente isso que está sendo feito
    // <button class="check-button"></button>

    criarBotao.addEventListener('click', deletarTarefa) // isso aki faz com que aconteça algo quando clicar no botao

    return criarBotao;
}

const deletarTarefa = (evento) => {
    const deletar = evento.target // button => button
    const tarefaDeletada = deletar.parentElement
    tarefaDeletada.remove();
}

export default BotaoDeleta; // isso é para exportar para outros arquivos