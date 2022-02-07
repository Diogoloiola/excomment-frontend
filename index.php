<?php

use Source\App\Router\Router;

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Content-Type");
require_once __DIR__ . '/vendor/autoload.php';

$router = new Router();

$router->setNamespace("Source\App\Controllers");
$router->setRoute("/create_user", "UserController", "create");
$router->setRoute("/login_user", "UserController", "login");
$router->init();
