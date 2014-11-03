var button;
var pole;
var activeElement;
var tab = [];

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
			alert("Hello, to już było");
		} else {
			text = document.createElement('li');
			text.textContent = tresc;
			document.getElementById("ul1").appendChild(text);
			tab.push(tresc);
		}
										
		


	});

	
	document.getElementById("ul1").addEventListener("click", function(event) {
		if (activeElement)
		{
			activeElement.classList.remove("active");
		}
		activeElement = event.target;
		activeElement.classList.add("active");
	});
};
	
	
