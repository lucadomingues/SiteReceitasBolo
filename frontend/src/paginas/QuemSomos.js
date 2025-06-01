import React from "react";

function QuemSomos(){
  return(
    <div className="pagina">
      <h2>Quem Somos</h2>
      <p>Este site nasceu da paixão por tecnologia e confeitaria. Aqui, reunimos receitas, dicas e curiosidades para ajudar pessoas a fazerem bolos incríveis e compartilharem momentos doces.</p>

      <section className="sobre">
        <h3>Sobre o Projeto</h3>
        <p><i><b>Receitas de Bolo</b></i> é um projeto acadêmico desenvolvido como parte dos estudos no curso de Tecnologia em Análise e Desenvolvimento de Sistemas utilizando as linguagens React, JavaScript e PHP. A proposta é aliar programação, criatividade e praticidade em um só lugar.</p>
        
        <h3>Criador</h3>
        <div className="membro">
          <div>
            <p><b>Lucas Domingues Mendes - RA: 220304</b></p>
            <p>Estudante de Tecnologia em Análise e Desenvolvimento de Sistemas.</p>
            <div className="redes-sociais">
              <a href="https://github.com/lucadomingues" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="icone" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.8-1.5-3.8-1.5-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.5-.3-5.2-1.2-5.2-5.4 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.5.1-3 0 0 .9-.3 3 .9a10.4 10.4 0 0 1 5.4 0c2.1-1.2 3-.9 3-.9.6 1.5.2 2.7.1 3 .7.8 1.1 1.8 1.1 2.9 0 4.2-2.7 5.1-5.3 5.4.4.3.7.9.7 1.8v2.7c0 .3.2.7.8.6a11.5 11.5 0 0 0 7.8-10.9C23.5 5.7 18.3.5 12 .5z"/>
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/lucas-mendes-996087195/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="icone" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.58v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.93v5.67H9.3V9h3.43v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.4 4.34 5.51v6.23zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM6.93 20.45H3.75V9h3.18v11.45zM22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46A1.77 1.77 0 0 0 1.77 24h20.46A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuemSomos;