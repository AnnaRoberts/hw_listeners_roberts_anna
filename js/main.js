var pageHeading = document.getElementById( 'pageHeading' );
var clicker = 1 ;

var selectedElement = document.body;
var newDOMElement = document.createElement( 'article' );

pageHeading.addEventListener ('click', function() {

    newDOMElement.innerHTML = "This is click number " + clicker;

    selectedElement.appendChild( newDOMElement );

    // clicker += 1 ;
    clicker = clicker + 1;
});
