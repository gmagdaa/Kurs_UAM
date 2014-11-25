UAM.ListView = function (elem) {
	UAM.EventEmitter.call(this);
	this.element = elem;
	var listElement = this.element.querySelector('#ul1');
		
	var self = this;
	listElement.addEventListener("click", function (event) {
		var liElement = event.target;
		var list = self.element.querySelector('#ul1').children;
		var id;
		
		for (var i=0; i<list.length; i++) {
			if (list[i] == liElement) {
				id = i;
				break;
			}
		}
		self.emit("update", id);
	});
};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.add = function(data) {
	var text;
	var list;
	text = document.createElement('li');
	text.textContent = data;
	this.element.querySelector('#ul1').appendChild(text);
};

UAM.ListView.prototype.update = function(id, state) {
	var el = this.element.querySelector('#ul1').children[id];
	
	if (state === 1) {
		el.classList.add("active");
	} else {
		el.classList.remove("active");
	}
};
