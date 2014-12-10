(function (global) {
	var EE;

	if (!global.UAM) {
		global.UAM = {};
	}

	EE = function () {
		//store the listeners somewhere
		this.listeners = {};
	};

	EE.prototype.on = function (eventName, listener, context) {
		if (!this.listeners[eventName]) {
			this.listeners[eventName] = [];
		}
		var element = {funkcja: listener, kontekst: context};
		this.listeners[eventName].push(element);

	};

	EE.prototype.emit = function (eventName /*, other args...*/) {
		var args = [];
		for (var i = 1; i < arguments.length; i++) {
			args.push(arguments[i]);
		}
		if (this.listeners[eventName]) {
			for (var i=0; i<this.listeners[eventName].length; i++) {
				this.listeners[eventName][i].funkcja.apply(this.listeners[eventName][i].kontekst, args);
			}
		}
				
	};

//	var ee = new EE();
//
//	var removeListener = ee.on('test', function (arg1, arg2) {
//		console.log(arg1, arg2, this.key);
//	}, { key: 'value' });
//
//	ee.emit('test', 1, 2); // 1, 2 value
//
//	removeListener(); //removes my listener from the event emitter;
//
//	ee.emit('test'); //nothing will execute

	global.UAM.EventEmitter = EE;

}(window));
