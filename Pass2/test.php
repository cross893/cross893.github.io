<html>
	<head>
		<title>��� ������</title>
	</head>
	
	<body>
		<?php
			$a = $_GET['Pass0'];
			$b = $_GET['Pass1']; 
			echo '���� ���: ';
			echo $_GET['name'];
			echo '<br>���� �����: ';
			echo $_GET['e-mail'];
			echo '<br>';
			echo ($a == $b ? "������ ���������" : "������ �� ���������");
		?> 
	</body> 
</html>