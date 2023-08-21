// Slides
let slideIndex = 0;
		const slides = document.getElementsByClassName("mySlides");
		const captions = document.getElementsByClassName("caption");

		function carousel() {
			for (let i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
			slideIndex++;
			if (slideIndex > slides.length) {
				slideIndex = 1;
			}
			slides[slideIndex - 1].style.display = "block";
			for (let i = 0; i < captions.length; i++) {
				captions[i].style.display = "none";
			}
			captions[slideIndex - 1].style.display = "block";
			setTimeout(carousel, 3000); // Change image every 3 seconds
		}
		carousel();