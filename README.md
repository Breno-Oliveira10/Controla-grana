# ControlaGrana 💸 | Gerenciador de Finanças Pessoais

O ControlaGrana é uma aplicação web simples para gerenciamento básico de finanças pessoais. Permite adicionar receitas e despesas, visualizar saldo atualizado e manter um histórico persistente via `localStorage`, garantindo que as informações persistam entre as sessões.

Este projeto foi desenvolvido como um exercício prático para consolidar meus conhecimentos fundamentais em **HTML, CSS e JavaScript puro (Vanilla JS)**.

# 📸 Demonstração

![Demonstração do ControlaGrana](demo/demo.gif)

## ✨ Funcionalidades

* **Adicionar Transações:** Formulário para inserir a descrição e o valor de uma receita (valor positivo) ou despesa (valor negativo).
* **Visualização de Saldo:** O saldo total é calculado e exibido em tempo real.
* **Resumo de Receitas e Despesas:** Painéis que mostram o total de entradas e saídas.
* **Histórico de Transações:** Uma lista de todas as transações adicionadas, com cores distintas para receitas e despesas.
* **Remover Transações:** Cada item do histórico pode ser removido individualmente.
* **Persistência de Dados:** As transações são salvas no `localStorage` do navegador, para que não se percam ao fechar a página.

## 🚀 Tecnologias Utilizadas

* **HTML5:** Para a estrutura semântica da página.
* **CSS3:** Para estilização e design responsivo.
* **JavaScript (ES6+):** Para toda a lógica da aplicação, manipulação do DOM e interatividade.

## 🎓 O que eu aprendi com este projeto

Trabalhei desde a estrutura semântica do HTML até a lógica de manipulação do DOM, eventos, funções de array e persistência de dados. Esse projeto me ajudou a entender o fluxo de uma aplicação web simples funcionando do início ao fim. Aqui estão as principais habilidades que desenvolvi.

### HTML
* **Estrutura Semântica:** Uso de tags como `<header>`, `<main>` `<section>`, `<h2>`, `<h3>`, `<form>`, `<label>`, etc., para dar significado ao conteúdo.
* **Formulários:** Captura de dados do usuário através de `<input>` e submissão com `<button type="submit">`.

### CSS
* **Variáveis CSS (`:root`):** Centralização de valores (cores, sombras, espaçamentos) para criar um tema consistente e fácil de manter.
* **Flexbox e Grid Layout:** Uso de `display: flex` para alinhar componentes interno e `display: grid` para criar um layout de página mais consistente e responsivo.
* **Design Responsivo (Mobile-First):** O estilo é construído primeiro para dispositivos móveis e depois adaptado para telas maiores (`@media` queries).
* **Pseudo-classes e Transições:** Efeitos de interatividade, como o botão de deletar que aparece suavemente com `:hover` e `transition`.
* **Estilização Dinâmica:** Uso de classes CSS (`.plus`, `.minus`) adicionadas via JavaScript para alterar a aparência de elementos com base nos dados.


### JavaScript (Vanilla JS)
* **Manipulação do DOM:** Seleção de elementos (`getElementById`) e criação/alteração de conteúdo dinamicamente (`createElement`, `innerHTML`, `appendChild`).
* **Eventos:** Captura de interações do usuário, como o `submit` de um formulário (`addEventListener`) e o clique em um botão (`onclick`).
* **Gerenciamento de Estado:** Utilização de um array (`transactions`) como "fonte da verdade" para armazenar os dados da aplicação.
* **Funções de Array (ES6+):** Uso prático de métodos modernos e poderosos como:
    * `map()`: Para criar um novo array apenas com os valores das transações.
    * `filter()`: Para separar receitas de despesas e para remover um item do estado.
    * `reduce()`: Para calcular somas totais de forma elegante e eficiente.
    * `forEach()`: Para iterar sobre o array de transações e renderizar a lista na tela.
*   **Persistência de Dados com `localStorage`:**
    * `localStorage.setItem()`: Para salvar os dados do usuário no navegador.
    * `localStorage.getItem()`: Para recuperar os dados ao recarregar a página.
    * `JSON.stringify()` e `JSON.parse()`: Para converter o array de objetos em string (para salvar) e vice-versa (para ler).

## 🔧 Como Executar o Projeto

1.  Clone este repositório:
    ```bash
    git clone https://github.com/Breno-Oliveira10/Controla-grana.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd Controla-grana
    ```
3.  Abra o arquivo `index.html` no seu navegador de preferência.

E pronto! A aplicação estará funcionando localmente. 

