fetch('./common/header.html')
	.then(response => response.text())
	.then(data => {
		// Insert the HTML content directly as the first child of the body
		document.body.insertAdjacentHTML('afterbegin', data);
	});


fetch('./common/footer.html')
	.then(response => response.text())
	.then(data => {
		// Insert the HTML content directly as the first child of the body
		document.body.insertAdjacentHTML('beforeend', data);
		// document.getElementById('footer-placeholder').innerHTML = data;
	});