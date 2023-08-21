var calendar = document.querySelector(".yoyo");
var prevBtn = calendar.querySelector(".prev");
var nextBtn = calendar.querySelector(".next");
var days = calendar.querySelector(".days");

var currentDate = new Date();
renderCalendar(currentDate);

prevBtn.addEventListener("click", function() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextBtn.addEventListener("click", function() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

function renderCalendar(date) {
  var monthYear = calendar.querySelector(".month li:nth-child(3)");
  monthYear.textContent = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  });

  days.innerHTML = "";


  var numDays = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  var firstDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  
  for (var i = 0; i < firstDay; i++) {
    var li = document.createElement("li");
    days.appendChild(li);
  }

  
  for (var i = 1; i <= numDays; i++) {
    var li = document.createElement("li");
    li.textContent = i;
    if (i === date.getDate()) {
      li.classList.add("active");
    }
    days.appendChild(li);
  }
}


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
			setTimeout(carousel, 5000);
		}
		carousel();