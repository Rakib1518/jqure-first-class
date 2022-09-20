/*$(
  function(){
    let pera = $('p');
    pera.click(function(){
     $(this).hide();
    })

})
*/
/*$(function(){
  let heidenBtn = $(".hide");
  let box = $(".box");
 heidenBtn.click( function){
  box.hide();
 }
}) 
*/
$(function(){
  let heidenBtn = $('.hide');
  let box = $('.box');
  let showBtn = $('.show');
  let hedine = $('.hiden');
  let boxn = $('.boxn');
  let shown = $('.shown');
  let shownBtn = $('.shownBtn');

  let hidettm = $('.hediet');
  let ntmebox = $('.boxnt');
  let showt = $('.showt');
  let shownBtnt = $('.shownBtnt');


  heidenBtn.click(function(){
    box.hide(500);
  });

  showBtn.click (function(){
    box.show(500);
  });
  hedine.click(function(){
    boxn.slideUp(500);
  });

  shown.click(function(){
    boxn.fadeIn(1500);
  });
  shownBtn.click(function(){
    box.slideToggle(500);
  });


 
  hidettm.click(function(){
    ntmebox.fadeToggle();
  })
  let FtoggLe = $('.TogglerBtn');
  let boxToggle = $('.boxToggle');

  FtoggLe.click(function(){
    boxToggle.fadeToggle(500);
  });



});


