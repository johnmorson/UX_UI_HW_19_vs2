$(document).ready(function(e) { 
    $(".menu .flex_item").click(function(){
      var pageId = $(this).attr("data-page");
      $("html, body").animate({ scrollTop: $("#"+pageId).offset().top-150}, 1000);
    });
});