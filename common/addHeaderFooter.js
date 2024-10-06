$(document).ready(() => {
	// fetch('./common/header.html')
	// 	.then(response => response.text())
	// 	.then(htmlText => {
	// 		// Insert the HTML content directly as the first child of the body
	// 		document.body.insertAdjacentHTML('afterbegin', htmlText);
	// 	});
	// fetch('./common/footer.html')
	// 	.then(response => response.text())
	// 	.then(htmlText => {
	// 		// Insert the HTML content directly as the first child of the body
	// 		document.body.insertAdjacentHTML('beforeend', htmlText);
	// 	});

	// Add header as first child of the body
	$.get('./common/header.html', function (htmlText) {
		document.body.insertAdjacentHTML('afterbegin', htmlText);
	});
	// Add header as last child of the body
	$.get('./common/footer.html', function (htmlText) {
		// document.body.insertAdjacentHTML('beforeend', htmlText);
	});
});


function openSearchInput() {
	document.getElementById("searchInput")?.classList.toggle("display_InlineBlock")
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

function toggleSideBarMenu() {
	$(".sideBarMenu").toggleClass("display_Block");
}

function emptySpaceAction() {
	let $nav = $(this.event.target).closest("nav");
	if (!$nav.is(this.event.target) && $nav.has(this.event.target).length === 0)
		toggleSideBarMenu();
}

