var frames = {};
var aftertap = false;

frames = {
  a: function(){
    scrollPage($('div.body img:eq(0)'), 2);
    
    nextFrame = 'b';
    return complete, nextFrame;
  },
  
  b: function(){
    newTapPositions(1);
    aftertap = false;
    
    var wait_tap = setInterval(function(){
      if(aftertap == true){
        $('img.body_1, img.body_2').animate({
          marginLeft: -110
        });
        clearInterval(wait_tap);
      }
    }, 1);
    
    nextFrame = 'c';
    return complete, nextFrame;
  },
  
  c: function(){
    newTapPositions(2);
    aftertap = false;
    
    var wait_tap = setInterval(function(){
      if(aftertap == true){
        $('img.body_3').css('z-index', '9998');
        
        $('img.body_4').css('z-index', '9999');
    
        $('img.body_4').animate({
          right: 0
        }, 800);
    
        $('img.header_2').css('z-index', '9999');
        
        clearInterval(wait_tap);
      }
    }, 1);
    
    nextFrame = 'e';
    return complete, nextFrame;
  },
  
  // d: function(){
  //   $('img.body_4').css('z-index', '9999');
  //   
  //   $('img.body_4').animate({
  //     right: 0
  //   });
  //   
  //   $('img.header_2').css('z-index', '9999');
  //   
  //   nextFrame = 'e';
  //   complete = true;
  //   return complete, nextFrame;
  // },
  
  e: function(){
    scrollPage($('div.body img.body_4'), 1);
    
    nextFrame = 'f';
    return complete, nextFrame;
  },
  
  f: function(){
    newTapPositions(3);
    
    aftertap = false;
    
    var wait_tap = setInterval(function(){
      if(aftertap == true){
        $('img.body_5, img.header_3').css('z-index','9999');
        $('img.body_5, img.body_4').animate({
          marginLeft:-320
        }, 100);
        
        clearInterval(wait_tap);
      }
    }, 1);
    
    nextFrame = 'h';
    return complete, nextFrame;
  },
  
  
  h: function(){
    newTapPositions(4);
    
    aftertap = false;
    
    var wait_tap = setInterval(function(){
      if(aftertap == true){
        $('img.body_6').css('z-index', '9999').fadeTo(300, 1);
        
        clearInterval(wait_tap);
      }
    }, 1);
    
    nextFrame = 'j';
    return complete, nextFrame;
  },
  
  // Saving in case we bring this frame back
  // i: function(){
  //   newTapPositions(5);
  //   aftertap = false;
  // 
  //   var wait_tap = setInterval(function(){
  //     if(aftertap == true){
  //       $('img.body_5').css('margin-left', '0');
  //       $('img.body_5, img.body_6').animate({
  //         left:320
  //       }, 200);
  //       $('img.header_3').css('z-index', '9997');
  //       clearInterval(wait_tap);
  //     }
  //   }, 1);
  // 
  //   nextFrame = 'j';
  //   return complete, nextFrame;
  // },
  
  j: function(){
    newTapPositions(6);
    aftertap = false;
    
    var wait_tap = setInterval(function(){
      if(aftertap == true){
        $('img.body_7, img.header_4, img.tabbar_2').css('z-index','9999');
        
        clearInterval(wait_tap);
      }
    }, 1);
    
    nextFrame = 'k';
    return complete, nextFrame;
  },
  
  k: function(){
    newTapPositions(7);
    aftertap = false;
    
    var wait_tap = setInterval(function(){
      if(aftertap == true){
        $('img.body_8').css('z-index', '9999');
        $('img.body_7, img.body_8').animate({
          marginLeft:-320
        }, 200);
        
        
        clearInterval(wait_tap);
      }
    }, 1);
    
    nextFrame = 'l';
    return complete, nextFrame;
  },
  l: function(){
    newTapPositions(8);
    aftertap = false;
    
    var wait_tap = setInterval(function(){
      if(aftertap == true){
        $('img.body_9').css('z-index', '9999').animate({
          top: -157
        }, 200);
        
        clearInterval(wait_tap);
      }
    }, 1);
    
    nextFrame = 'm';
    return complete, nextFrame;
  },
  
  m: function(){
    newTapPositions(9);
    aftertap = false;
    
    var wait_tap = setInterval(function(){
      if(aftertap == true){
        $('img.body_9').animate({
          top: 49
        }, 200, function(){
          $('img.header_6, img.body_10').css('z-index', '9999');
          setTimeout(function(){
            newTapPositions(10);
            $('div.replay').fadeTo(1500, 1, function(){
              $('div.phone div.app_screens').hide()
              $('div.phone div.app_screens').html(originalHTML);
              $('div.phone div.app_screens, div.replay_inner').fadeTo(1000, 1, function(){
                $('div.replay').fadeTo(1500, .95);
              });
            });
          },2000);
        });
        clearInterval(wait_tap);
      }
    }, 1);
    
    end = true;
    return complete, end;
  }
  
}


function newTapPositions(step){
  target_x = $('a.tap.set_' + step).offset().left - parent_left;
  target_y = $('a.tap.set_' + step).offset().top - parent_top;
  
  $(finger).animate({
    top: target_y,
    left: target_x
    }, 1000, 'swing', function(){
      tapspot();
  });
  
  return target_x, target_y;
}


// tap animation flicker
function tapspot(){
  $(finger).animate({
    backgroundColor: 'rgba(255,255,255,9)',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.6)'
  }, 100, 'swing', function(){
    $(finger).animate({
      backgroundColor: 'rgba(255,255,255,.5)',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.4)'
    }, 100, function(){
      $(finger).animate({
        backgroundColor: 'rgba(255,255,255,9)',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.6)'
      }, 100, function(){
        aftertap = true;
        complete = true;
      });
    });
  });
}


function scrollPage(element, playCount){
  var i = 0;
  $('div.scroller').css('margin-top', '0');
  
  var scroll_page = setInterval(function(){
    i++;
    
    $('div.scroller').stop();
    
    //animate finger push
    var original_y = $(finger).offset().top - parent_top;
    var tap_y = $(finger).offset().top - parent_top - 20;
    
    //page position
    var page_y = $(element).offset().top - parent_top;
    
    $(finger).animate({
      top: tap_y,
      backgroundColor: 'rgba(255,255,255,9)',
      boxShadow: '0 3px 6px rgba(0, 0, 0, 0.6)'
    }, 200);
    
    $(element).animate({
      top: page_y - 1000
    }, 900, 'easeOutSine');
    
    
    $('div.scroller').fadeTo(0, 1).animate({
      marginTop: 40 * i
    }, 700, 'easeOutSine', function(){
      $('div.scroller').fadeTo(600, 0);
    });
      
    $(finger).animate({
      top: original_y
    }, 500);
    
    if (i==playCount){
      clearInterval(scroll_page);
      
      complete = true;
    }
  }, 1000);

}

function startPreview(replayDelay){
  finger = $('div.finger');
  jQuery.easing.def = "easeOutCirc";
  complete = true;
  nextFrame = 'a';
  end = false;
  frameRate = 1500;
  if(replayDelay != undefined && replayDelay != 'undefined'){
    frameDelay = replayDelay;
  }else{
    frameDelay = 1500;
  }
  
  parent_left = $(finger).parents('div.app_screens').offset().left + 20;
  parent_top = $(finger).parents('div.app_screens').offset().top + 20;
  
  //Starting animation with finger size
  setTimeout(function(){
    $(finger).fadeTo(300, 1, function(){
      $(finger).animate({
        width: 30,
        height: 30
        }, 900, 'easeOutBounce', function(){
          var int = setInterval(function(){
            if(!end == true){
              if (complete == true){
                setTimeout(function(){
                  frames[nextFrame]();
                }, frameRate);
                complete = false;
              }
            }else{
              window.clearInterval(int);
            }
          }, 100);
      });
    });
  },frameDelay);
}


$(function(){
  originalHTML = $('div.phone div.app_screens').html();
  startPreview();
  
  $('div.replay a.play').live('click', function(e){
    e.preventDefault();
    $('div.replay').stop();
    $('div.replay').fadeTo(300, 0, function(){
      $(this).hide();
      replayDelay = 100;
      startPreview(replayDelay);
    });
  });
  
});