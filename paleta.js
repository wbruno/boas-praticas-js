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
			$body.classList.remove('black','blue','red','yellow','pink','white','green','gray');

			$body.classList.add($this.getAttribute('data-class'));			
		}
	});


}(window, document));
