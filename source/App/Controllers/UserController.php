<?php

namespace Source\App\Controllers;

use Source\App\Models\User;

class UserController
{
    private $connection;

    public function __construct()
    {
        $this->connection = new \PDO("pgsql:host=ec2-34-202-115-62.compute-1.amazonaws.com; dbname=d3702dgl85uage", "gasgfoiokxecyt", "69a0fa44db5235fa1af3dd911f504fc15647587dc60b29cba770e83311a0c47c");;
    }

    public function create()
    {
        $user = new User($this->connection);
        if ($user->create($_POST['email'], $_POST['password'])) {
            echo json_encode(['message' => "suceso ao criar o usuário"]);
        } else {
            echo json_encode(['message' => "erro ao criar o usuário"]);
        }
    }

    public function login()
    {
        $user = (new User($this->connection))->findByEmail($_POST['email']);
        if ($user) {
            if (password_verify($_POST['password'], $user->password)) {
                $data = (new User($this->connection))->updateData($user->email);
                echo json_encode(['token' => $data[0], 'timestamp' => $data[1]]);
            } else {
                echo json_encode(['message' => "Algo deu errado, email ou senha podem ter sido digitados de maneira errada"]);
            }
        } else {
            echo json_encode(['message' => "Algo deu errado, email ou senha podem ter sido digitados de maneira errada"]);
        }
    }

    public function error()
    {
        echo '<h1>Rota não presente no sistema</h1>';
    }
}
