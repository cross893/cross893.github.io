<html>
	<head>
		<title>замена лишних символов</title>
	</head>
	
	<body>
		<?php
			$txt = file_get_contents('f.txt');
			$txt = str_replace("	", " ", $txt);
			while( strpos($txt,"  ")!==false){
				$txt = str_replace("  ", " ", $txt);
			}
			
			while( strpos($txt," . ")!==false){
				$txt = str_replace(" . ", ". ", $txt);
			}
			
			while( strpos($txt," .")!==false){
				$txt = str_replace(" .", ". ", $txt);
			}
			
			while( strpos($txt," , ")!==false){
				$txt = str_replace(" , ", ", ", $txt);
			}
			
			while( strpos($txt," ,")!==false){
				$txt = str_replace(" ,", ", ", $txt);
			}
			
			while( strpos($txt," ! ")!==false){
				$txt = str_replace(" ! ", "! ", $txt);
			}
			
			while( strpos($txt," !")!==false){
				$txt = str_replace(" !", "! ", $txt);
			}
			
			while( strpos($txt," ? ")!==false){
				$txt = str_replace(" ? ", "? ", $txt);
			}
			
			while( strpos($txt," ?")!==false){
				$txt = str_replace(" ?", "? ", $txt);
			}
			
			echo $txt;
		?>
	</body>
</html>