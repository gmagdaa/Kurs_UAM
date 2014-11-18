UAM.ListView = function (elem) {
	UAM.EventEmitter.call(this);
	this.element = elem;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.add = function(data) {
	var text;
	var list;
	text = document.createElement('li');
	text.textContent = data;
	this.element.querySelector('#ul1').appendChild(text);
};

