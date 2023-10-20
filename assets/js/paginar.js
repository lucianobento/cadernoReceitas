/**
 * Função utilizada para exibir as receitas do caderno de receitas
 */
function Paginar(id) {
    /* constantes que armazenam os divs das receitas */
    const receita1 = document.querySelector('#pag1');
    const receita2 = document.querySelector('#pag2');
    const receita3 = document.querySelector('#pag3');

    /* constantes que armazenam os IDs dos botões da paginação */
    const p1 = document.querySelector('#p1');
    const p2 = document.querySelector('#p2');
    const p3 = document.querySelector('#p3');

    /* variável que armazena o id da div selecionada */
    let elemento = id;

    /* verifico a receita selecionada e exibo a div, ocultando as demais */
    switch (elemento) {
        case 'pag1':
            receita1.classList.add('active');
            receita2.classList.remove('active');
            receita3.classList.remove('active');

            p1.classList.add('active');
            p2.classList.remove('active');
            p3.classList.remove('active');
            break;
        case 'pag2':
            receita1.classList.remove('active');
            receita2.classList.add('active')
            receita3.classList.remove('active');

            p1.classList.remove('active');
            p2.classList.add('active')
            p3.classList.remove('active');
            break;
        case 'pag3':
            receita1.classList.remove('active');
            receita2.classList.remove('active');
            receita3.classList.add('active');

            p1.classList.remove('active');
            p2.classList.remove('active');
            p3.classList.add('active');
            break;
        default:
            break;
    }

}