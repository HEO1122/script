document.getElementById('id').onfocus = function(){
	this.parentNode.style.border = '1px solid lightgreen';
}

document.getElementById('id').onblur = function(){
	this.parentNode.style.border = '1px solid #dadada';
}