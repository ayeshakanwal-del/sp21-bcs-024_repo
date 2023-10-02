$(document).ready(function() {
    $('#signup-form').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        // Get the form data
        var formData = {
            username: $('#username').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            confirmPassword: $('#confirm-password').val()
        };
        
        // Perform client-side validation
        if (formData.password !== formData.confirmPassword) {
            $('#message').text('Passwords do not match.');
        } else {
            // display a success message
            $('#message').text('Sign-up successful!');
            
            // Clear the form
            $('#signup-form')[0].reset();
        }
    });
});
