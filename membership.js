var emptyval = false;
var emailval = false;
var passwordval = false;
var postalcodeval = false;
var ageval = false;

function validateEmail() {
    var emailInput = document.getElementById("email");
    var errorMsg = document.getElementById("emailerr");
    emailInput.style.background = "rgb(255,233,233)";
    try {
        var regex = new RegExp(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/);
        if (!regex.test(emailInput.value)) {
            throw "Please provide a valid email address";
        }
        emailInput.style.background = "";
        errorMsg.style.display = "none";
        errorMsg.innerHTML = "";
        emailval = true;
    }
    catch (msg) {
        errorMsg.style.display = "block";
        errorMsg.innerHTML = msg;
        emailInput.style.background = "rgb(255,233,233)";
        emailval = false;
    }
}
function validatePostalCode() {
    var pcodeInput = document.getElementById("postalCode");
    var errorMsg = document.getElementById("postalCodeerr");
    try {
        var regex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);
        if (!regex.test(pcodeInput.value)) {
            throw "Please provide a valid postal code";
        }
        pcodeInput.style.background = "";
        errorMsg.style.display = "none";
        errorMsg.innerHTML = "";
        postalcodeval = true;
    }
    catch (msg) {
        errorMsg.style.display = "block";
        errorMsg.innerHTML = msg;
        pcodeInput.style.background = "rgb(255,233,233)";
        postalcodeval = false;
    }

}
function validateAge() {
    var ageInput = document.getElementById("age");
    var errorMsg = document.getElementById("ageerr");
    try {
        if (ageInput.value < 18) {
            throw "Age must be at least 18 years old";
        }
        ageInput.style.background = "";
        errorMsg.style.display = "none";
        errorMsg.innerHTML = "";
        ageval = true;
    }
    catch (msg) {
        errorMsg.style.display = "block";
        errorMsg.innerHTML = msg;
        ageInput.style.background = "rgb(255,233,233)";
        ageval = false;
    }
}
function validatePassword() {
    var pw1Input = document.getElementById("password");
    var pw2Input = document.getElementById("repassword");
    var errorMsg = document.getElementById("repassworderr");
    try {
        if (pw1Input.value.length < 6)
            throw "Password must be at least 6 characters"
        else if (pw1Input.value !== pw2Input.value)
            throw "Please check password"
        pw1Input.style.background = "";
        pw2Input.style.background = "";
        errorMsg.style.display = "none";
        errorMsg.innerHTML = "";
        passwordval = true;
    }
    catch(msg) {
        errorMsg.style.display = "block";
        errorMsg.innerHTML = msg;
        pw1Input.style.background = "rgb(255,233,233)";
        pw2Input.style.background = "rgb(255,233,233)";
        passwordval = false;
    }
}
function validateEmpty() {
    var fields = ["firstName", "lastName", "address", "city", "postalCode", "age", "password", "repassword", "email"];
    emptyval = true;
    for (field in fields) {
        if (document.getElementById(fields[field]).value === "") {
            emptyval = false;
            document.getElementById(fields[field]).style.background = "rgb(255,233,233)";
            document.getElementById(fields[field] + "err").innerHTML = "This field should not be empty";
        }
        else {
            document.getElementById(fields[field]).style.background = "";
            document.getElementById(fields[field] + "err").innerHTML = "";

        }
    }
}

function openProfile() {
    var propertyWidth = 460;
    var propertyHeight = 680;
    var winLeft = ((screen.width - propertyWidth) / 2);
    var winTop = ((screen.height - propertyHeight) / 2);
    var winOptions = "width=250,height=400";
    winOptions += ",left=" + winLeft;
    winOptions += ",top=" + winTop;
    validateEmpty();
    if (emptyval && emailval && ageval && postalcodeval && passwordval) {
        window.alert("Your registration has been confirmed.");
        var profileWindow = window.open("profile.html", "Profile page", winOptions);
        profileWindow.focus();
    } else {
        window.alert("Please check the red fields!");
    }
}

function createEventListeners() {
    var fnameInput = document.getElementById("firstName");
    var lnameInput = document.getElementById("lastName");
    var addressInput = document.getElementById("address");
    var cityInput = document.getElementById("city");
    var emailInput = document.getElementById("email");
    var ageInput = document.getElementById("age");
    var pcodeInput = document.getElementById("postalCode");
    var pw1Input = document.getElementById("password");
    var pw2Input = document.getElementById("repassword");
    if (pcodeInput.addEventListener) {
        //pcodeInput.addEventListener("change", validateEmpty, false);
        pcodeInput.addEventListener("change", validatePostalCode, false);
        //ageInput.addEventListener("change", validateEmpty, false);
        ageInput.addEventListener("change", validateAge, false);
        //pw1Input.addEventListener("change", validateEmpty, false);
        pw1Input.addEventListener("change", validatePassword, false);
        //pw2Input.addEventListener("change", validateEmpty, false);
        pw2Input.addEventListener("change", validatePassword, false);
        //emailInput.addEventListener("change", validateEmpty, false);
        emailInput.addEventListener("change", validateEmail, false);
        //fnameInput.addEventListener("change", validateEmpty, false);
        //lnameInput.addEventListener("change", validateEmpty, false);
        //addressInput.addEventListener("change", validateEmpty, false);
        //cityInput.addEventListener("change", validateEmpty, false);
    } else if (pcodeInput.attachEvent) {
        //pcodeInput.attachEvent("onchange", validateEmpty);
        pcodeInput.attachEvent("onchange", validatePostalCode);
        //ageInput.attachEvent("onchange", validateEmpty);
        ageInput.attachEvent("onchange", validateAge);
        //pw1Input.attachEvent("onchange", validateEmpty);
        pw1Input.attachEvent("onchange", validatePassword);
        //pw2Input.attachEvent("onchange", validateEmpty);
        pw2Input.attachEvent("onchange", validatePassword);
        //emailInput.attachEvent("onchange", validateEmpty);
        emailInput.attachEvent("onchange", validateEmail);
        //fnameInput.attachEvent("onchange", validateEmpty);
        //lnameInput.attachEvent("onchange", validateEmpty);
        //addressInput.attachEvent("onchange", validateEmpty);
        //cityInput.attachEvent("onchange", validateEmpty);
    }
    

}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners(), false);
    //window.addEventListener("load", validateEmpty(), false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
    //window.attachEvent("onload", validateEmpty);
}