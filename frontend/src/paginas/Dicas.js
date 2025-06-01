import React from "react";

function Dicas(){
  return(
    <div className="pagina">
      <h2>Dicas de Confeitaria</h2>
      <p>
        Aprenda truques e técnicas para deixar seus bolos mais saborosos, fofinhos e bem decorados.
        Essas dicas são ideais tanto para iniciantes quanto para quem já ama confeitar!
      </p>

      <section className="lista-dicas">
        <h3>🔪 Preparo da Massa</h3>
        <div className="bloco-dicas">
          <ul>
            <li>Sempre peneire a farinha, o açúcar e o fermento. Isso deixa a massa mais leve.</li>
            <li>Use os ovos em temperatura ambiente para uma massa mais aerada.</li>
            <li>Não bata demais a massa depois de adicionar o fermento — isso pode prejudicar o crescimento do bolo.</li>
          </ul>
          <img src="/dica-massa.jpg" alt="" className="dica-img"/>
        </div>

        <h3>🔥 Assando o Bolo</h3>
        <div className="bloco-dicas">
          <ul>
            <li>Pré-aqueça o forno por pelo menos 10 minutos antes de colocar o bolo.</li>
            <li>Evite abrir o forno nos primeiros 20 minutos de cozimento.</li>
            <li>Use a técnica do palito: espete no centro, e se sair limpo, o bolo está pronto.</li>
          </ul>
          <img src="/dica-forno.jpg" alt="" className="dica-img"/>
        </div>

        <h3>🎂 Dicas de Recheio e Cobertura</h3>
        <div className="bloco-dicas">
          <ul>
            <li>Espere o bolo esfriar completamente antes de rechear ou cobrir.</li>
            <li>Use caldas (ex: leite condensado + leite) para deixar o bolo molhadinho.</li>
            <li>Prefira chantilly bem gelado para bater, ele monta mais rápido e firme.</li>
          </ul>
          <img src="/dica-cobertura.jpg" alt="" className="dica-img"/>
        </div>

        <h3>🌟 Toque Final</h3>
        <div className="bloco-dicas">
          <ul>
            <li>Finalize com frutas, granulado, raspas de chocolate ou flores comestíveis.</li>
            <li>Faça testes! A confeitaria também é criatividade e carinho.</li>
          </ul>
          <img src="/dica-decoracao.jpg" alt="" className="dica-img"/>
        </div>
      </section>
    </div>
  );
}

export default Dicas;