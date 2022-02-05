<?php

namespace Source\App\Models;

class User
{
    private $instance;

    public function __construct(\PDO $instance)
    {
        $this->instance = $instance;
    }

    public function create(string $email, string $password)
    {

        try {
            if (!$this->findByEmail($email)) {
                $stmt = $this->instance->prepare("insert into users (email, password) values (?, ?)");
                $password = password_hash($password, PASSWORD_BCRYPT);
                $stmt->bindParam(1, $email);
                $stmt->bindParam(2, $password);
                if ($stmt->execute()) {
                    return true;
                }
                return false;
            }
            return false;
        } catch (\PDOException $error) {
            echo "Error: " . $error->getMessage();
        }
    }

    public function findByEmail(string $email)
    {
        try {
            $stmt = $this->instance->prepare("select * from users  where email = (?)");
            $stmt->bindParam(1, $email);
            $stmt->execute();
            return $stmt->fetch(\PDO::FETCH_OBJ);
        } catch (\PDOException $error) {
            echo "Error: " . $error->getMessage();
        }
    }
}
