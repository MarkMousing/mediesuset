<?php
define("DOCROOT", filter_input(INPUT_SERVER, "DOCUMENT_ROOT", FILTER_SANITIZE_STRING));
define("COREROOT", substr(DOCROOT, 0, strrpos(DOCROOT,"/")) . "/core/");
?>
