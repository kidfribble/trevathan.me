var parent = 'workgroup';
const focusList = document.getElementsByClassName(parent);

for (i = 0; i < focusList.length; i++) {
  focusList[i].addEventListener('click', peerIn, false);
}

function peerIn(e) {
  let node = e.target.parentNode;

  while (node != null){
    if (node.classList.contains(parent)) {
      if (node.classList.contains('peering') && e.target.classList.contains('closeSet')) {
        node.classList.remove('peering');
        document.body.classList.remove('inview');
        return true;
      }
      node.classList.add('peering');
      
      document.body.classList.add('inview');
      return true;
    }

    node = node.parentNode;
  }
}

// Draggable
const sliderSet = document.getElementsByClassName('artwrap');

const startDragging = (e) => {
  mouseDown = true;
  startX = e.pageX - e.target.parentNode.offsetLeft;
  scrollLeft = e.target.parentNode.scrollLeft;
}

const stopDragging = (e) => {
  mouseDown = false;
}

const move = (e) => {
  e.preventDefault();

  if(!mouseDown) { return; }
  const x = e.pageX - e.target.parentNode.offsetLeft;
  const scroll = x - startX;
  e.target.parentNode.scrollLeft = scrollLeft - scroll;
}


let mouseDown = false;
let startX, scrollLeft;

for (i = 0; i < sliderSet.length; i++) {
  slider = sliderSet[i];
  // Add the event listeners
  slider.addEventListener('mousemove', move, false);
  slider.addEventListener('mousedown', startDragging, false);
  slider.addEventListener('mouseup', stopDragging, false);
  slider.addEventListener('mouseleave', stopDragging, false);
}