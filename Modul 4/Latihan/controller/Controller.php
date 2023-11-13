<?php

namespace Controller;

class Controller{
    var $ControllerName;
    var $ControllerMethod;

    public function getControllerAttribute(){
        return[
            "ControllerName"=>$this->ControllerName,
            "Method"=>$this->ControllerMethod
        ];
    }
}
?>