window.addEventListener('DOMContentLoaded', function () {
	//After the page structure is loaded

	var store = new UAM.Store();

	var inputView = new UAM.InputView(document.querySelector('#inputview'));
	var listView = new UAM.ListView(document.querySelector('#listview'));
	var footerView = new UAM.FooterView(document.querySelector('#footerview'));

	new UAM.InputCtrl(inputView, store);
	new UAM.ListCtrl(listView, store);
	new UAM.FooterCtrl(footerView, store);
	

	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function () {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				//console.log(httpRequest.responseText);
				var data = JSON.parse(httpRequest.responseText);
				for (var i=1; i< data.length; i++) {
					store.add(data[i].value);
				}
			}
		}
	};
	httpRequest.open('GET', '/api/todos', true);
	httpRequest.send();

});

