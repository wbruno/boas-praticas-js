var $btn  = document.getElementById('btn'),
	$body = document.getElementsByTagName('body')[0],
	i     = 0,
	count = 2,
	BASE  = '';

var changeBg = function() {
	$body.classList.toggle('black');
}

$btn.addEventListener('click', changeBg);

$btn.addEventListener('click', function() {
	console.log('outra coisa 2');
});