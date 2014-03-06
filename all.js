var $btn = document.getElementById('btn'),
	$body = document.getElementsByTagName('body')[0],
	i = 0,
	count = 2,
	BASE = '';

function changeBg(){

	if ($body.className.match(/black/g)) {
		$body.classList.remove('black');
	} else {
		$body.classList.add('black');
	}
}

$btn.addEventListener('click', changeBg);
$btn.addEventListener('click', function(){

	console.log('outra coisa 2');
});