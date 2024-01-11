if (
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
let observer = new IntersectionObserver(entries => {
  if (entries[0].boundingClientRect.y < 0) {
    document.body.classList.add("toc-top");
  } else {
    document.body.classList.remove("toc-follow");
  }
});
observer.observe(document.querySelector("#makemodelPositioner"));
}
