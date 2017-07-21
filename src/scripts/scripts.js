var projects = [
    {
        "name": "Claim Academy"
        "image":
    } 
];

$(document).ready(function() {
    
    $('#contactForm').on('submit', submitContactForm);

});

function submitContactForm() {
    event.preventDefault();

    var x = ["email"].value;

    if (x == "") {
        alert("Email must be filled out");
        return false;
    } else {
        $(this).slideUp();
        $("#success").slideDown();
        //alert('Thank you for submitting the form');
    }
}

$(document).ready(function() {

$.each(projects), function(index, project) {
    console.log(project);
    $('#projects').append('<a href="' + project.link +'"target=_blank"><img src="project.image"' + + '"/>' + project.name + '</a>');
});