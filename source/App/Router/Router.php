<?php

namespace Source\App\Router;

header('Access-Control-Allow-Origin: *');
class Router
{
	private $routes;
	private $namespace;
	public function __construct()
	{
		$this->routes = [];
		$this->namespace = [];
	}

	public function setRoute($route, $class, $method): void
	{
		$this->routes[] =
			[
				'route' => $route, "class" => $class, "method" => $method
			];
	}

	public function getRoute(): array
	{
		return $this->routes;
	}


	public function setNamespace($namespace)
	{
		$this->namespace[] = $namespace;
	}

	public function getNamespace()
	{
		return $this->namespace;
	}

	function getUrl(): string
	{
		return parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
	}

	public function init()
	{
		$flag = 1;
		$namespace = $this->getNamespace();
		$routes = $this->getRoute();
		$currentUrl = $this->getUrl();
		foreach ($namespace as  $currentNamespace) {
			foreach ($routes as $route) {
				if ($route['route'] == $currentUrl) {
					$class = $currentNamespace . '\\' . $route['class'];
					$controller = new $class;
					$action = $route['method'];
					$controller->$action();
					$flag = 0;
				}
			}
		}
		// if ($flag) {
		// 	$class = $this->namespace[0] . '\\' . 'Site';
		// 	$controller = new $class;
		// 	$controller->error();
		// }
	}
}
