<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Socket IO Chat with Node!</title>
	<link rel="stylesheet" href="css/main.css">
</head>
<body>
	<input type="text" class="nickname" placeholder="What is your nickname?">
	<ul id="messages"></ul>
	<form>
		<input class="message" type="text" id="m" placeholder="Let everyone know you're here" autocomplete="off" <?php echo date("D/d/H:i:s/A"); ?> >
		<button>send</button>
	</form>
  <script src="/socket.io/socket.io.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
