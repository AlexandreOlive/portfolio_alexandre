// Este arquivo contém as interações JavaScript do portfólio.
// Ele é carregado pelo index.html com o atributo defer.

// Aguarda o HTML ser analisado e transformado em elementos disponíveis no DOM.
document.addEventListener('DOMContentLoaded', () => {

  // Procura o elemento que contém o ano no rodapé.
  const year = document.querySelector('#current-year');

  // Se o elemento existir, substitui o ano fixo pelo ano atual do computador do visitante.
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Seleciona todos os links cujo href começa com # (links para seções da própria página).
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    // Adiciona um evento para executar código quando o visitante clicar no link.
    anchor.addEventListener('click', (event) => {

      // Lê o valor do href, por exemplo: #projetos.
      const targetId = anchor.getAttribute('href');

      // Procura na página o elemento cujo id corresponde ao href do link.
      const target = document.querySelector(targetId);

      // Se não encontrar o destino, encerra o evento sem alterar o comportamento padrão.
      if (!target) return;

      // Impede o salto instantâneo padrão do navegador.
      event.preventDefault();

      // Desloca a página suavemente até a seção encontrada.
      target.scrollIntoView({
        behavior: 'smooth', // Faz a rolagem ser gradual.
        block: 'start'      // Alinha o início da seção com a área visível.
      });
    });
  });
}); // Fim do evento DOMContentLoaded.
