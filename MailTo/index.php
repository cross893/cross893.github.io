<html>
	<head>
		<title>Отправка почты с изображением</title>
	</head>
	
	<body bgcolor=#6B8E23>
		<form action="test.php" method="post" align="center">
			<pre>Укажите ФИО            Укажите E-mail</pre>
			<input type="text" name="fio" placeholder="Укажите ФИО" required>
			<input type="text" name="email" placeholder="Укажите e-mail" required>
			<br><br>
			<pre>Введите сообщение</pre>
			<textarea name="message" placeholder="Введите сообщение" cols=120 rows=30></textarea>
			<br>
			<input type="file" name="file" accept="image/*">
			<input type="submit" value="Отправить">
		</form>
	</body>
</html> <!--CrossHofmann-->