<html>
	<head>
		<title>Ваш пароль</title>
	</head>
	
	<body>
		<?php
			$a = $_GET['Pass0'];
			$b = $_GET['Pass1']; 
			echo 'Ваше имя: ';
			echo $_GET['name'];
			echo '<br>Ваша почта: ';
			echo $_GET['e-mail'];
			echo '<br>';
			echo ($a == $b ? "Пароли совпадают" : "Пароли не совпадают");
		?> 
	</body> 
</html>