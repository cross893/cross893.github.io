<html>
	<head>
		<title>Таблица</title>
	</head>
	
	<body>
		<?php
			$rows = $_GET['Author0'];
			$cols = $_GET['Author1'];
			$n = 1;
			echo "<table>\n";
			for ($i = 1; $i <= $rows; $i++) {
				echo "\t<tr>\n";
				for ($j = 1; $j <= $cols; $j++) {
					echo "\t\t<td>{$n}</td>\n";
					$n += 1;
				}
				echo "\t</tr>\n";
			}
			echo "</table>\n"
		?> 
	</body> 
</html>