const form = document.querySelector("#contactForm");
const submitButton = document.querySelector("#contactForm button[type='submit']");

form.addEventListener("submit", (event) => {
 event.preventDefault();

 // disable submit button
 submitButton.disabled = true;

 // send form data to server (replace with actual form submission code)
 setTimeout(() => {
 submitButton.disabled = false;
 alert("Your message has been sent successfully!");
 }, 2000);
});