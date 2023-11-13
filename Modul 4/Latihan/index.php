<?php
include "controller/ProductController.php";

use controller\ProductController;

$productController = new ProductController;

echo $productController->getAllProduct();
?>