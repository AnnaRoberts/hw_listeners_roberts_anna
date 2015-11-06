//This event listener will listen for a click, and then change the heading color to the list item color, yellow

var Heading = document.getElementById( 'Heading' ) ;

Heading.addEventListener('click', function() {
    Heading.className = 'yellow' ;
});


