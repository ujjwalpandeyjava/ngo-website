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

	let empowerWay = $("#ways");
	let theWays = empowerWay.attr("data-wayList").trim().split(",");
	let index = 0;

	if (theWays.length > 0) {
		// Show the first item immediately
		empowerWay.fadeToggle(500, function () {
			$(this).text(theWays[0].trim()).fadeToggle(500);
		});
		setInterval(() => {
			index++;
			if (index >= theWays.length)
				index = 0; // Reset to the first item when reaching the end

			// empowerWay.fadeOut(500, function () {
			// 	$(this).text(theWays[index].trim()).fadeIn(500); // Change text and fade in smoothly
			// });

			// empowerWay.slideUp(500, function () {
			// 	$(this).text(theWays[index].trim()).slideDown(500);
			// });

			// empowerWay.animate({ opacity: 0 }, 500, function() {
			// 	$(this).text(theWays[index].trim()).animate({ opacity: 1 }, 500);
			//   });

			// empowerWay.toggle(500, function () {
			// 	$(this).text(theWays[index].trim()).toggle(500);
			// });
			empowerWay.fadeToggle(500, function () {
				$(this).text(theWays[index].trim()).fadeToggle(500);
			});
		}, 2500); // Change every 1 second
	}
});

//  Init image slider
document.addEventListener('DOMContentLoaded', () => {
	let sliderConfig = {
		type: "loop",
		drag: 'free',
		snap: true,
		perPage: 2,
		height: '500px',
		focus: 'center',
		autoWidth: true,
		gap: "50px",
		autoPlay: true,
		pauseOnHover: true,
		pagination: true
	}
	new Splide('#splide1', sliderConfig)?.mount();
	// new Splide('#splide2', sliderConfig)?.mount();

	addTestimonialsElements()
	new Splide('#sliderTestimonial', { ...sliderConfig, pagination: false })?.mount();
});

function addTestimonialsElements() {
	let testimonialsElements = $("#testimonialsElements"); // Select the container
	testimonialsList.forEach((eachTestimony, index) => {
		let newLi = `
			<li class="splide__slide">
				<img src="${eachTestimony.personImageURL}" alt="${eachTestimony.personFirstName} ${eachTestimony.personLastName}">
				<div class="testimonial-content">
				<h3>${eachTestimony.title}</h3>
				<p>${eachTestimony.description}</p>
				<p><strong>${eachTestimony.personFirstName} ${eachTestimony.personLastName}</strong>, ${eachTestimony.organizationName}</p>
				</div>
			</li>`;
		// Append the newLi to the testimonialsElements
		testimonialsElements.append(newLi);
	});
}
let testimonialsList = [
	{
		title: "Inspiring Journey",
		description: "Ujjwal has been a guiding light in our organization with his innovative ideas and unrelenting dedication.",
		personImageURL: "https://voiceofslum.org/wp-content/uploads/2024/01/Untitled-design-3.png",
		personFirstName: "Ujjwal",
		personLastName: "Pandey",
		organizationName: "Voice of Slum"
	},
	{
		title: "Outstanding Leadership",
		description: "Pandey's leadership and compassion have brought significant changes, and his vision has helped us grow.",
		personImageURL: "https://voiceofslum.org/wp-content/uploads/2024/01/Untitled-design-4.png",
		personFirstName: "Priya",
		personLastName: "Sharma",
		organizationName: "Helping Hands"
	},
	{
		title: "A True Innovator",
		description: "Her innovative strategies have been game-changing, allowing us to streamline operations and increase impact.",
		personImageURL: "https://voiceofslum.org/wp-content/uploads/2024/01/Untitled-design-5.png",
		personFirstName: "Shreya",
		personLastName: "Singh",
		organizationName: "Innovate Now"
	},
	{
		title: "A Role Model",
		description: "Shivam has shown exemplary skills in project management, bringing the team together for every challenge.",
		personImageURL: "https://voiceofslum.org/wp-content/uploads/2024/01/Untitled-design-6.png",
		personFirstName: "Shivam",
		personLastName: "Verma",
		organizationName: "Empower Today"
	},
	{
		title: "An Inspiration to Many",
		description: "Riya's dedication and work ethic are second to none. She’s truly made an impact in the local community.",
		personImageURL: "https://voiceofslum.org/wp-content/uploads/2024/01/Untitled-design-7.png",
		personFirstName: "Riya",
		personLastName: "Patel",
		organizationName: "Inspire Foundation"
	}
];