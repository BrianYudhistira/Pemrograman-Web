<?php

namespace Controller;
include "controller/Controller.php";
include "traits/ResponseFormater.php";

use traits\ResponseFormatter;

class ProductController extends Controller{
    use ResponseFormatter;

    public function __construct()
    {
        $this->ControllerName = "Get All Product";
        $this->ControllerMethod = "GET";
    }

    public function getAllProduct(){
        $dummyData = [
            "Air Mineral",
            "Kebab",
            "Spaghetti",
            "Jus Jambu"
        ];

        $response = [
            "controller_attribute" => $this -> getControllerAttribute(),
            "product" => $dummyData
        ];
        return $this->responseFormatter(200,"Success",$response);
    }
}
?>
