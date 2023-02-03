$ ( ".info-link" ).hover( function() {
    var listOfColors = [ "#F15BB5", "#FEE440", "#00BBF9", "#9B5DE5" ];
    var randomIndex = Math.floor( Math.random() * 4 );
    var randomColor = listOfColors[ randomIndex ];
    $ ( this ).css( "color", randomColor );
    $ ( this ).css( "font-weight", "bold" );
}, function(){ 
    $ ( this ).css("color", "black");
    $ ( this ).css ( "font-weight", "400" );
});