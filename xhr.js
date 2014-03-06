/**
 * @author William Bruno <wbrunom@gmail.com>
 */

var XHR = (function(){

	var module = {};

	module._init = function(){
		return new XMLHttpRequest();
	};
	module._onready = function(xmlhttp, cb) {
		xmlhttp.onreadystatechange = function(){
			if (xmlhttp.status === 200 && xmlhttp.readyState === 4){
				cb(xmlhttp.responseText);
			}
		};
	}

	module.get = function(url, cb){
		var xmlhttp = module._init();
		xmlhttp.open('GET', url);
		xmlhttp.send();

		module._onready(xmlhttp, cb);
	};
	module.post = function(url, data, cb){
		var xmlhttp = module._init();
		xmlhttp.open('POST', url);
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xmlhttp.send(data);
		
		module._onready(xmlhttp, cb);
	};

	return {
		get: module.get,
		post: module.post
	};

}());