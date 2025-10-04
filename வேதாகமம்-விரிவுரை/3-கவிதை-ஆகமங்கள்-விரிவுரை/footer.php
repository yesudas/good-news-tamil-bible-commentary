<?php
// footer.php
include 'counter.php';
?>
</div>
<div class="zoom-controls">
    <button class="zoom-btn" onclick="zoomIn()">+</button>
    <button class="zoom-btn" onclick="zoomOut()">−</button>
    <button class="zoom-btn" onclick="resetZoom()">⟳</button>
  </div>
    <footer>
	    <nav class="navbar navbar-default navbar-fixed-bottom" role="navigation">
		    <p class="navbar-text">&nbsp; &nbsp; No Copyright, Freely Copy and Distribute (as per Matthew 10:8), <a target="_blank" href="https://www.wordofgod.in/">www.WordOfGod.in</a> 
    		| Visitors: <?= $visitors2 ?>
	    	</p>
	    </nav>
    </footer>

    <script src="../js/jquery-1.12.2.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/script.js?v=<?php echo $version; ?>"></script>