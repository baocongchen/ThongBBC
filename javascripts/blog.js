$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("G8cXsz7Z2PCMYbyKMRubHvk6BAgEYci2oYNMSUmm", "ovq6mqOtamFGGldOIKJXQLHLisXb3Z1sm1QpHObU"); 
    var Blog = Parse.Object.extend("Blog");
    var Blogs = Parse.Collection.extend({
      model: Blog
    });

    // Create a new instance of Blogs collection
    var blogs = new Blogs();
    
    blogs.fetch({
    success: function(blogs) {
        console.log(blogs);
    },
    error: function(blogs, error) {
        console.log(error);
    }
});
});