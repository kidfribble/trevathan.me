const debounce = (fn) => {

  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) { 
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      
      // Call our function and pass any params we received
      fn(...params);
    });

  } 
};

function rotateSmile(position)  {
  var smile = document.getElementById('smile');

  smile.style.rotate = position/10 + 'deg';
}

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;

  rotateSmile(window.scrollY);

  if (window.scrollY > zone[0] && window.scrollY < zone[1]) {
    document.documentElement.dataset.zone = 1;
  } else if (window.scrollY > zone[1] && window.scrollY < zone[2]) {
    document.documentElement.dataset.zone = 2;
  } else if (window.scrollY > zone[2] && window.scrollY < zone[3]) {
    document.documentElement.dataset.zone = 3;
  } else if (window.scrollY > zone[3] && window.scrollY < zone[4]) {
    document.documentElement.dataset.zone = 4;
  } else if (window.scrollY > zone[4] && window.scrollY < zone[5]) {
    document.documentElement.dataset.zone = 5;
  } else if (window.scrollY > zone[5] && window.scrollY < zone[6]) {
    document.documentElement.dataset.zone = 6;
  } else if (window.scrollY > zone[6] && window.scrollY < zone[7]) {
    document.documentElement.dataset.zone = 7;
  } else if (window.scrollY > zone[7] && window.scrollY < zone[8]) {
    document.documentElement.dataset.zone = 8;
  } else if (window.scrollY > zone[8]) {
    document.documentElement.dataset.zone = 9;
  }
}

let docHeight = document.documentElement.scrollHeight;

let zone = [1,2,3,4,5,6,7,8,9];

const threshholds = () => {
  for (i = 0; i < zone.length; i++) {
    zone[i] = (docHeight/zone.length)*i;
  }
}

document.addEventListener('scroll', debounce(storeScroll), { passive: true });

storeScroll();
threshholds();

