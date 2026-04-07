const getResponse = fetch("http://localhost:5105/testimonials");
const testimonialsJson = await getResponse.json();
const testimonialsList = document.querySelector("ul[name=testimonials_list]");
for (let i = 0; i < testimonialsJson.length; i++) {
	const testimonial = testimonialsJson[i];
	const feedback = testimonial.feedback;
	const rating = testimonial.rating;
	const newLi = document.createElement("li");
	newLi.innerText = `Feedback: ${feedback}, Rating: ${rating}`;
	testimonialsList.appendChild(newLi);
}

const form = document.querySelector("form");
form.addEventListener("submit", async () => {
	fetch();
});
