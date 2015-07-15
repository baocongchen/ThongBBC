$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("G8cXsz7Z2PCMYbyKMRubHvk6BAgEYci2oYNMSUmm", "ovq6mqOtamFGGldOIKJXQLHLisXb3Z1sm1QpHObU");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});