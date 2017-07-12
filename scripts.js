function submitContactForm(){
    var x = document.forms["contactForm"]["email"].value;
    if(x ==""){
        alert("Email must be filled out");
    } else {
        alert('Thank you for submitting the form');
    }
}