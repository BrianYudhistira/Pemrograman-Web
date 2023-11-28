<?php

namespace app\Controller;

include "app/Traits/ApiResponseFormater.php";
include "app/Models/Product.php";

use app\Models\Product;
use app\Traits\ApiResponseFormatter;

class ProductController
{
    // Pakai Trait Yang Sudah Dibuat
    use ApiResponseFormatter;

    public function index()
    {
        // Definisikan Object Model Product Yang Sudah Dibuat
        $productModel = new Product();
        // Panggil Fungsi Get All Product
        $response = $productModel->findAll();
        // Return $response Dengan Melakukan Formatting Terlebih Dahulu Menggunakan Trait Yang Sudah Dipanggil 
        return $this->apiResponse(200, "Success", $response);
    }

    public function getById($id)
    {
        $productModel = new Product();
        $response = $productModel->findById($id);
        return $this->apiResponse(200, "Success", $response);
    }

    public function insert()
    {
        // Tangkap Input Json
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);
        // Validitas Apakah Input Valid
        if (json_last_error()) {
            return $this->apiResponse(400, "error invalid input", null);
        }

        // Lanjut Jika Tidak Error
        $productModel = new Product();
        $response = $productModel->create([
            "product_name" => $inputData['product_name']
        ]);

        return $this->apiResponse(200, "Success", $response);
    }

    public function update($id)
    {
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);

        if (json_last_error()) {
            return $this->apiResponse(400, "error invalid input", null);
        }

        $productModel = new Product();
        $response = $productModel->update([
            "product_name" => $inputData['product_name']
        ], $id);

        return $this->apiResponse(200, "success", $response);
    }

    public function delete($id)
    {
        $productModel = new Product();
        $response = $productModel->destroy($id);

        return $this->apiResponse(200, "success", $response);
    }
}