UAM.InputView = function (elem) {
	UAM.EventEmitter.call(this);
	this.element = elem;
	var button = elem.querySelector('#todo_add_button');
	var input = elem.querySelector('#todo_input');
	
	var self = this;
	button.addEventListener("click", function () {
		self.emit("add", input.value);
	});
};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);

