UAM.FooterCtrl = function (view, store) {

	this.view = view;
	this.store = store;
	
	store.on("add_tolist", function (d, allCount) {
		view.setAllCount(allCount);
	});
	
	store.on("update", function (id, state, activeCount) {
		view.setActiveCount(activeCount);
	});
	
	view.on("save", function () {
		store.save();
	});

};