import React from "react";

function Home(){
  return (
    <div className="pagina-home">
      <div className="banner">
        <img src="/bolo-banner.jpg" alt="Banner de bolo" className="banner-img"/>
        <div className="banner-texto">
          <h2>Bem-vindo ao Receitas de Bolo!</h2>
          <p>Se você ama bolos, está no lugar certo! Aqui você encontra receitas incríveis, dicas de confeitaria, curiosidades e muita doçura para deixar seu dia mais saboroso.</p>
        </div>
      </div>

      <section className="descricao">
        <h3>O que você encontrará por aqui</h3>
        <p>Este site é o seu cantinho especial para aprender tudo sobre bolos! Aqui você poderá:</p>
        <ul className="funcoesSite">
          <li>📋 Cadastrar, editar e organizar suas receitas favoritas</li>
          <li>🎓 Aprender truques e dicas de confeitaria</li>
          <li>📚 Descobrir curiosidades e a história dos bolos</li>
          <li>📨 Entrar em contato com a equipe criadora</li>
          <li>👩‍🍳 Se inspirar para colocar a mão na massa!</li>
        </ul>
        <p>Navegue pelo menu acima e explore cada seção — seu próximo bolo incrível pode estar a poucos cliques de distância!</p>
      </section>

      <h3>💡 Dica rápida</h3>
      <p>Para um bolo mais fofinho, sempre peneire a farinha e o fermento antes de misturar à massa.</p>

      <p className="citacao">“Cozinhar é uma forma de amar os outros.” – Dalai Lama</p>
    </div>
  );
}

export default Home;