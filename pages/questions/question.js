const allOptions = document.querySelectorAll(".question-option");

// Adding Click Event Listener to remove selected-option class from all options first and then add that class to the clicked option

allOptions.forEach((option) => {
	option.addEventListener("click", (selectedOption) => {
		allOptions.forEach((option1) => {
			option1.classList.remove("selected-option");
		});
		selectedOption.target.classList.add("selected-option");
	});
});
