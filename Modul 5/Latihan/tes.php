<?php

if (extension_loaded('mysqli')) {
    echo 'MySQLi extension is installed.';
} else {
    echo 'MySQLi extension is NOT installed.';
}
?>