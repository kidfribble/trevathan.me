var subnavparent = document.getElementsByClassName('mobile-scroll');
var subnavitems = subnavparent[0].children;

var itemSection= document.getElementsByClassName('subnav-enabled');
var sectionItems = itemSection[0].children;

for (i = 0; i < subnavitems.length; i++) {
  subnavitems[i].addEventListener('click', activeState, false);
}

function activeState(e) {
  if (e.target.classList.contains('active')) {
    return true;
  } else {
    for (i = 0; i < subnavitems.length; i++) {
      if (subnavitems[i] != e.target) {
        subnavitems[i].classList.remove('active');
        sectionItems[i].classList.add('inactive');
      } else {
        sectionItems[i].classList.remove('inactive');
      };
    }
    e.target.classList.add('active');
  }
}