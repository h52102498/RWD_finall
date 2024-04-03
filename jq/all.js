$(document).ready(function() {
    $('.menu-list').on('click',  function(e){
       e.preventDefault();
       $('body').toggleClass('menu-show');
   });
 });