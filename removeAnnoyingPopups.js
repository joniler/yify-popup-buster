if(document.readyState === "complete" || document.readyState === "interactive") {
  let modal = document.querySelector('.modal')
  if(modal) {
    document.querySelector('.modal').addEventListener('click', function (event) {
      event.stopPropagation();
    }, true);
  }
}