import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Estudo para React</h1>
        <h2>O que é React?</h2>
        <p>React é uma biblioteca JavaScript de código aberto usada para criar interfaces de usuário (UI) para aplicativos da web. Foi desenvolvido pelo Facebook em 2011 e lançado ao público em 2013.

React permite que os desenvolvedores criem componentes reutilizáveis ​​que podem ser usados ​​para construir UIs complexas e interativas com facilidade. O React é baseado em uma abordagem de programação declarativa, o que significa que os desenvolvedores podem descrever como uma interface de usuário deve ser renderizada e o React se encarrega de gerenciar as atualizações necessárias na tela quando o estado do aplicativo muda.

Uma das principais características do React é sua capacidade de trabalhar bem com outras tecnologias, como frameworks de back-end e outras bibliotecas front-end. Além disso, o React oferece excelente desempenho e é usado por muitas empresas e desenvolvedores em todo o mundo para criar aplicativos da web complexos e escaláveis.</p>
        <h2>O que é SPA?</h2>
        <p>SPA significa Single-Page Application (Aplicação de Página Única, em português) e é um tipo de aplicativo da web que carrega e exibe apenas uma única página HTML dinamicamente, em vez de carregar várias páginas HTML separadas.

Em uma SPA, todo o conteúdo é carregado inicialmente e, em seguida, as interações do usuário são tratadas pela manipulação do DOM (Document Object Model) em tempo real, sem a necessidade de carregar uma nova página. Isso resulta em uma experiência de usuário mais rápida e responsiva, pois não há atraso na transição entre as páginas. Além disso, como as solicitações de servidor são feitas apenas para atualizar o conteúdo da página, em vez de carregar toda a página novamente, as SPAs consomem menos largura de banda e oferecem melhor desempenho.

O React é uma das tecnologias usadas para criar SPAs, mas existem outras bibliotecas e frameworks que também são populares para essa finalidade, como Angular e Vue.js. SPAs são amplamente utilizadas em aplicativos da web modernos, como aplicativos de e-commerce, aplicativos de mídia social e aplicativos de produtividade.</p>
        <h2>Para que serve o NPX no React?</h2>
        <p>O comando NPX é uma ferramenta do Node.js que é frequentemente usada com o React para executar scripts e comandos sem a necessidade de instalar globalmente pacotes Node.js.

No contexto do React, o comando NPX é usado para executar scripts que estão incluídos nos pacotes instalados localmente em um projeto do React. Por exemplo, se você precisar criar um novo projeto React, normalmente usaria o comando "create-react-app", que pode ser instalado globalmente com o NPM (Node Package Manager). No entanto, se você preferir não instalar esse pacote globalmente, pode usar o NPX para executá-lo a partir da linha de comando, sem precisar instalá-lo previamente no seu sistema.

O comando NPX também pode ser usado para executar outros scripts e comandos específicos do React, como o "react-scripts" que é usado para executar e construir projetos React ou o "storybook" que é usado para criar uma documentação de componentes reutilizáveis do React.

Em resumo, o NPX é uma ferramenta útil para o desenvolvimento React, pois permite executar pacotes Node.js localmente, sem a necessidade de instalá-los globalmente e ajuda a manter a compatibilidade de versões de pacotes específicos em diferentes projetos.</p>
        <h4>Developed by Betta</h4>
        <a
          className="App-link"
          href="https://bettabrasil.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acompanhe a Betta
        </a>
      </header>
    </div>
  );
}

export default App;
