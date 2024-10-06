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
		// document.body.insertAdjacentHTML('beforeend', data);
		// document.getElementById('footer-placeholder').innerHTML = data;
	});

function openSearchInput() {
	console.log("openSearchInput..");
	document.getElementById("searchInput")?.classList.toggle("display_Block")
}

function navClicked() {
	console.log("Nav clicked...");
}

function itemAClicked() {
	console.log("itemAClicked...");
}
function searchKeyPressed() {
	if (this.event.key === 'Enter') {
		let searchText = this.event.target.value
		this.event.target.value = null;
		console.log("Enter key pressed, calling API...", searchText);
	} else
		console.log("Key pressed is not Enter, doing nothing...");
}
