<?php

namespace Source\App\Controllers;

use League\Plates\Engine;
use Source\App\Controllers\Repositorio;

class Site
{
    private $view;

    public function __construct()
    {
        $this->view = Engine::create(__DIR__ . "/../../../themes", "php");
    }

    public function index()
    {
        echo $this->view->render("index");
    }
    
    public function error(){
        echo '<h1>Rota não presente no sistema</h1>';
    }

}