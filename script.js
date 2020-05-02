$(function(){

  $(".navbar a, footer a").on("click", function(event){

    event.preventDefault();
    var hash = this.hash;
// créé une animation en 900 ms qui à l'élément on click va à la loccation de l'élément hash
    $("body,html").animate({scrollTop: $(hash).offset().top}, 900, function(){window.location.hash =hash;})
  })

$('.navbar-nav>li>a').on('click', function(){ // Quand on clique sur l'élément '.navbar-nav>li>a' , l'élément '.navbar-collapse' se cache
  
    $('.navbar-collapse').collapse('hide');
});


})
