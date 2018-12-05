

$(document).ready(function(){
    $("a[href^='#']").on("click", function(e) {
    e.preventDefault();
    var hash = this.hash;
    if (hash.length > 0) {
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        1000,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});