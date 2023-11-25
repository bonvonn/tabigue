function validateForm() {
            
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    
    alert("Form submitted successfully!\nName: " + name + "\nEmail: " + email);
    return true;
}