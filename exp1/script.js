function registerUser() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (name && email && phone) {
    document.getElementById('message').innerText =
      `Thank you, ${name}! You have registered successfully.`;
    console.log("User Details:", { name, email, phone });
  } else {
    alert("Please fill all fields before submitting.");
  }
}