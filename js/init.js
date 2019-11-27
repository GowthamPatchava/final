(function($){
  $(function(){

    $('.sidenav').sidenav();

    $('.slider').slider({fullwidth: true, indicators: false, height: 687});
    $('.modal').modal({preventScrolling: true});
    $('.collapsible').collapsible();
    $('.scrollspy').scrollSpy();
    $('input#input_text, textarea#textarea2').characterCounter();

  }); // end of document ready
})(jQuery); // end of jQuery name space
