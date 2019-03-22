
function setUpPage() {
    //var fName = document.getElementById("firstNameinfo");
    document.getElementById("firstNameinfo").innerHTML += window.opener.document.getElementById("firstName").value;
    document.getElementById("lastNameinfo").innerHTML += window.opener.document.getElementById("lastName").value;
    document.getElementById("addressinfo").innerHTML += window.opener.document.getElementById("address").value;
    document.getElementById("cityinfo").innerHTML += window.opener.document.getElementById("city").value;
    document.getElementById("postalCodeinfo").innerHTML += window.opener.document.getElementById("postalCode").value;
    document.getElementById("provinceinfo").innerHTML += window.opener.document.getElementById("province").value;
    document.getElementById("ageinfo").innerHTML += window.opener.document.getElementById("age").value;
    document.getElementById("emailinfo").innerHTML += window.opener.document.getElementById("email").value;
    //var fields = ["firstName", "lastName", "address", "city", "postalCode", "age", "email"];
    //for (field in fields) {
    //    document.getElementById(field + "info").innerHTML += window.opener.document.getElementById(field);
    //}
}
window.onload = setUpPage();