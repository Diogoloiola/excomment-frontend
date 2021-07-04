<?php

use Source\App\Router\Router;

require_once __DIR__.'/vendor/autoload.php';

$router = new Router();

$router->setNamespace("Source\App\Controllers");
$router->setRoute("/", "Site", "index");
$router->init();
