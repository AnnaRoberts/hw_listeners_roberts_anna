//This event listener will listen for a click, and then change the heading
//color to the list item color, yellow

var Heading = document.getElementById( 'Heading' ) ;

Heading.addEventListener('click', function() {
    Heading.className = 'yellow' ;
});

//This event listener will listen for a click and then change the UL heading
//that says "Three easy steps" to "I promise they're easy!"

document.addEventListener('click', function(){
    document.getElementById("demo").innerHTML = "I promise they are easy!";
});


//This event listener will listen for when you mouseover the bottom h2
//'done' to change the heading from "That's It" to "see not so bad!"

var done = document.getElementById( 'done')
done.addEventListener('mouseover', function(){
    document.getElementById("done").innerHTML = "See not so bad!";
});
