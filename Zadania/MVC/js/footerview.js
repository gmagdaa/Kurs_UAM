UAM.FooterView = function (elem) {
	UAM.EventEmitter.call(this);
	this.element = elem;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);

UAM.FooterView.prototype.setActiveCount = function(activeCount) {
	var footerActive = this.element.querySelector('#footer_active');
	footerActive.textContent = activeCount;
};

UAM.FooterView.prototype.setAllCount = function(allCount) {
	var footerAll = this.element.querySelector('#footer_all');
	footerAll.textContent = allCount;
};
