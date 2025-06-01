import React from "react";

function Contato(){
  return(
    <div className="pagina">
      <h2>Entre em Contato</h2>
      <p>Tem alguma dúvida, sugestão ou receita para compartilhar? Fale com a gente!</p>

      <form className="formulario-contato">
        <label>
          Nome:
          <input type="text" name="nome" placeholder="Seu nome" required />
        </label>

        <label>
          E-mail:
          <input type="email" name="email" placeholder="seu@email.com" required />
        </label>

        <label>
          Mensagem:
          <textarea name="mensagem" rows="5" placeholder="Escreva sua mensagem aqui..." required></textarea>
        </label>

        <button type="submit">Enviar</button>
      </form>

      <p className="contato-extra">
        Ou envie diretamente para: <a href="mailto:lucas@email.com">receitasdebolo@gmail.com</a>
      </p>
    </div>
  );
}

export default Contato;