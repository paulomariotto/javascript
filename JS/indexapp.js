$( '#tabacologo' ).toggle(4000)



$("#facebook").on('click', function() {
    $( "#img-facebook" ).animate( function(){
      width: "30%"
    })
}

$('navbar navbar-expand-lg navbar-light navbar-principal').on('click', function () {
    $('navbar-brand').fadeToggle(3000, function() {

    })
})

$('h1').css('color','red')

$('header ul li a').on('click', function(){
    $('nav-link').fadeToogle(slow, function () {

    })
}) 