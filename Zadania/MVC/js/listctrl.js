UAM.ListCtrl = function (view, store) {

	this.view = view;
	this.store = store;
	
	store.on("add_tolist", function (data) {
		view.add(data);
	});
	
	store.on("update", function (id, state) {
		view.update(id, state);
	});
	
	view.on("update", function(id) {
		store.update(id);
	});

};