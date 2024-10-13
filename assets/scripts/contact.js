function submitForm() {
	console.log("SubmitForm...");
	let name = document.getElementById("name").value
	let email = document.getElementById("email").value
	let subject = document.getElementById("subject").value
	let description = document.getElementById("description").value
	console.log({ name, email, subject, description });
}