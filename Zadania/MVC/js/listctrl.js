UAM.ListCtrl = function (view, store) {

	this.view = view;
	this.store = store;
	
	store.on("add_tolist", function (data) {
		view.add(data);
	});

};