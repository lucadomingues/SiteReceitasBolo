import React from "react";

function Historia() {
  return(
    <div className="pagina">
      <h2>História do Bolo</h2>
      <p>A história do bolo é tão rica quanto saborosa! Desde os tempos antigos, o bolo evoluiu de uma simples mistura de grãos e mel até as delícias recheadas e decoradas que conhecemos hoje.</p>

      <section className="historia-topico">
        <h3>A história do bolo começa no Egito Antigo</h3>
        <img src="/bolo-egito-antigo.jpg" alt="" className="historia-img" />
        <p>Para entender a história do bolo, precisamos voltar ao Egito Antigo. Lá, o produto era preparado com pão adoçado com xaropes de frutas, tâmaras e passas. Depois da expansão do Império Romano, eles se aperfeiçoaram na técnica da fermentação e implementaram na produção. Assim, batizaram de "bolo" por parecer como uma bola.</p>
        <p>Já os gregos utilizavam essa receita dos egípcios e preparavam em um produto com mel coberto de velas acesas que representavam a lua cheia. Esse era oferecido à deusa da fertilidade, caça e maternidade, Artemis.</p>
        <p>A diferença entre o pão e o bolo surgiu especialmente em Roma, durante o renascentismo.</p>
      </section>

      <section className="historia-topico">
        <h3>Bolos em festas comemorativas</h3>
        <img src="/bolo-festa.jpg" alt="" className="historia-img" />
        <p>A história do bolo em festas e eventos comemorativos também começa em Roma. Devido à dificuldade de encontrar as especiarias, apenas as famílias mais ricas tinham acesso aos bolos. Esses começaram a ser feitos com ingredientes mais especializados e decorados. Porém, os bolos não eram consumidos e, sim, oferecidos aos deuses.</p>
        <p>No século XVI, os europeus começaram a inserir os bolos em casamentos da nobreza. E o primeiro bolo com andares que se tem registro do casamento entre Catarina Médice II com Henrique II da França. Já na Alemanha de 1568, o casamento de Guilherme da Baviera com Renata de Lorena da França teve um bolo com mais de três metros.</p>
        <p>Os bolos foram ficando cada vez maiores e mais bem feitos. No Reino Unido, a Rainha Vitória I foi uma das pioneiras em introduzir os bolos em suas festas. Estes possuíam cerca de 200 kg e ainda mediam mais de dois metros de altura.</p>
      </section>

      <section className="historia-topico">
        <h3>E as velas em cima do bolo?</h3>
        <img src="/bolo-velas.jpg" alt="" className="historia-img" />
        <p>Bom, como falamos ali em cima, esse hábito começou com os gregos para representar a lua cheia. Mas, além disso, depois de um tempo, as velas começaram a representar um agradecimento aos deuses. Isso porque acreditava- se que a fumaça conseguia proteger o aniversariante no ano que vinha em sua frente.</p>
        <p>Com o avanço da modernidade, o objetivo mudou. Agora, o aniversariante, ao apagar todas as velinhas, deve fazer um pedido que se realiza caso seja mantido em segredo. Essa é uma evolução de outra teoria, que diz que a fumaça leva os desejos dos fiéis aos céus, para que então sejam atendidos.</p>
      </section>
    </div>
  );
}

export default Historia;