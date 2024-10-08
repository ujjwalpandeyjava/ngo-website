// Keep the code in the callback function, to work after dom load.
let examplesTimer = {
	1: null,
	2: null,
	3: null
}
$(document).ready(function () {
	$(window).on('scroll load', function () {
		let $element = $('.workExamples');

		if ($element?.length > 0) {
			let windowHeight = $(window).height();
			let elementTop = $element.offset().top;
			let elementBottom = elementTop + $element.outerHeight();
			let scrollTop = $(window).scrollTop();
			if (elementBottom > scrollTop && elementTop < scrollTop + windowHeight) {
				let eachWorkExample = $(".eachWorkExample");
				eachWorkExample.each((index, eachEg) => {
					let countShowDiv = eachEg.querySelector(".count")
					let totalCountToShow = countShowDiv.getAttribute("data-show_count")
					let countSpan = countShowDiv.querySelector("span")
					let count = Number(countSpan.textContent)
					if (count < totalCountToShow) {
						examplesTimer[index] = setInterval(() => {
							if (Number(countSpan.textContent) >= totalCountToShow)
								clearInterval(examplesTimer[index])
							else
								countSpan.innerText = Number(countSpan.textContent) + 10
						}, 1.5);
					}
				});
			}
		}
	});
});
