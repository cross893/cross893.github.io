<html>
	<head>
		<title>��� ������</title>
	</head>
	
	<body>
		<?php
			$a = $_GET['Pass0'];
			$b = $_GET['Pass1']; 
			echo ($a == $b ? "������ ���������" : "������ �� ���������");
		?> 
	</body> 
</html>