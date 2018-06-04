<html>
	<head>
		<title>Ваш пароль</title>
	</head>
	
	<body>
		<?php
			$a = $_GET['Pass0'];
			$b = $_GET['Pass1']; 
			echo ($a == $b ? "Пароли совпадают" : "Пароли не совпадают");
		?> 
	</body> 
</html>