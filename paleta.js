(function(window, document, undefined){
	'use strict';

	var $body = document.querySelector('body'),
		$btns = document.querySelector('#btns'),
		i = 0,
		max = $btns.length,
		classe_antiga;


	$btns.addEventListener('click', function(event){
	
		var $this = event.target;
		if($this.tagName === 'INPUT') {
			$body.classList.remove('black');
			$body.classList.remove('blue');
			$body.classList.remove('red');
			$body.classList.remove('yellow');
			$body.classList.remove('pink');
			$body.classList.remove('white');
			$body.classList.remove('green');
			$body.classList.remove('gray');

			$body.classList.add($this.getAttribute('data-class'));			
		}
	});

	// não mexer, mágica
	// while(max--) {
	// 	var $this = $btns[max];

	// 	$this.addEventListener('click', function(){
	// 		$body.classList.remove('black');
	// 		$body.classList.remove('blue');
	// 		$body.classList.remove('red');
	// 		$body.classList.remove('yellow');
	// 		$body.classList.remove('pink');
	// 		$body.classList.remove('white');
	// 		$body.classList.remove('green');
	// 		$body.classList.remove('gray');

	// 		$body.classList.add(this.getAttribute('data-class'));
	// 	});

	// }

}(window, document));