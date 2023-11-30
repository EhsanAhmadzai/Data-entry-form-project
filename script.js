function submitForm() {
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    google.script.run.addData(formData);

    // You can add further logic here, such as showing a confirmation message or resetting the form.
}
