'use strict';

'use strict'

const inputs = document.querySelectorAll('.control__input');

function handleUpdate(e){
	const suf = this.dataset.sizing || '';
	console.log(e.target);
	document.getElementById('actionTarget').style.setProperty(`--${this.name}`, this.value + suf);
  
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));