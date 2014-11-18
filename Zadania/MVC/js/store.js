UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (d) {
var tmp;
var czyIstnieje = false;
	for (var i=0; i< this.data.length; i++) {
			tmp = this.data[i];
			if (tmp === d) {			
				czyIstnieje = true;
				break;
			}
	}
			
			if (czyIstnieje) {
				//alert("Already Exists");
			} else {			
				this.data.push(d);
				this.emit("add_tolist", d);
			}
};
UAM.Store.prototype.update = function (id, data) {
	
};
