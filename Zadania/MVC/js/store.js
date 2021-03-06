UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
	this.activelist = [];
	this.activeCount = 0;
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
			
	if (!czyIstnieje) {
		this.data.push(d);
		this.activelist.push(0);
		this.emit("add_tolist", d, this.data.length);
	}
};
UAM.Store.prototype.update = function (id, data) {
	
	if (this.activelist[id] === 0) {
		this.activelist[id] = 1;
		this.activeCount++;
	} else {
		this.activelist[id] = 0;
		this.activeCount--;
	}
	this.emit("update", id, this.activelist[id], this.activeCount);
};

