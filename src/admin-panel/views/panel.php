<h1 class="sog_title">Sogrid (<?php echo SOGRID_VERSION ?>)</h1>

<div class="sog_panel">

    <?php 
        require_once __DIR__ . '/menu.php';

        $tab = isset($_GET['tab']) ? $_GET['tab'] : 'general';

        require_once __DIR__ . '/tabs/'.$tab.'.php';
    ?>

</div>
