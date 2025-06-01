import React from "react";

function Crud(){
  // Função para puxar e exibir as receitas cadastradas
  function carregarReceitas(){
    fetch("http://localhost/meuprojeto/backend/index.php")
      .then(res => res.json())
      .then(receitas => {
        const lista = document.getElementById("lista-receitas");
        lista.innerHTML = "";

        // Apresentando as receitas em uma "li"
        for (const receita of receitas) {
          const item = document.createElement("li");
          item.innerHTML =
            "<h3><b>" + receita.titulo + "</b></h3>" +
            "<p><i>" + receita.descricao + "</i></p>" +
            "<p><b>Ingredientes:</b> " + receita.ingredientes + "</p>" +
            "<p><b>Modo de Preparo:</b> " + receita.modo_preparo + "</p>";
          
          // Criaando da "div" dos botões
          const divBotoes = document.createElement("div");
          divBotoes.className = "btns-receita";

          // Botão de edição
          const botaoEditar = document.createElement("button");
          botaoEditar.textContent = "Editar";
          botaoEditar.className = "btn-editar"
          botaoEditar.onclick = function () {
            preencherFormulario(receita);
          };

          // Criando botão Excluir
          const botaoExcluir = document.createElement("button");
          botaoExcluir.textContent = "Excluir";
          botaoExcluir.className = "btn-excluir";
          botaoExcluir.onclick = function () {
            // O comentario/código abaixo foi inserido com o intuito de ignorar o aviso que o React está retornando, referente a confirmação de exclusão... Sem ele o site não estava funcionando.
            // eslint-disable-next-line no-restricted-globals
            if(!confirm("Confirmar exclusão?")) return;

            fetch("http://localhost/meuprojeto/backend/index.php", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ acao: "excluir", id: receita.idreceita })
            })
              .then(res => res.json())
              .then(resposta => {
                if(resposta.mensagem){
                  alert(resposta.mensagem);
                }
                carregarReceitas();
              });
          };

          // Inserindo os botões, itens e divs no site
          divBotoes.appendChild(botaoEditar);
          divBotoes.appendChild(botaoExcluir);

          item.appendChild(divBotoes);

          lista.appendChild(item);
        }
      })
      .catch(err => console.error("Erro ao carregar receitas:", err));
  }

  // Executando a função para aparecer as receitas cadastradas
  setTimeout(carregarReceitas, 0);

  // Mostrando formulário
  function mostrarFormulario(){
    document.getElementById("form-receita").style.display = "block";
    document.getElementById("lista-receitas").style.display = "none";
  }

  // Escondendo formulário
  function ocultarFormulario(){
    document.getElementById("form-receita").style.display = "none";
    document.getElementById("lista-receitas").style.display = "block";
  }

  // Preenchendo formulário
  // Função chamada quando clicamos em Editar - preenchendo automaticamente o formulario e permitindo alteração
  function preencherFormulario(receita) {
    document.getElementById("form-receita").style.display = "block";
    document.getElementById("lista-receitas").style.display = "none";
    document.getElementById("idreceita").value = receita.idreceita;
    document.getElementById("titulo").value = receita.titulo;
    document.getElementById("descricao").value = receita.descricao;
    document.getElementById("ingredientes").value = receita.ingredientes;
    document.getElementById("modo_preparo").value = receita.modo_preparo;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const receita = {
      titulo: form.titulo.value,
      descricao: form.descricao.value,
      ingredientes: form.ingredientes.value,
      modo_preparo: form.modo_preparo.value
    };

    if(form.idreceita.value){
      receita.id = form.idreceita.value;
    }

    // Enviando os dados da constante "receita"
    fetch("http://localhost/meuprojeto/backend/index.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(receita)
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.mensagem || data.erro);
        ocultarFormulario();
        carregarReceitas();
      })

    // Limpando os campos
    form.reset();
    // Limpando "id" caso seja uma edição
    form.idreceita.value = "";
  }

  return (
    <div className="pagina">
      <div class="div-ladolado">
        <h2>Receitas</h2>

        <button onClick={mostrarFormulario} id="btn-nova-receita">Nova Receita</button>
      </div>

      <form className="formulario-contato" id="form-receita" onSubmit={handleSubmit}>
        <input type="hidden" id="idreceita" name="idreceita" />
        
        <label>
          Título:
          <input type="text" id="titulo" name="titulo" placeholder="Ex: Bolo de Cenoura" required />
        </label>

        <label>
          Descrição:
          <textarea name="descricao" id="descricao" rows="3" placeholder="Breve descrição da receita" required />
        </label>

        <label>
          Ingredientes:
          <textarea name="ingredientes" id="ingredientes" rows="4" placeholder="Liste os ingredientes" required />
        </label>

        <label>
          Modo de Preparo:
          <textarea name="modo_preparo" id="modo_preparo" rows="5" placeholder="Explique o passo a passo" required />
        </label>
  
        <div class="div-ladolado">
          <button type="submit">Cadastrar</button>
          <button type="button" onClick={ocultarFormulario} id="btn-cancelar-form">Cancelar</button>
        </div>
      </form>

      <ul id="lista-receitas" className="lista-receitas"></ul>
    </div>
  );
}

export default Crud;