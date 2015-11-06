var form = document.getElementById ("form")
form.addEventListener ("submit", function(e){
    event.preventDefault ();
    console.log ("The firstname is: " + document.getElementById("firstname").value);
    console.log ("The lastname is: " + document.getElementById("lastname").value);
    console.log ("The email is: " + document.getElementById("email").value);
    console.log ("The message is: " + document.getElementById("message").value);

});
