function showAlert() {
  alert("Explore our latest tourist packages! Contact us for more info.");
}

function handleForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert("Thank you for contacting us, " + name + "!");
  } else {
    alert("Please fill all fields.");
  }

  // Optionally reset form
  event.target.reset();
}
