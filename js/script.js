'use strict';
(function(){ 

function Button(text) {
	this.text = text || 'Hello'; // Wartość domyślna
}

Button.prototype = {
	create: function() {
		var self = this;
		this.element = document.createElement('button');
		this.element.innerText = this.text;
		this.element.addEventListener('click', function() {
			alert(self.text); // parametr innej funkcji
		});
		document.body.appendChild(this.element); //umieszczanie elementu w DOM
	}
};
	var btn1 = new Button('Hello');
	btn1.create();
})(); 