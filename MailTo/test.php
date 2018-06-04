<html>
	<head>
		<title>Подписка на рассылку</title>
	</head>
	
	<body bgcolor=#6B8E23>
		<?php
			$fio = $_POST['fio'];
			$email = $_POST['email'];
			$fio = htmlspecialchars($fio);
			$email = htmlspecialchars($email);
			$fio = urldecode($fio);
			$email = urldecode($email);
			$fio = trim($fio);
			$email = trim($email);
			
			if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
				echo "<h1 align='center'>Сообщение успешно отправлено</h1>";
			}else{
				echo "<h1 align='center'>При отправке сообщений возникли ошибки почта указана не правильно<h1>";
			}
			
		?>
	</body> 
</html>  <!--CrossHofmann-->