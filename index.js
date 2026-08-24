function validateForm() {

    let username = document.getElementById("mytext").value;
    let password = document.getElementById("mypass").value;
    let email = document.getElementById("myemail").value;

    if (!/^[A-Z]/.test(username)) {
        alert("Username must start with a capital letter");
        return;
    }

    if (!/[0-9]/.test(username)) {
        alert("Username must contain a digit");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Enter a valid email");
        return;
    }

    if (password.length < 8 || password.length > 20) {
        alert("Password must contain 8 to 20 characters");
        return;
    }

    if (!/[A-Z]/.test(password)) {
        alert("Password must contain a capital letter");
        return;
    }

    if (!/[0-9]/.test(password)) {
        alert("Password must contain a digit");
        return;
    }

    alert("Form submitted successfully!");

    document.getElementById("mytext").value = "";
    document.getElementById("mypass").value = "";
    document.getElementById("myemail").value = "";
}