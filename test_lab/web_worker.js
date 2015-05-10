self.addEventListener('message', function(e) {
  var u = e.data.username;
  // send an output
  self.postMessage("<p>"+ u + ", well again..</p>");
}, false);
// $("#ground").append(this.inner_html);
/*
onmessage = function(e) {

	// Get the content of the message
	var u = e.data.username;

	// setInterval, and setTimeout are still available
	setInterval(function() {

		// Query the server, or call a service	 	 
		console.log(u);

	}, 1000);

}*/