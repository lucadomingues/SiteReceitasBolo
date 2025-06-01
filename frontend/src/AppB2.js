import React, { useState } from "react";
import Home from "./paginas/Home";
import Crud from "./paginas/Crud";
import Dicas from "./paginas/Dicas";
import Historia from "./paginas/Historia";
import QuemSomos from "./paginas/QuemSomos";
import Contato from "./paginas/Contato";
import "./style.css";

/* Usado useState para ajudar na mudança de páginas deixando o sistema mais eficiente */
/* Evitando que a página seja recarregada. Ela é renderizada/atualizada */

function AppB2() {
  const [paginaAtual, setPaginaAtual] = useState("home");

  function renderizarPagina() {
    /* Verificando qual a pagina selecionada */
    switch (paginaAtual) {
      case "crud": return <Crud />;
      case "dicas": return <Dicas />;
      case "historia": return <Historia />;
      case "quem": return <QuemSomos />;
      case "contato": return <Contato />;
      case "home": return <Home />;
      default: return <Home />;
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1 className="title-home" onClick={() => setPaginaAtual("home")}>Receitas de Bolo</h1>
        <nav className="menu">
          <button onClick={() => setPaginaAtual("crud")} className="menu-item">CRUD</button>
          <button onClick={() => setPaginaAtual("dicas")} className="menu-item">Dicas</button>
          <button onClick={() => setPaginaAtual("historia")} className="menu-item">História do Bolo</button>
          <button onClick={() => setPaginaAtual("quem")} className="menu-item">Quem Somos</button>
          <button onClick={() => setPaginaAtual("contato")} className="menu-item">Contato</button>
        </nav>
      </header>
      <main className="conteudo">
        {renderizarPagina()}
      </main>
    </div>
  );
}

export default AppB2;
