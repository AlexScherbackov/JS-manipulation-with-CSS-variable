'use strict';

let App =  {};

App.define = function(namespace){
	let parts = namespace.split('.'),
			parent = App, 
			i;
	
	if(parts[0] == 'App'){
		parts = parts.slice(1);
	}

	for(i = 0; i < parts.length; i++){
		if(typeof parent[parts[i]] == 'undefined'){
			parent[parts[i]] = {}
		}
		parent =  parent[parts[i]];
	}
	return parent;

}

App.define('utils');

App.utils = function(classControl, target){
	const inputs = document.querySelectorAll(classControl);

	function handleUpdate(e){
		const suf = this.dataset.sizing || '';
		console.log(e.target);
		document.getElementById(target).style.setProperty(`--${this.name}`, this.value + suf);
  }

	inputs.forEach(input => input.addEventListener('change', handleUpdate));
	inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
}

App.utils('.control__input', 'actionTarget');
