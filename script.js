
var registeredEmail = "";
var registeredPassword = "";

function validateRegistrationForm() {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("regEmail").value;
    var number = document.getElementById("regPhonenumber").value;
    var password = document.getElementById("regPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var nameRegex = /^[a-zA-Z ]+$/;
    if (!nameRegex.test(firstName)) {
        alert("Please enter a valid first name (contains only alphabets and spaces).");
        return false;
    }

    if (!nameRegex.test(lastName)) {
        alert("Please enter a valid last name (contains only alphabets and spaces).");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address."); 
        return false;
    }

    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(number)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    var passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
    if (!passwordRegex.test(password)) {
        alert("Please enter a valid password (contains at least one uppercase letter, one lowercase letter, and one number).");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Password and confirm password do not match.");
        return false;
    }
    registeredEmail = email;
    registeredPassword = password;

    window.location.assign("login.html");
    alert( firstName + lastName + " Registration successful!");
    return true;
}

function validateLoginForm() {

    var uname = document.getElementById("uname").value;
    var logemail = document.getElementById("logEmail").value;
    var logpassword = document.getElementById("logPassword").value;

    if (logemail !== "karunakaranr738@gmail.com" || logpassword !== "Kk123") {
       
        alert(uname + " Invalid email or password. Please try again.");
        return false;
    }
    window.location.assign("home.html");
    alert(uname + " Signin successful!");
    return true;
}

