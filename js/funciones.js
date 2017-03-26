// #contactForm
// #name
// #email
// #subject
// #message
// #send


function validar() {

}

$(document).ready(function() {
    $("#contactForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 6
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true,
                minlength: 5
            },
            message: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            name: "Debe introducir su nombre",
            email: "Debe usar un e-mail valido"
        },
        submitHandler: function (form) {

        }
    });
});

function easter() {
    alert('Javascript EasterEgg!');
}
