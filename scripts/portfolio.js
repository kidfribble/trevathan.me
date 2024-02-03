var parent = 'workgroup';
const focusList = document.getElementsByClassName(parent);


for (i = 0; i < focusList.length; i++) {
  focusList[i].addEventListener('click', peerIn, false);
}

function peerIn(e) {
  let node = e.target.parentNode;

  while (node != null){
    if (node.classList.contains(parent)) {
      if (node.classList.contains('peering')) {
        node.classList.remove('peering');
        return true;
      }
      node.classList.add('peering');
      return true;
    }

    node = node.parentNode;
  }
}