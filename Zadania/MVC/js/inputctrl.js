UAM.InputCtrl = function (view, store) {

	this.view = view;
	this.store = store;
	
	view.on("add", function (data) {
		store.add(data);
	});

};