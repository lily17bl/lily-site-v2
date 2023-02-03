function generateRandomColor() {
    var listOfColors = [ "#F15BB5", "#FEE440", "#00BBF9", "#9B5DE5" ];
    var randomIndex = Math.floor( Math.random() * 4 );
    var randomColor = listOfColors[ randomIndex ];

    return randomColor;
}

function giveColorToElement( element ) {
    $ ( element ).hover( function() {
        $ ( this ).css( "color", generateRandomColor() );``
    
    }, function(){ 
        $ ( this ).css("color", "black");
    });
}

giveColorToElement( ".info-link" );
giveColorToElement( ".links-icon" );