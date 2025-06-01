<?php
/* TESTANDO INSERÇÃO DE DADOS NO BANCO

    require_once "db/parametro.php";

    $db = new Db();
    $db->conectar();
    $db->setTabela("receitas");

    // Dados inseridos manualmente
    $dados = [
    "titulo" => "Bolo de Chocolate",
    "descricao" => "Fofinho e molhado",
    "ingredientes" => "Farinha, ovos, açúcar, chocolate",
    "modo_preparo" => "Misture tudo e asse"
    ];

    $db->gravar($dados);

    echo "Receita salva com sucesso!";
*/

    // Vinculando acesso do frontend (React)
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Content-Type: application/json");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit;
    }

    require_once("db/parametro.php");
    require_once("classe/Receita.php");
    // Conexão com banco
    $db = new Db();
    $db->conectar();
    $db->setTabela("receitas");

    // Buscando as receitas no banco e retornando em JSON
    if($_SERVER["REQUEST_METHOD"] === "GET"){
        $dados = $db->executaSQL("SELECT * FROM receitas");
        echo json_encode($dados);
        exit;
    }

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $jsonRecebido = file_get_contents("php://input");
        $dados = json_decode($jsonRecebido, true);

        // Exluindo receita informada no banco
        if (isset($dados["acao"]) && $dados["acao"] === "excluir" && isset($dados["id"])) {
            $db -> setTabela("receitas");
            $db->excluir("idreceita = " . intval($dados["id"]));

            echo json_encode(["mensagem" => "Receita excluída com sucesso!"]);
            exit;
        }

        // Atualizando/Editando receita no banco
        if (isset($dados["id"])) {
            $db->setTabela("receitas");
            $atualizar = [
            "titulo" => $dados["titulo"],
            "descricao" => $dados["descricao"],
            "ingredientes" => $dados["ingredientes"],
            "modo_preparo" => $dados["modo_preparo"]
            ];
            $db->alterar("idreceita = " . intval($dados["id"]), $atualizar);
            echo json_encode(["mensagem" => "Receita atualizada com sucesso!"]);
            exit;
        }
    }
    
    // ARQUIVO TEMPORARIO - Testando erro
    //file_put_contents("debug.json", $dadosJson);
/*
    if (!$dados) {
        http_response_code(400);
        echo json_encode(["erro" => "JSON inválido"]);
        exit;
    }
*/
    // Validando dados - Se estiver faltando algo retorna erro
    if (!$dados || !isset($dados["titulo"], $dados["descricao"], $dados["ingredientes"], $dados["modo_preparo"])) {
        http_response_code(400);
        echo json_encode(["erro" => "Dados inválidos."]);
        exit;
    }

    // Novo cadastro de receita
    if (isset($dados["titulo"], $dados["descricao"], $dados["ingredientes"], $dados["modo_preparo"])) {
        $receita = new Receita(
            $dados["titulo"],
            $dados["descricao"],
            $dados["ingredientes"],
            $dados["modo_preparo"],
            date("Y-m-d H:i:s")
        );
        $receita->gravar($db);
        echo json_encode(["mensagem" => "Receita cadastrada com sucesso!"]);
        exit;
    }
?>