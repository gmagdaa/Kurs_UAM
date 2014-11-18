var button;
var pole;
var activeElement;
var tab = [];
var all = 0;
var active = 0;

window.onload = function() {
	button = document.getElementById("button1");
	pole = document.getElementById("pole1");
	
	button.addEventListener("click", function () {
		var tresc = pole.value;
		var tmp;
		var czyIstnieje = false;
		var text;

		for (var i=0; i< tab.length; i++) {
			tmp = tab[i];
			if (tmp === tresc) {			
				czyIstnieje = true;
				break;
			}
		}
		
		if (czyIstnieje) {
			alert("Already Exists");
		} else {
			text = document.createElement('li');
			text.textContent = tresc;
			document.getElementById("ul1").appendChild(text);
			tab.push(tresc);
			all = all + 1;
			var footer = document.getElementById("footer_all");
			footer.textContent = all;
		}
	});
	
	
	document.getElementById("ul1").addEventListener("click", function(event) {
		
		activeElement = event.target;
		

		if (activeElement.classList.contains("active")) {
			activeElement.classList.remove("active");
			active = active - 1;
			var footer2 = document.getElementById("footer_active");
			footer2.textContent = active;
		} else {		

		activeElement.classList.add("active");
		active = active + 1;
		var footer2 = document.getElementById("footer_active");
		footer2.textContent = active;
		}
		
		
				/* if (activeElement)
		{
			activeElement.classList.remove("active");
		}  */
	});
};
	