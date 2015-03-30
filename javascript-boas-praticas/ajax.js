var $body = document.getElementsByTagName('body')[0],
	$name = document.getElementById('name'),
	$email = document.getElementById('email'),
	$formAjax = document.getElementById('form-ajax');


XHR.get('lorem-ipsum.txt', function(data) {
	console.log(data);
	$body.innerHTML = data;
});


$formAjax.addEventListener('submit', function(e){
	e.preventDefault();
	var data = 'name=' + $name.value + '&email=' + $email.value;

	XHR.post('form.php', data, function(data){

		console.log(data);
	});

	return false;
});