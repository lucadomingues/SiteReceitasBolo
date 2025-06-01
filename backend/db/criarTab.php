<?php
  // Conexão com o banco de dados
  $host = "localhost";
  $user = "root";
  $pass = "";
  $dbname = "test";

  // Conecta ao MySQL
  $conexao = new mysqli($host, $user, $pass, $dbname);

  // Verifica conexão
  if ($conexao->connect_error) {
    die("Erro na conexão: " . $conexao->connect_error);
  }

  // Criação da tabela
  $sql = "CREATE TABLE IF NOT EXISTS receitas (
    idreceita INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    ingredientes TEXT NOT NULL,
    modo_preparo TEXT NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )";

  // Verifica se a tabela foi criada no Banco
  if ($conexao->query($sql) === TRUE) {
    echo "Tabela 'receitas' criada com sucesso.";
  } else {
    echo "Erro ao criar tabela: " . $conexao->error;
  }

  // Fechar conexão
  $conexao->close();
?>