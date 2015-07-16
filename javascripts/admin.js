$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("G8cXsz7Z2PCMYbyKMRubHvk6BAgEYci2oYNMSUmm", "ovq6mqOtamFGGldOIKJXQLHLisXb3Z1sm1QpHObU"); 

    var LoginView = Parse.View.extend({
        template: Handlebars.compile($('#login-tpl').html()),
        events: {
            'submit .form-signin': 'login'
        },
        login: function(e) {
     
            // Prevent Default Submit Event
            e.preventDefault();
     
            // Get data from the form and put them into variables
            var data = $(e.target).serializeArray(),
                username = data[0].value,
                password = data[1].value;
                console.log(username);
                console.log(password);
            // Call Parse Login function with those variables
            Parse.User.logIn(username, password, {
                // If the username and password matches
                success: function(user) {
                    console.log("success login");
                    var welcomeView = new WelcomeView({ model: user });
                    welcomeView.render();
                    $('.main-container').html(welcomeView.el);
                },
                // If there is an error
                error: function(user, error) {
                    console.log(error);
                }
            });
        },
            render: function(){
            this.$el.html(this.template());
        }
    });

    var loginView = new LoginView();
    loginView.render();
    $('.main-container').html(loginView.el);
    
});