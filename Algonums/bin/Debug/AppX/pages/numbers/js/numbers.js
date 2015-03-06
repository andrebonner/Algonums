(function () {
	"use strict";

	WinJS.UI.Pages.define("/pages/numbers/pi.html", {
		// this function is called whenever a user navigates to this page. It
		// populates the page elements with the app's data.
		ready: function (element, options) {
			// TODO: Initialize the page here.
			document.getElementById("txtNumber").focus();
			// Retreive the button and register our event handler.
			var submitButton = document.getElementById("btnSubmit");
			submitButton.addEventListener("click",this.doPitOn,false);
		},

		doPitOn: function(eventInfo){
			var number = document.getElementById("txtNumber").value;
			if (number > 15) return;
			// PI - 3.14 to N decimal places
			var pi = Math.PI;
			var resultString = pi.toFixed(number);
			document.getElementById("lblResult").innerText = resultString;
		}

	});

	WinJS.UI.Pages.define("/pages/numbers/e.html", {
		// this function is called whenever a user navigates to this page. It
		// populates the page elements with the app's data.
		ready: function (element, options) {
			// TODO: Initialize the page here.
			document.getElementById("txtNumber").focus();
			// Retreive the button and register our event handler.
			var submitButton = document.getElementById("btnSubmit");
			submitButton.addEventListener("click",this.doEtOn,false);
		},

		doEtOn: function(eventInfo){
			var number = document.getElementById("txtNumber").value;
			if (number > 15) return;
			// E - 2.014 to N decimal places
			var e = Math.E;
			var resultString = e.toFixed(number);
			document.getElementById("lblResult").innerText = resultString;
		}

	});

	WinJS.UI.Pages.define("/pages/numbers/fibonacci.html", {
		// this function is called whenever a user navigates to this page. It
		// populates the page elements with the app's data.
		ready: function (element, options) {
			// TODO: Initialize the page here.
			document.getElementById("txtNumber").focus();
			// Retreive the button and register our event handler.
			var submitButton = document.getElementById("btnSubmit");
			submitButton.addEventListener("click",this.doFib,false);
		},

		doFib: function(eventInfo){
			var number = document.getElementById("txtNumber").value;
			var resultString = '';
			var x,total = 0,value = 1,pre=-1;
			if (number > 25) return;
			//Fibonacci to Nth number
			for(x=0; x<number; x++){
			// 0+1=>1
			// 1+1=>2
			// 1+2=>3
			// 2+3=>5
			// 3+5=>8
				total = pre+value;
				pre=value;
				value=total;
				resultString = resultString + total.toString() + ",";				
			}
			
			document.getElementById("lblResult").innerText = resultString;
		}

	});
	WinJS.UI.Pages.define("/pages/numbers/primef.html", {
		// this function is called whenever a user navigates to this page. It
		// populates the page elements with the app's data.
		ready: function (element, options) {
			// TODO: Initialize the page here.
			document.getElementById("txtNumber").focus();
			// Retreive the button and register our event handler.
			var submitButton = document.getElementById("btnSubmit");
			submitButton.addEventListener("click",this.doPrimeF,false);
		},

		doPrimeF: function(eventInfo){
			var number = document.getElementById("txtNumber").value;
			var resultString = '';
			var x,y, factor;
			var prime = true;
			//if (number > 25) return;
			//Prime Factor to Nth number
			for(x=1; x<number; x++){
				// prime numbers between 1 and 6 are: 1,2,3,6
				// factors of 6 are: 1,2,3,6 
				factor = number % x;
				//resultString = resultString + x.toString() + " _ ";
				//if(factor == 0){
					if(x <= 3){ prime = Boolean(x > 0); }
					if(x % 2 == 0 || x % 3 == 0) { prime = false;}
					for(y = 5; (y * y) <= x; y+=6){
						if(x % y == 0 || x % (y + 2) == 0){ prime = false;}
					}
					resultString = resultString + prime.toString() + " _ ";
					if (prime==true){
						resultString = resultString + x.toString() + ",";				
					}
				//}
			}
			
			document.getElementById("lblResult").innerText = resultString;
		}

	});
})();