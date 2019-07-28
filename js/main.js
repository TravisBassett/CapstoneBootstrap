

var randomMovieArray = ['Star Wars','Game of Thrones','Lord of the Rings','Harry Potter'];
var randomNumber = Math.floor(Math.random() * randomMovieArray.length - 1); 
var randomMovie = randomMovieArray[randomNumber];
console.log(randomMovieArray);

function apiCall(){
    $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(randomMovie)).then(function(response){
        var image = response.poster;

        if(image !== "N/A"){
            $('img').attr('scr', image);
        }
    });   
}