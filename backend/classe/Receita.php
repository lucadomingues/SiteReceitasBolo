<?php
  class Receita{
     private $idreceita;
     private $titulo;
     private $descricao;
     private $ingredientes;
     private $modo_preparo;
     private $criado_em;

     function __construct($titulo, $descricao, $ingredientes, $modo_preparo, $criado_em){

      $this -> titulo = $titulo;
      $this -> descricao = $descricao;
      $this -> ingredientes = $ingredientes;
      $this -> modo_preparo = $modo_preparo;
      $this -> criado_em = $criado_em;
     }

     public function setTitulo($titulo){
     	$this->titulo = $titulo;
     }
     public function setDescricao($descricao){
     	$this->descricao = $descricao;
     }     
     public function setIngredientes($ingredientes){
     	$this->ingredientes = $ingredientes;
     }
     public function setModoPreparo($modo_preparo){
      $this->modo_preparo = $modo_preparo;
     }
     public function setCriadoEm($criado_em){
     	$this->criado_em 	= $criado_em;
     }

     // método que irá gravar no banco de dados
     // Uma injeção de dependência onde o método recebe um objeto do tipo DB
     public function gravar(Db $db){
        $dados = [];
        $dados["titulo"] 		= $this->titulo;
        $dados["descricao"]		= $this->descricao;
        $dados["ingredientes"]	= $this->ingredientes;
        $dados["modo_preparo"]		= $this->modo_preparo;
        $dados["criado_em"]		= $this->criado_em;
        $db->gravar($dados);
     }

     public function consultar(Db $db, 
                               $campos, 
                               $where){

       $dados = $db->consultar($campos, $where);
       return $dados;
     }

     public function alterar(Db $db,
                             $dados,
                             $where){

       $db->alterar($where, $dados);
     }

     public function excluir(Db $db, $where){
       $db->excluir($where);
     }
  }
?>
